const express = require('express');
const router = express.Router();
const Filme = require('../models/filme');

router.get('/', async(req, res) => {
    try {
        const filmes = await Filme.find({});
        return res.json({filmes})
    } catch (error) {
        return res.json({error: true, message: error.message});
    }
} );

router.get('/:id', async (req,res) => {

    try {
        const {id} = req.params;
        const filme = await Filme.findById(id);
        return res.json({filme});
    } catch (error) {
        return res.json({error: true, message: error.message});
    }
    
});

router.post('/',async (req, res) => {

    try {
        const body = req.body;
        const respose = await new Filme(body).save();
        return res.json(respose);
    } catch (error) {
        return res.json({error: true, message: error.message});

    }
   
});

router.put('/:id', async(req, res) => {

    try {
        const {id} = req.params;
        const novo_filme = req.body;

        const filme = await Filme.findByIdAndUpdate(id, novo_filme);
        return res.json({filme});
        
    } catch (error) {
        return res.json({error: true, message: error.message});
    }


});

router.delete('/:id', async(req, res) => {

    try {
        const {id} = req.params;
        const deleted = await Filme.findByIdAndDelete(id);
        return res.json({mensagem:'Arquivo deletado'});
    } catch (error) {
        return res.json({error: true, message: error.message});

    }

});


module.exports = router;