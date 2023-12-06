import { Link } from 'react-router-dom'
import styled from 'styled-components'

const WrapperContainer = styled.div`
  display: flex;
  height: 4rem;
  background-color: #333;
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
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
  &:hover {
    color: #00f508;
  }
`

export { WrapperContainer, Img, StyledLink }
