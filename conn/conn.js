const mongoose = require('mongoose');

const Conn = () => {
    mongoose.connect('mongodb+srv://dbUser:nmYmlbvzgKkmX0jE@todolist.bdv6c.mongodb.net/todolist?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB conectado!'))
    .catch((err) => console.log('Erro no mongo', err))
}


module.exports = Conn;