import styled from 'styled-components'

const WrapperContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  height: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 1rem;
  }
`

const WrapperContainerLeft = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 0 1rem;
  height: 35rem;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #347b3e;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

const ItemList = styled.div`
  width: 100%;
  min-height: 5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 10px;
  background-color: #75ad0a;
  gap: 1rem;

  h1 {
    color: white;
    font-size: 1.5rem;
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 1rem;
    }
  }
`

const WrapperBtn = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`

const BtnEdit = styled.button`
  background-color: #347b3e;
  border: none;
  border-radius: 5px;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  font-size: 14px;

  @media screen and (max-width: 768px) {
    padding: 5px 10px;
    font-size: 12px;
  }
`

const BtnDelete = styled.button`
  background-color: #f44336;
  border: none;
  border-radius: 5px;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  font-size: 14px;

  @media screen and (max-width: 768px) {
    padding: 5px 10px;
    font-size: 12px;
  }
`

const WrapperContainerRight = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 30rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    margin-bottom: 1rem;
  }
`

const WrapperForm = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  label {
    font-size: 1.5rem;
  }

  input {
    width: 100%;
    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid #347b3e;
    font-size: 1.5rem;
  }

  button {
    width: 100%;
    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid #347b3e;
    font-size: 1.5rem;
    background-color: #347b3e;
    color: white;
  }

  select {
    width: 100%;
    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid #347b3e;
    font-size: 1.5rem;
  }
`

const WrapperDescription = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;

  .description {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 0.em;
  }
`

export {
  WrapperContainer,
  WrapperContainerLeft,
  ItemList,
  WrapperBtn,
  BtnEdit,
  BtnDelete,
  WrapperContainerRight,
  WrapperForm, 
  WrapperDescription
}
