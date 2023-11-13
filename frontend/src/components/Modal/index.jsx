import WrapperModal from './styles'

const Modal = ({ deleteModel, setDeleteModel, deleteData }) => {
  return (
    <WrapperModal>
      <p>Tem certeza que deseja eliminar?</p>
      <button
        onClick={() => {
          deleteData(deleteModel.id)
          setDeleteModel({ id: '', show: false })
        }}
      >
        Sim
      </button>
      <button onClick={() => setDeleteModel({ id: '', show: false })}>
        Não
      </button>
    </WrapperModal>
  )
}

export default Modal
