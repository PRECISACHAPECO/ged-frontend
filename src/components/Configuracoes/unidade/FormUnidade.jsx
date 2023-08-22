import Router from 'next/router'
import { useEffect, useState, useContext, useRef } from 'react'
import { api } from 'src/configs/api'
import { ParametersContext } from 'src/context/ParametersContext'
import { SettingsContext } from 'src/@core/context/settingsContext'
import { RouteContext } from 'src/context/RouteContext'
import {
    Avatar,
    Button,
    Card,
    CardContent,
    CardHeader,
    Grid,
    Typography,
    Tooltip,
    IconButton,
    FormControl,
    Alert
} from '@mui/material'
import Icon from 'src/@core/components/icon'
import { useForm } from 'react-hook-form'
import Loading from 'src/components/Loading'
import toast from 'react-hot-toast'
import DialogForm from 'src/components/Defaults/Dialogs/Dialog'
import FormHeader from '../../Defaults/FormHeader'
import { toastMessage } from 'src/configs/defaultConfigs'
import { formatDate } from 'src/configs/conversions'
import { backRoute } from 'src/configs/defaultConfigs'
import { AuthContext } from 'src/context/AuthContext'
import Input from 'src/components/Form/Input'
import Select from 'src/components/Form/Select'
import { validationCNPJ } from 'src/configs/validations'

