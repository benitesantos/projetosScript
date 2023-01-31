const express = require('express');
const {registerClient, updateClient, deleteClient, readClient, readClientById} = require('./controllers/clientes.js');
const { registerProduct, readProduct, updateProduct, deleteProduct, readProductById } = require('./controllers/produtos.js');
const { registerBudget, readBudjet, deleteBudjet } = require('./controllers/orcamentos.js');
const { registerBudgetItens, readBudjetItens, deleteBudjetItens, updateBudjetItens } = require('./controllers/itens_orcamento.js');

const routes = express();

routes.post('/cliente', registerClient);
routes.get('/cliente', readClient);
routes.get('/cliente/:id',readClientById);
routes.put('/cliente/:id',updateClient);
routes.delete('/cliente/:id',deleteClient);

routes.post('/produto', registerProduct);
routes.get('/produto', readProduct);
routes.get('/produto/:id',readProductById);
routes.put('/produto/:id', updateProduct);
routes.delete('/produto/:id',deleteProduct);


routes.post('/orcamento', registerBudget);
routes.get('/orcamento/:id',readBudjet);
routes.delete('/orcamento/:id',deleteBudjet);



routes.post('/itens_orcamento',registerBudgetItens);
routes.get('/itens_orcamento/:id',readBudjetItens);
routes.put('/itens_orcamento/:id', updateBudjetItens);
routes.delete('/itens_orcamento/:id', deleteBudjetItens);

module.exports = routes;

