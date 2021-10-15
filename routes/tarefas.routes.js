const express = require('express');
//Inicializar rota
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Seja bem-vinde!');
})



module.exports = router;