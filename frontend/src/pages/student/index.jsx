import { useState, useEffect } from 'react'
import styled from 'styled-components'

import axios from 'axios'

const WrapperContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Student = () => {
  const apiURL = 'http://localhost:3000'
  const [data, setData] = useState([])
  const [dataCourse, setDataCourse] = useState([])
  const [error, setError] = useState(null)

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

  useEffect(() => {
    getData()
  }, [])

  return (
    <WrapperContainer>
      {error && <p>Error...</p>}
      {data.map(student => (
        <div key={student.id}>
          <h1>{student.nome}</h1>
          <p>{student.email}</p>
          <p>{CourseStudentTake(student.cur_id)}</p>
        </div>
      ))}
    </WrapperContainer>
  )
}

export default Student
