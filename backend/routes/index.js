const bodyParser = require('body-parser')
const cursos = require('./cursosRoute')
const alunos = require('./alunosRoute')
const usuarios = require('./usuariosRoute')
const auth = require('./authRoute')

module.exports = app => {
  app.use(bodyParser.json())
  app.use(auth)
  app.use(usuarios)
  app.use(cursos)
  app.use(alunos)

  app.get('/', (req, res) => {
    res.status(200).send({ message: 'Bem-vindo!' })
  })
}