const FormUnidade = ({ id }) => {
    const { user, loggedUnity } = useContext(AuthContext)
    const { setId } = useContext(RouteContext)
    id = user.papelID === 1 ? id : loggedUnity.unidadeID

    const [open, setOpen] = useState(false)
    const [data, setData] = useState()
    const [fileSelect, setFileSelect] = useState()
    const [saving, setSaving] = useState(false)
    const [fileCurrent, setFileCurrent] = useState()
    const [photoProfile, setPhotoProfile] = useState(null)
    //* Componente é chamado na tela da unidade e Meus dados do fornecedor
    const router = Router
    const type = id && id > 0 ? 'edit' : 'new'
    const staticUrl = user.papelID === 1 ? router.pathname : '/configuracoes/unidade'
    const fileInputRef = useRef(null)
    const { settings } = useContext(SettingsContext)
    const mode = settings.mode

    const {
        trigger,
        handleSubmit,
        setValue,
        setError,
        reset,
        control,
        formState: { errors },
        register
    } = useForm()

    //? Função que busca o CEP
    const handleCep = async cep => {
        if (cep.length == 9) {
            //? Obter apenas núemros da string
            const cepNumber = cep.replace(/\D/g, '')
            api.get('https://viacep.com.br/ws/' + cepNumber + '/json/').then(response => {
                if (response.data.localidade) {
                    setValue('fields.logradouro', response.data.logradouro)
                    setValue('fields.bairro', response.data.bairro)
                    setValue('fields.cidade', response.data.localidade)
                    setValue('fields.uf', response.data.uf)
                    toast.success('Endereço encontrado!')
                } else {
                    toast.error('Endereço não encontrado!')
                }
            })
        }
    }

    console.log('erross', errors)

    // Função que atualiza os dados ou cria novo dependendo do tipo da rota
    const onSubmit = async datas => {
        // Verifica se o CNPJ é válido se ele for envalido retorna erro e retorna
        const cnpjValidation = validationCNPJ(datas.fields.cnpj)
        if (!cnpjValidation) {
            setError('fields.cnpj', {
                type: 'required',
                message: 'CNPJ inválido'
            })
            return
        }

        const data = {
            ...datas.fields,
            dataCadastro: formatDate(datas.dataCadastro, 'YYYY-MM-DD')
        }

        delete data.cabecalhoRelatorioTitle
        delete data.cabecalhoRelatorio

        try {
            if (type === 'new') {
                await api.post(`${backRoute(staticUrl)}/new/insertData`, data).then(response => {
                    router.push(`${backRoute(staticUrl)}`) //? backRoute pra remover 'novo' da rota
                    setId(response.data)
                    toast.success(toastMessage.successNew)
                })
            } else if (type === 'edit') {
                await api.post(`${staticUrl}/updateData/${id}`, data)
                toast.success(toastMessage.successUpdate)
                getData()
            }
        } catch (error) {
            if (error.response && error.response.status === 409) {
                toast.error(toastMessage.errorRepeated)
            } else {
                console.log(error)
            }
        }

        //? Se for fornecedor, atualiza os dados do usuário logado
        if (user.papelID == 2) {
            // Atualiza os dados do usuário logado no contexto
            for (const key in loggedUnity) {
                if (key in data) {
                    loggedUnity[key] = data[key]
                }
            }
            // Atualiza os dados do usuário logado no localStorage
            localStorage.setItem('loggedUnity', JSON.stringify(loggedUnity))
        }
    }

    // Função que deleta os dados
    const handleClickDelete = async () => {
        try {
            await api.delete(`${staticUrl}/${id}`)
            setId(null)
            setOpen(false)
            toast.success(toastMessage.successDelete)
        } catch (error) {
            if (error.response && error.response.status === 409) {
                toast.error(toastMessage.pendingDelete)
                setOpen(false)
            } else {
                console.log(error)
            }
        }
    }

    //? Função que traz os dados quando carrega a página e atualiza quando as dependências mudam
    const getData = async () => {
        if (type == 'edit') {
            try {
                const response = await api.get(`${staticUrl}/${id}`)
                reset(response.data)
                setData(response.data)
                setFileCurrent(response.data.fields.cabecalhoRelatorioTitle)
                setPhotoProfile(response.data?.fields?.cabecalhoRelatorio)
            } catch (error) {
                console.log(error)
            }
        } else {
            setData({}) //? Sair loading
            reset({
                //Todo: Pra não bugar campos quando carrega endereço pelo CEP
                fields: {
                    logradouro: '--',
                    bairro: '--',
                    cidade: '--',
                    uf: '--'
                }
            })
        }
    }
    useEffect(() => {
        getData()
    }, [id])

    //! Crud imagem cabeçalho relatórios
    const handleFileClick = () => {
        fileInputRef.current.click()
    }

    // Ao selecionar a foto, ela é enviada para o servidor e salva no banco de dados, como resposta atualiza a foto atual
    const handleFileSelect = async event => {
        const selectedFile = event.target.files[0]
        if (selectedFile) {
            console.log('troca fotooo')

            const formData = new FormData()
            formData.append('file', selectedFile)
            await api
                .post(`${staticUrl}/updateData/report/${id}`, formData)
                .then(response => {
                    setPhotoProfile(response.data)
                    toast.success('Foto atualizada com sucesso!')
                })
                .catch(error => {
                    toast.error(error.response?.data?.message ?? 'Erro ao atualizar foto de perfil, tente novamente!')
                })
        }
    }

    // Remove a imagen
    const handleDeleteImage = async () => {
        try {
            await api.delete(`${staticUrl}/fileReport/${id}`)
            setPhotoProfile(null)
            toast.success('Foto removida com sucesso!')
        } catch (error) {
            console.log(error)
            toast.error('Erro ao remover foto, tente novamente!')
        }
    }

    return (
        <>
            {!data && <Loading />}
            {data && (
                <>
                    <Card>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <FormHeader
                                btnCancel={user.papelID === 1 ? true : false}
                                btnSave
                                handleSubmit={() => handleSubmit(onSubmit)}
                                btnDelete={type === 'edit' && user.papelID === 1 ? true : false}
                                onclickDelete={() => setOpen(true)}
                                type={type}
                            />
                            <CardContent>
                                <Grid container spacing={4}>
                                    <Input
                                        xs={12}
                                        md={4}
                                        title='Nome Fantasia'
                                        name='fields.nomeFantasia'
                                        required={true}
                                        register={register}
                                        control={control}
                                        errors={errors?.fields?.nomeFantasia}
                                    />
                                    <Input
                                        xs={12}
                                        md={4}
                                        title='Razão Social'
                                        name='fields.razaoSocial'
                                        required={true}
                                        register={register}
                                        control={control}
                                        errors={errors?.fields?.razaoSocial}
                                    />
                                    <Input
                                        xs={12}
                                        md={4}
                                        title='CNPJ'
                                        name='fields.cnpj'
                                        mask='cnpj'
                                        required
                                        register={register}
                                        control={control}
                                        errors={errors?.fields?.cnpj}
                                    />
                                    <Input
                                        xs={12}
                                        md={4}
                                        title='Responsável'
                                        name='fields.responsavel'
                                        required={true}
                                        register={register}
                                        control={control}
                                        errors={errors?.fields?.responsavel}
                                    />
                                    <Input
                                        xs={12}
                                        md={4}
                                        title='E-mail'
                                        name='fields.email'
                                        type='email'
                                        required={true}
                                        register={register}
                                        control={control}
                                        errors={errors?.fields?.email}
                                    />
                                    <Input
                                        xs={12}
                                        md={4}
                                        title='Telefone 1'
                                        name='fields.telefone1'
                                        mask='telefone'
                                        required={false}
                                        register={register}
                                        control={control}
                                        errors={errors?.fields?.telefone1}
                                    />
                                    <Input
                                        xs={12}
                                        md={4}
                                        title='Telefone 2'
                                        name='fields.telefone2'
                                        mask='telefone'
                                        required={false}
                                        register={register}
                                        control={control}
                                        errors={errors?.fields?.telefone2}
                                    />
                                    <Input
                                        xs={12}
                                        md={4}
                                        title='CEP'
                                        name='fields.cep'
                                        getAddressByCep={handleCep}
                                        mask='cep'
                                        required={false}
                                        register={register}
                                        control={control}
                                        errors={errors?.fields?.cep}
                                    />
                                    <Input
                                        xs={12}
                                        md={4}
                                        title='Rua'
                                        name='fields.logradouro'
                                        required={false}
                                        register={register}
                                        control={control}
                                        errors={errors?.fields?.logradouro}
                                    />
                                    <Input
                                        xs={12}
                                        md={4}
                                        title='Número'
                                        name='fields.numero'
                                        required={false}
                                        register={register}
                                        control={control}
                                        errors={errors?.fields?.numero}
                                    />
                                    <Input
                                        xs={12}
                                        md={4}
                                        title='Complemento'
                                        name='fields.complemento'
                                        required={false}
                                        register={register}
                                        control={control}
                                        errors={errors?.fields?.complemento}
                                    />
                                    <Input
                                        xs={12}
                                        md={4}
                                        title='Bairro'
                                        name='fields.bairro'
                                        required={false}
                                        register={register}
                                        control={control}
                                        errors={errors?.fields?.bairro}
                                    />
                                    <Input
                                        xs={12}
                                        md={4}
                                        title='Cidade'
                                        name='fields.cidade'
                                        required={false}
                                        register={register}
                                        control={control}
                                        errors={errors?.fields?.cidade}
                                    />
                                    <Input
                                        xs={12}
                                        md={4}
                                        title='UF'
                                        name='fields.uf'
                                        mask='estado'
                                        required={false}
                                        register={register}
                                        control={control}
                                        errors={errors?.fields?.uf}
                                    />
                                </Grid>
                            </CardContent>
                        </form>
                    </Card>

                    {/* Parâmetros da unidade */}
                    {user.admin == 1 && type == 'edit' && (
                        <Card sx={{ mt: 4 }}>
                            <CardHeader title='Parâmetros' />
                            <CardContent>
                                <Grid container spacing={8}>
                                    <Grid item xs={12} md={2}>
                                        <Grid
                                            item
                                            xs={12}
                                            md={12}
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                height: '140px',
                                                position: 'relative',
                                                border: `${
                                                    mode === 'dark' ? '1px solid #65656E' : '1px solid #C5C6CD'
                                                }`,
                                                borderRadius: '8px'
                                            }}
                                        >
                                            {photoProfile && (
                                                <Tooltip title='Apagar foto do perfil' placement='top'>
                                                    <IconButton
                                                        size='small'
                                                        sx={{
                                                            position: 'absolute',
                                                            top: '8px',
                                                            right: '8px',
                                                            zIndex: '20',
                                                            color: 'white',
                                                            opacity: '0.8',
                                                            backgroundColor: '#FF4D49',
                                                            '&:hover': {
                                                                backgroundColor: '#FF4D49',
                                                                opacity: '1'
                                                            }
                                                        }}
                                                        onClick={handleDeleteImage}
                                                    >
                                                        <Icon icon='material-symbols:delete-outline' />
                                                    </IconButton>
                                                </Tooltip>
                                            )}

                                            <Tooltip
                                                title={photoProfile ? 'Alterar foto' : 'Inserir foto'}
                                                placement='top'
                                            >
                                                <FormControl
                                                    sx={{
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        height: '100%',
                                                        width: '100%'
                                                    }}
                                                >
                                                    <input
                                                        type='file'
                                                        ref={fileInputRef}
                                                        style={{ display: 'none' }}
                                                        onChange={handleFileSelect}
                                                    />
                                                    <Avatar
                                                        variant='rounded'
                                                        alt='Imagem do cabeçalho do relatório'
                                                        sx={{
                                                            width: '100%',
                                                            height: '100%',
                                                            cursor: 'pointer'
                                                        }}
                                                        onClick={handleFileClick}
                                                        src={photoProfile ?? 'https://gedagro.com.br/images/report.png'}
                                                    />
                                                </FormControl>
                                            </Tooltip>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} md={10}>
                                        <Grid container spacing={4}>
                                            <Input
                                                xs={12}
                                                md={12}
                                                title='Título do relatório'
                                                name='fields.tituloRelatorio'
                                                required={false}
                                                register={register}
                                                control={control}
                                                errors={errors?.fields?.tituloRelatorio}
                                            />

                                            <Select
                                                xs={12}
                                                md={8}
                                                multiple
                                                title='Extensões de Arquivos Permitidas'
                                                name={`fields.extensoes`}
                                                options={data.fields.allExtensions}
                                                value={data.fields.extensoes}
                                                register={register}
                                                setValue={setValue}
                                                control={control}
                                            />

                                            <Input
                                                xs={12}
                                                md={4}
                                                title='Tamanho máximo dos anexos (MB)'
                                                name='fields.anexosTamanhoMaximo'
                                                required={true}
                                                register={register}
                                                control={control}
                                                errors={errors?.fields?.anexosTamanhoMaximo}
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    )}
                    {type === 'edit' && data && (
                        <Typography variant='caption' sx={{ display: 'flex', justifyContent: 'end', p: 4 }}>
                            Data de cadastro:
                            {formatDate(data.fields.dataCadastro, 'DD/MM/YYYY')}
                        </Typography>
                    )}
                </>
            )}
            <DialogForm
                title='Excluir dado'
                text='Tem certeza que deseja excluir?'
                openModal={open}
                handleClose={() => setOpen(false)}
                handleSubmit={handleClickDelete}
                btnCancel
                btnConfirm
            />
        </>
    )
}

export default FormUnidade

// 579
