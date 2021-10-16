const express = require('express');
const TarefasController = require('./../controllers/tarefas.controller');


//Inicializar rota
const router = express.Router();
const tarefasController = new TarefasController();

//[GET] lista das tarefas
router.get('/', tarefasController.getTarefas);

//[GET] por id
router.get('/:id', tarefasController.getTarefasById);

//[POST] criação de tarefa
router.post('/add', tarefasController.createTarefa);

//[PUT] atualização da tarefa
router.put('/:id', tarefasController.editTarefa);



module.exports = router;