const mongoose = require('mongoose');


const TarefaModel = new mongoose.Schema({
    titulo: { type: String, required: true },
    descricao: { type: String, required: true },
    prioridade: { type: String, required: true },
    status: { type: String, required: true },
    prazo: { type: Date},
    dataCriacao: { type: Date, default: Date.now }
})

const Tarefa = mongoose.model("tarefas", TarefaModel);

module.exports = Tarefa;