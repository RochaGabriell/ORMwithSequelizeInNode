import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../../components/header'

const WrapperContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  background-color: green;
  color: black;
`

const Base = () => {
  return (
    <WrapperContainer>
      <Header />
      <Outlet />
    </WrapperContainer>
  )
}

export default Base
