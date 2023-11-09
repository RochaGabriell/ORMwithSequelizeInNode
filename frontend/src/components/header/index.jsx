import { Link } from 'react-router-dom'
import styled from 'styled-components'

const WrapperContainer = styled.div`
  display: flex;
  height: 4rem;
  background-color: white;
  align-items: center;
  justify-content: space-around;
`

const Img = styled.img`
  height: 100%;
`

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: black;
  font-weight: bold;
  font-size: 1.5rem;
  &:hover {
    color: #00f508;
  }
`

const Header = () => {
  return (
    <WrapperContainer>
      <StyledLink to="/">Cursos</StyledLink>
      <Img src="./src/assets/Blogging-With-Students-1.png" alt="" />
      <StyledLink to="/student">Estudantes</StyledLink>
    </WrapperContainer>
  )
}

export default Header
