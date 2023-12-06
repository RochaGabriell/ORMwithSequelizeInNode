const { Router } = require('express')
const alunosController = require('../controllers/alunoController')
const autenticado = require('../middlewares/verificarAutenticacao')

const router = Router()

router.use(autenticado)

router
  .get('/alunos', alunosController.getAlunos)
  .get('/alunos/:id', alunosController.getAlunoPorId)
  .post('/alunos', alunosController.postAluno)
  .put('/alunos/:id', alunosController.putAluno)
  .delete('/alunos/:id', alunosController.deleteAluno)

module.exports = router
