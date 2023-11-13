import { useState, useEffect } from 'react'
import axios from 'axios'

import Modal from '../../components/Modal'

import {
  WrapperContainer,
  WrapperContainerLeft,
  ItemList,
  WrapperBtn,
  BtnEdit,
  BtnDelete,
  WrapperContainerRight,
  WrapperForm
} from './styles'

const Course = () => {
  const apiURL = 'http://localhost:3000'
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [dataSelected, setDataSelected] = useState(null)
  const [modalData, setModalData] = useState({
    id: '',
    curso: ''
  })
  const [deleteModel, setDeleteModel] = useState({
    id: '',
    show: false
  })

  const getData = async () => {
    try {
      const response = await axios.get(`${apiURL}/cursos`)
      setData(response.data)
      setError(null)
    } catch (error) {
      setError(error)
    }
  }

  const addCourse = async () => {
    try {
      const data = {
        curso: modalData.curso
      }

      if (dataSelected) {
        await axios.put(`${apiURL}/cursos/${dataSelected.id}`, data)
      } else {
        await axios.post(`${apiURL}/cursos`, data)
      }

      dataSelected(null)
      modalData({
        id: '',
        curso: ''
      })
      setError(null)
      getData()
    } catch (error) {
      setError(error)
    }
  }

  const updateCourse = async id => {
    try {
      const response = await axios.get(`${apiURL}/cursos/${id}`)
      setDataSelected(response.data)
      setModalData({
        id: response.data.id,
        curso: response.data.curso
      })
    } catch (error) {
      setError(error)
    }
  }

  const deleteCourse = async id => {
    try {
      await axios.delete(`${apiURL}/cursos/${id}`)
      getData()
    } catch (error) {
      setError(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <WrapperContainer>
      <WrapperContainerLeft>
        {error && <p>Error {error.message}</p>}
        {data.map(course => (
          <ItemList key={course.id}>
            <h1>{course.curso}</h1>
            <WrapperBtn>
              <BtnEdit onClick={() => updateCourse(course.id)}>Editar</BtnEdit>
              <BtnDelete
                onClick={() => setDeleteModel({ id: course.id, show: true })}
              >
                Eliminar
              </BtnDelete>
            </WrapperBtn>
          </ItemList>
        ))}
      </WrapperContainerLeft>

      {deleteModel.show && (
        <Modal
          deleteModel={deleteModel}
          setDeleteModel={setDeleteModel}
          deleteData={deleteCourse}
        />
      )}

      <WrapperContainerRight>
        <WrapperForm onSubmit={() => addCourse()}>
          <label htmlFor="curso">Curso</label>
          <input
            type="text"
            name="curso"
            id="curso"
            required
            value={modalData.curso}
            onChange={e =>
              setModalData({ ...modalData, curso: e.target.value })
            }
          />
          <button type="submit">
            {dataSelected ? 'Atualizar' : 'Cadastrar'}
          </button>
        </WrapperForm>
      </WrapperContainerRight>
    </WrapperContainer>
  )
}

export default Course
