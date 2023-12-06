import { createBrowserRouter } from 'react-router-dom'

import Base from './layouts/Base'
import Course from './pages/course'
import Student from './pages/student'
import Login from './pages/Login'
import Registrar from './pages/Registrar'
import ProtectedRoute from './services/ProtectedRoute'

const routes = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <Base />
      </ProtectedRoute>
    ),
    children: [
      {
        path: '/',
        element: <Course />
      },
      {
        path: '/student',
        element: <Student />
      }
    ]
  },
  {
    path: '/',
    element: <Base />,
    children: [
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/registrar',
        element: <Registrar />
      }
    ]
  }
])

export default routes
