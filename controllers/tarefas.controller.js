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

        //Conferir se ID é válido
        if(!mongoose.Types.ObjectId.isValid(id)) {
            res.status(403).send('Id inválido');
            return
        }
        const tarefa = await tarefasService.findById(id);

        if(!tarefa) {
            res.status(404).send('Tarefa não encontrada');
            return
        }

        res.status(200).send(tarefa);
    }

    createTarefa = async (req, res) => {
        const tarefa = req.body;
        const tarefaSalva = await tarefasService.createTarefa(tarefa);
        res.send(`Tarefa ${tarefaSalva.titulo} criada com sucesso!`);
    }

    editTarefa = async (req, res) => {
        const id = req.params.id;
        const tarefa = req.body;
        await tarefasService.editTarefa(id, tarefa)
        .then(() => {
            res.status(200).send({message: 'Tarefa atualizada com sucesso'});
        })
        .catch((err) => res.status(500).send({error: `Erro no servidor: ${err}`}));
    }
}


module.exports = TarefasController;
