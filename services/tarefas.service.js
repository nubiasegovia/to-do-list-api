const Tarefa = require('./../models/tarefa');

// Retorna todas as tarefas
class TarefaService {
    findAll = async () => await Tarefa.find();
    findById = async (id) => Tarefa.findById(id); 
    
}


module.exports = TarefaService;

