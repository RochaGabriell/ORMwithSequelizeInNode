import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import { verificarToken } from './AuthService'
import Carregando from '../components/Carregando'

const ProtectedRoute = ({ children }) => {
  const [cookies] = useCookies(['jwt'])
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const token = cookies.jwt
        if (!token) {
          navigate('/login')
          return
        }

        const valido = await verificarToken(token)
        if (!valido) {
          navigate('/', { replace: true })
        }
      } catch (error) {
        console.error('Erro ao verificar autenticação:', error)
        navigate('/', { replace: true })
      } finally {
        setIsLoading(false)
      }
    }
    verifyToken()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate])

  if (isLoading) {
    return <Carregando />
  }
  return children
}
export default ProtectedRoute
