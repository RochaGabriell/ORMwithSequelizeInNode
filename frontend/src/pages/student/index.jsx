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
  WrapperForm,
  WrapperDescription
} from '../../pages/course/styles'

const Student = () => {
  const apiURL = 'http://localhost:3000'
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [dataCourse, setDataCourse] = useState([])
  const [dataSelected, setDataSelected] = useState(null)
  const [modalData, setModalData] = useState({
    id: '',
    nome: '',
    email: '',
    cur_id: ''
  })
  const [deleteModel, setDeleteModel] = useState({
    id: '',
    show: false
  })

  const getData = async () => {
    try {
      const response = await axios.get(`${apiURL}/alunos`)
      const responseCourse = await axios.get(`${apiURL}/cursos`)
      setData(response.data)
      setDataCourse(responseCourse.data)
      setError(null)
    } catch (error) {
      setError(error)
    }
  }

  const CourseStudentTake = cur_id => {
    const course = dataCourse.find(course => course.id === cur_id)
    return course.curso
  }

  const addStudent = async () => {
    try {
      const data = {
        nome: modalData.nome,
        email: modalData.email,
        cur_id: modalData.cur_id
      }

      if (dataSelected) {
        await axios.put(`${apiURL}/alunos/${dataSelected.id}`, data)
      } else {
        await axios.post(`${apiURL}/alunos`, data)
      }

      dataSelected(null)
      setModalData({
        id: '',
        nome: '',
        email: '',
        cur_id: ''
      })
      setError(null)
      getData()
    } catch (error) {
      setError(error)
    }
  }

  const updateStudent = async id => {
    try {
      const response = await axios.get(`${apiURL}/alunos/${id}`)
      setDataSelected(response.data)
      setModalData({
        id: response.data.id,
        nome: response.data.nome,
        email: response.data.email,
        cur_id: response.data.cur_id
      })
    } catch (error) {
      setError(error)
    }
  }

  const deleteStudent = async id => {
    try {
      await axios.delete(`${apiURL}/alunos/${id}`)
      getData()
    } catch (error) {
      error(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <WrapperContainer>
      <WrapperContainerLeft>
        {error && <p>Error {error.message}</p>}
        {data.map(student => (
          <ItemList key={student.id}>
            <WrapperDescription>
              <h1>{student.nome}</h1>
              <div className="description">
                <p>
                  <b>Email:</b> {student.email}
                </p>
                <p>
                  <b>Curso:</b> {CourseStudentTake(student.cur_id)}
                </p>
              </div>
            </WrapperDescription>
            <WrapperBtn>
              <BtnEdit onClick={() => updateStudent(student.id)}>
                Editar
              </BtnEdit>
              <BtnDelete
                onClick={() => setDeleteModel({ id: student.id, show: true })}
              >
                Excluir
              </BtnDelete>
            </WrapperBtn>
          </ItemList>
        ))}
      </WrapperContainerLeft>

      {deleteModel.show && (
        <Modal
          deleteModel={deleteModel}
          setDeleteModel={setDeleteModel}
          deleteData={deleteStudent}
        />
      )}

      <WrapperContainerRight>
        <WrapperForm onSubmit={() => addStudent()}>
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            name="nome"
            id="nome"
            required
            value={modalData.nome}
            onChange={e => setModalData({ ...modalData, nome: e.target.value })}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            value={modalData.email}
            onChange={e =>
              setModalData({ ...modalData, email: e.target.value })
            }
          />
          <label htmlFor="curso">Curso</label>
          <select
            name="curso"
            id="curso"
            required
            value={modalData.cur_id}
            onChange={e =>
              setModalData({ ...modalData, cur_id: e.target.value })
            }
          >
            <option value="">Selecione um curso</option>
            {dataCourse.map(course => (
              <option key={course.id} value={course.id}>
                {course.curso}
              </option>
            ))}
          </select>

          <button type="submit">
            {dataSelected ? 'Atualizar' : 'Cadastrar'}
          </button>
        </WrapperForm>
      </WrapperContainerRight>
    </WrapperContainer>
  )
}

export default Student
