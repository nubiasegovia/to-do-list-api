const Tarefa = require('./../models/tarefa');

// Retorna todas as tarefas
class TarefaService {
    findAll = async () => await Tarefa.find();
    findById = async (id) => {
        return await Tarefa.findById(id);
    }
    createTarefa = async (tarefa) => {
        return await Tarefa.create(tarefa);
    }

}

module.exports = TarefaService;

