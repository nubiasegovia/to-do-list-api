

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const TarefasRoutes = require('./routes/tarefas.routes');
require('dotenv').config();
const Conn = require('./conn/conn');

const app = express();
app.use(express.json());
app.use(cors());

const db_url = process.env.DB_URL;
const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS;
const db_data = process.env.DB_DATA;

Conn(db_url, db_user, db_pass, db_data);

app.use('/tarefas', TarefasRoutes); //indica para o express utilizar as rotas no endpoin /tarefas



const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`App rodando em http://localhost:${port}/`));

