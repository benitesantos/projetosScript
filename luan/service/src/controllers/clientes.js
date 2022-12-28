const pool = require('../database');

const registerClient = async (req, res) => {
    const { nome, telefone, data_emissao, observacao } = req.body;

    try {
        const queryVerifyName = 'SELECT * FROM cliente WHERE nome = $1';

        const verifyName = await pool.query(queryVerifyName, [nome]);

        if (verifyName.rowCount > 0) {
            return res.status(400).json({ mensagem: 'Já existe um cliente cadastrado com esse nome.' })
        }

        const queryNewClient = 'INSERT INTO cliente (nome, telefone, observacao) values ($1, $2, $3) returning *';

        const newClient = await pool.query(queryNewClient, [nome, telefone, observacao]);

        return res.status(201).json(newClient.rows);


    } catch (error) {
        console.log(error.mensagem)
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' });
    }
};

const readClient = async (req, res) => {
    try {

        const { rows } = await pool.query('SELECT * FROM cliente');
        return res.json(rows);

    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
}

const updateClient = async (req, res) => {
    const { id } = req.params;
    const { nome, telefone, data_emissao, observacao } = req.body;

    try {

        const queryUpdateClient = 'UPDATE cliente set nome = $1, telefone = $2, observacao = $3 WHERE id = $4';

        await pool.query(queryUpdateClient, [nome, telefone, observacao, id]);

        return res.status(204).send();

    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' });
    }

};

const deleteClient = async (req, res) => {
    const { id } = req.params;

    try {

        const queryDeleteClient = 'DELETE FROM cliente WHERE id = $1';

        await pool.query(queryDeleteClient, [id]);

        return res.send();

    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' });
    }
};

module.exports = {
    registerClient,
    readClient,
    updateClient,
    deleteClient
}