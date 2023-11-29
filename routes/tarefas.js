const express = require('express')
const router = express.Router()
const controller = require('../controllers/buscarProfessor')
const controller2 = require('../controllers/cadastrarProfessor')
const controller3 = require('../controllers/deletarProfessor')
const controller4 = require('../controllers/atualizarTarefas')
const controller5 = require('../controllers/mudarStatus')

router.get('/professor/:id', controller.exibirNomeParcial)
router.get('/professor/:id', controller.exibirProfessorPeloId)
router.get('/professores/', controller.exibirProfessores)
router.post('/adicionar-professor', controller2.cadastroProfessor)
router.delete('/deletar/:id', controller3.deletarProfessor)
router.put('/atualizar/:id', controller4.atualizarProfessor)
router.put('/status/:id', controller5.statusTarefa)


module.exports = router