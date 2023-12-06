const { Router } = require('express')
const cursosController = require('../controllers/cursoController')
const autenticado = require('../middlewares/verificarAutenticacao')

const router = Router()

router.use(autenticado)

router
  .get('/cursos', cursosController.getCursos)
  .get('/cursos/:id', cursosController.getCursoPorId)
  .post('/cursos', cursosController.postCurso)
  .put('/cursos/:id', cursosController.putCurso)
  .delete('/cursos/:id', cursosController.deleteCurso)
  .get('/alunoscurso/:id', cursosController.getAlunosPorCurso)

module.exports = router
