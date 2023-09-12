import { Card, Table, TableCell, TableContainer, TableHead, TableRow, TableBody, Checkbox } from '@mui/material'
import Router from 'next/router'
import { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import FormHeader from 'src/components/Defaults/FormHeader'
import { api } from 'src/configs/api'
import { AuthContext } from 'src/context/AuthContext'
import Loading from 'src/components/Loading'
import Check from 'src/components/Form/Check'
import toast from 'react-hot-toast'
import { toastMessage } from 'src/configs/defaultConfigs'

const FormNotificacao = () => {
    const router = Router
    const staticUrl = router.pathname

    const [data, setData] = useState(null)
    const { user, loggedUnity } = useContext(AuthContext)

    const {
        trigger,
        handleSubmit,
        reset,
        register,
        control,
        formState: { errors }
    } = useForm()

    const onSubmit = async values => {
        try {
            console.log('🚀 ~ onSubmit:', values)
            const response = await api.post(
                `${staticUrl}/updateData/${user.usuarioID}/${loggedUnity.unidadeID}`,
                values
            )
            toast.success(toastMessage.successUpdate)
        } catch (error) {
            console.log(error)
        }
    }

    const getData = async () => {
        try {
            const response = await api.get(`${staticUrl}/getData/${user.usuarioID}/${loggedUnity.unidadeID}`)
            setData(response.data)
            reset(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            {!data ? (
                <Loading show />
            ) : (
                <Card>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormHeader btnSave handleSubmit={() => handleSubmit(onSubmit)} type='edit' />
                    </form>

                    <TableContainer>
                        <Table sx={{ minWidth: 500 }}>
                            <TableHead
                                sx={{
                                    backgroundColor: theme =>
                                        theme.palette.mode === 'light' ? 'grey.50' : 'background.default'
                                }}
                            >
                                <TableRow>
                                    <TableCell sx={{ py: 3 }}>Rotina</TableCell>
                                    <TableCell sx={{ py: 3 }} align='center'>
                                        E-mail
                                    </TableCell>
                                    <TableCell sx={{ py: 3 }} align='center'>
                                        Alerta
                                    </TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {data &&
                                    data.map((item, index) => (
                                        <TableRow key={index} hover>
                                            <TableCell>{item.nome}</TableCell>
                                            <TableCell align='center' sx={{ pt: '0 !important', pb: '0 !important' }}>
                                                <Check
                                                    xs={1}
                                                    md={1}
                                                    name={`[${index}].email`}
                                                    value={item.email}
                                                    register={register}
                                                />
                                            </TableCell>
                                            <TableCell align='center' sx={{ pt: '0 !important', pb: '0 !important' }}>
                                                <Check
                                                    xs={1}
                                                    md={1}
                                                    name={`[${index}].alerta`}
                                                    value={item.alerta}
                                                    register={register}
                                                />
                                            </TableCell>
                                        </TableRow>
                                    ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Card>
            )}
        </>
    )
}

export default FormNotificacao
