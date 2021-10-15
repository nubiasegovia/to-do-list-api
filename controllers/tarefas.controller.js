const mongoose = require('mongoose');
const TarefasServices = require('./../services/tarefas.service');

const tarefasService = new TarefasServices;

class TarefasController {
    getTarefas = async (req, res) => {
        const tarefas = await tarefasService.findAll();
        res.send(tarefas);
    }
}


module.exports = TarefasController;
