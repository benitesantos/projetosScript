const express = require('express');
const {registerClient, updateClient, deleteClient, readClient} = require('./controllers/clientes.js')

const routes = express();

routes.post('/cliente', registerClient);
routes.get('/cliente', readClient);
routes.put('/cliente/:id',updateClient);
routes.delete('/cliente/:id',deleteClient);

module.exports = routes;

