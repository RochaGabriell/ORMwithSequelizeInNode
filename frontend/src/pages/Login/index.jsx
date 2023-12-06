import { Box, Paper, Typography, Grid, Link } from '@mui/material'
import EntradaTexto from '../../components/EntradaTexto'
import Botao from '../../components/Botao'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useCookies } from 'react-cookie'

import styles from '../styles'
import * as AuthService from '../../services/AuthService'

export default function Login() {
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie] = useCookies(['jwt'])
  const navigate = useNavigate()
  const [mensagem, setMensagem] = useState('')
  const [values, setValues] = useState({ email: '', senha: '' })

  const handleSubmit = async event => {
    event.preventDefault()

    try {
      const data = await AuthService.login(values)
      if (data) {
        if (data.errors) {
          console.error(data.errors)
          setMensagem('Erro ao logar')
        } else {
          setCookie('jwt', data.accessToken, { path: '/' })
          setMensagem('Logado com sucesso!')
          navigate('/')
        }
      }
    } catch (ex) {
      console.error(ex)
    }
  }

  useEffect(() => {
    if (cookies.jwt) {
      navigate('/')
    }
  }, [cookies.jwt, navigate])

  return (
    <Grid container sx={styles.container}>
      <form onSubmit={handleSubmit}>
        <Paper sx={styles.paper}>
          <Typography variant="h4" sx={styles.title}>
            Logue-se no sistema
          </Typography>
          <EntradaTexto
            id="outlined-required"
            label="E-mail"
            name="email"
            type="email"
            value={values.email}
            onChange={e => setValues({ ...values, email: e.target.value })}
          />
          <Box sx={{ marginBottom: 3 }} />
          <EntradaTexto
            id="outlined-password-input"
            label="Senha"
            name="senha"
            type="password"
            value={values.senha}
            onChange={e => setValues({ ...values, senha: e.target.value })}
          />
          <Botao title="Entrar" type="submit" sx={styles.submitButton} />
          <Link href="/registrar" sx={styles.registroLink}>
            Não tem registro? Cadastre-se
          </Link>

          <Typography variant="body2" sx={styles.errorMessage}>
            {mensagem}
          </Typography>
        </Paper>
      </form>
    </Grid>
  )
}
