const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const TarefasRoutes = require('./routes/tarefas.routes');
const Conn = require('./conn/conn');

const app = express();
app.use(express.json());
app.use(cors());
Conn();

app.use('/tarefas', TarefasRoutes); //indica para o express utilizar as rotas no endpoin /tarefas



const port = 3001;

app.listen(port, () => console.log(`App rodando em http://localhost:${port}/`));

