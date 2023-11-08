const bodyParser = require('body-parser')
const cursos = require('./cursosRoute')

module.exports = app => {
  app.use(bodyParser.json())
  app.use(cursos)

  app.get('/', (req, res) => {
    res.status(200).send({ message: 'Bem-vindo!' })
  })
}
