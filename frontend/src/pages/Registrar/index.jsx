import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import EntradaTexto from '../../components/EntradaTexto'
import { Box, Paper, Typography, Grid, Link } from '@mui/material'

import * as AuthService from '../../services/AuthService'
import Botao from '../../components/Botao'
import styles from '../styles'

export default function Registrar() {
  const [cookies] = useCookies(['jwt'])
  const navigate = useNavigate()
  const [mensagem, setMensagem] = useState('')
  const [values, setValues] = useState({ nome: '', email: '', senha: '' })

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      const data = await AuthService.registrar(values)
      if (data) {
        if (data.errors) {
          console.error(data.errors)
          setMensagem('Erro ao cadastrar usuário')
        } else {
          setMensagem('Usuário cadastrado com sucesso!')
          navigate('/')
        }
      }
    } catch (ex) {
      setMensagem('Verifique os dados')
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
            Cadastre-se no sistema
          </Typography>
          <EntradaTexto
            id="outlined-basic"
            label="Nome"
            name="nome"
            type="text"
            value={values.nome}
            onChange={e => setValues({ ...values, nome: e.target.value })}
          />
          <Box sx={{ marginBottom: 3 }} />
          <EntradaTexto
            id="outlined-email-input"
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
          <Botao title="Salvar" sx={styles.submitButton} />
          <Link href="/" sx={styles.registroLink}>
            Já tem uma conta? Faça login
          </Link>

          <Typography variant="body2" sx={styles.errorMessage}>
            {mensagem}
          </Typography>
        </Paper>
      </form>
    </Grid>
  )
}
