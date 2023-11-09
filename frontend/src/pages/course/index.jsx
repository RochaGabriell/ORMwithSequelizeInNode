import { useState, useEffect } from 'react'
import styled from 'styled-components'

import axios from 'axios'

const WrapperContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Course = () => {
  const apiURL = 'http://localhost:3000'
  const [data, setData] = useState([])
  const [error, setError] = useState(null)

  const getData = async () => {
    try {
      const response = await axios.get(`${apiURL}/cursos`)
      setData(response.data)
      setError(null)
    } catch (error) {
      setError(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <WrapperContainer>
      {error && <p>Error...</p>}
      {data.map(course => (
        <div key={course.id}>
          <h1>{course.curso}</h1>
        </div>
      ))}
    </WrapperContainer>
  )
}

export default Course
