const pool = require('../database');

const registerBudget = async (req, res) => {
    const { id_cliente, data_emissao, total } = req.body;

    try {

        const querynewBudget = 'INSERT INTO orcamento (id_cliente,total) values ($1, $2 ) returning *';

        const newBudget = await pool.query(querynewBudget, [id_cliente, total]);

        return res.status(201).json(newBudget.rows);


    } catch (error) {
        console.log(error.mensagem)
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' });
    }
};

const readBudjet = async (req, res) => {

    const { id } =  req.params;

    try {

        const queryReadBudjet = 'SELECT cliente.nome, cliente.telefone, orcamento.id as numero_orcamento, orcamento.total FROM cliente JOIN orcamento on (orcamento.id_cliente = cliente.id) WHERE cliente.id = $1';

        const { rows } = await pool.query(queryReadBudjet, [id]);

        return res.json(rows);

    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' })
    }
}

const deleteBudjet = async (req, res) => {
    const { id } = req.params;

    try {

        const queryDeleteBudjet = 'DELETE FROM orcamento WHERE id = $1';

        await pool.query(queryDeleteBudjet, [id]);

        return res.send();

    } catch (error) {
        console.log(error.mensagem)
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' });
    }
}

module.exports = {
    registerBudget,
    readBudjet,
    deleteBudjet
}