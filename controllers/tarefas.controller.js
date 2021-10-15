const mongoose = require('mongoose');
const TarefasServices = require('./../services/tarefas.service');

const tarefasService = new TarefasServices;

class TarefasController {
    getTarefas = async (req, res) => {
        const tarefas = await tarefasService.findAll();
        res.send(tarefas);
    }
    getTarefasById = async (req, res) => {
        const id = req.params.id;
        const tarefa = await tarefasService.findById(id);
        res.send(tarefa);
    }
}


module.exports = TarefasController;
