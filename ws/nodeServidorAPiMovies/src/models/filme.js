const mongoose = require('mongoose');

const Filme = mongoose.model('Filmes', {
    titulo: String,
    descricao: String,
    roteiro: Array
    
});

module.exports = Filme;