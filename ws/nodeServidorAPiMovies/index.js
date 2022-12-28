const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const routes = require('./src/routes/routes');

mongoose.connect('mongodb://localhost:27017/filmesBenites', {
    useNewUrlParser: true,
    useUNifiedTopology: true
});

app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/', routes);


app.listen(8080, () => {
    console.log('Servidor sendo inicializado...');
});