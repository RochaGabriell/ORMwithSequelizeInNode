import styled from 'styled-components'

const WrapperModal = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.65);
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  z-index: 1;

  p {
    color: white;
    font-size: 2rem;
  }

  button {
    width: 20%;
    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid #347b3e;
    font-size: 1.5rem;
    background-color: #347b3e;
    color: white;
  }
`

export default WrapperModal
