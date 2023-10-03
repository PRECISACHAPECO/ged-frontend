import { useState } from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import InputAdornment from '@mui/material/InputAdornment'
import { OutlinedInput, TextField } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import Icon from 'src/@core/components/icon'
import Input from 'src/components/Form/Input'
import CheckLabel from 'src/components/Form/CheckLabel'
import { validationCPF } from 'src/configs/validations'
import DateField from 'src/components/Form/DateField'

const Fields = ({ control, errors, data, register, onClick, isUser, watch, getValues }) => {
    const [lenghtPassword, setLenghtPassword] = useState(null)

    const [values, setValues] = useState({
        showPassword: false,
        showConfirmPassword: false
    })

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword })
    }

    const handleMouseDownPassword = event => {
        event.preventDefault()
    }

    const handleClickShowConfirmPassword = () => {
        setValues({ ...values, showConfirmPassword: !values.showConfirmPassword })
    }

    const handleMouseDownConfirmPassword = event => {
        event.preventDefault()
    }

    const onChangeField = () => {
        watch()
    }

    return (
        data && (
            <>
                <Input md={12} title='Nome' name='fields.nome' control={control} errors={errors?.fields?.nome} />
                <Input
                    xs={12}
                    md={4}
                    title='CPF'
                    mask='cpf'
                    name='fields.cpf'
                    required={isUser ?? false}
                    control={control}
                    errors={errors?.fields?.cpf}
                    onChange={onChangeField}
                />
                <DateField
                    xs={12}
                    md={4}
                    title='Data de Nascimento'
                    value={data?.fields?.dataNascimento}
                    name='fields.dataNascimento'
                    control={control}
                    errors={errors?.fields?.dataNascimento}
                />
                <Input
                    xs={12}
                    md={4}
                    title='Email'
                    type='email'
                    required={isUser ?? false}
                    name='fields.email'
                    control={control}
                    errors={errors?.fields?.email}
                    onChange={onChangeField}
                />
                <Input
                    xs={12}
                    md={3}
                    title='Matricula'
                    name='fields.matricula'
                    control={control}
                    errors={errors?.fields?.matricula}
                />
                <CheckLabel
                    xs={12}
                    md={3}
                    onClick={onClick}
                    title='Usuário do sistema'
                    name='isUsuario'
                    value={data.fields.usuarioID > 0 ? true : false}
                    register={register}
                    disabled={getValues('fields').email && validationCPF(getValues('fields').cpf) ? false : true}
                />
                {isUser && (
                    <>
                        <Grid item xs={12} sm={3}>
                            <TextField
                                fullWidth
                                label='Senha'
                                id='input-password'
                                variant='outlined'
                                size='small'
                                type={values.showPassword ? 'text' : 'password'}
                                name='senha'
                                error={!!errors.senha}
                                helperText={errors.senha && errors.senha.message}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position='end'>
                                            <IconButton
                                                edge='end'
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                            >
                                                <Icon
                                                    icon={
                                                        values.showPassword ? 'mdi:eye-outline' : 'mdi:eye-off-outline'
                                                    }
                                                />
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                                {...register('senha', {
                                    minLength: {
                                        value: 4,
                                        message: 'Senha deve ter pelo menos 4 caracteres'
                                    }
                                })}
                            />
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <TextField
                                fullWidth
                                label='Confirme a senha'
                                id='input-confirm-password'
                                variant='outlined'
                                size='small'
                                type={values.showConfirmPassword ? 'text' : 'password'}
                                name='confirmaSenha'
                                error={!!errors.confirmaSenha}
                                helperText={errors.confirmaSenha && errors.confirmaSenha.message}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position='end'>
                                            <IconButton
                                                edge='end'
                                                onClick={handleClickShowConfirmPassword}
                                                onMouseDown={handleMouseDownConfirmPassword}
                                            >
                                                <Icon
                                                    icon={
                                                        values.showConfirmPassword
                                                            ? 'mdi:eye-outline'
                                                            : 'mdi:eye-off-outline'
                                                    }
                                                />
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                                onChange={e => {
                                    setLenghtPassword(e.target.value)
                                }}
                                {...register('confirmaSenha', {
                                    validate: value => value === watch('senha') || 'As senhas não coincidem'
                                })}
                            />
                        </Grid>
                    </>
                )}
            </>
        )
    )
}

export default Fields
