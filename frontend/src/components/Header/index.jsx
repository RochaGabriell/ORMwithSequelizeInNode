import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import { Link } from 'react-router-dom'
import Botao from '../Botao'

import { WrapperContainer, Img, StyledLink } from './styles'

const Header = () => {
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie, removeCookie] = useCookies(['jwt'])
  const navigate = useNavigate()

  const handleLogout = () => {
    removeCookie('jwt', { path: '/' })
    navigate('/login')
  }

  return (
    <WrapperContainer>
      {cookies.jwt ? <StyledLink to="/">Cursos</StyledLink> : ''}
      <Img src="./src/assets/Blogging-With-Students-1.png" alt="" />
      {cookies.jwt ? <StyledLink to="/student">Estudantes</StyledLink> : ''}
      {cookies.jwt ? (
        <Botao onClick={handleLogout} label="Sair" title={'Sair'} />
      ) : (
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Botao
            label="Entrar"
            title={
              <Link
                style={{ textDecoration: 'none', color: 'white' }}
                to="/login"
              >
                Entrar
              </Link>
            }
          />
          <Botao
            label="Registrar"
            title={
              <Link
                style={{ textDecoration: 'none', color: 'white' }}
                to="/registrar"
              >
                Registrar
              </Link>
            }
          />
        </div>
      )}
    </WrapperContainer>
  )
}

export default Header
