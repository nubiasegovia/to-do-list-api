const Tarefa = require('./../models/tarefa');

// Retorna todas as tarefas
class TarefaService {
    findAll = async () => {
        return await Tarefa.find();
    }
}


module.exports = TarefaService;

