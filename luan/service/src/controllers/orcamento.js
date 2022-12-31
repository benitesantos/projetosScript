const pool = require('../database');

const registerBudget = async (req, res) => {
    const { id_cliente, data_emissao } = req.body;

    try {

        const querynewBudget = 'INSERT INTO orcamento (id_cliente) values ($1) returning *';

        const newBudget = await pool.query(querynewBudget, [id_cliente]);

        return res.status(201).json(newBudget.rows);


    } catch (error) {
        console.log(error.mensagem)
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' });
    }
};

const readBudjet = async (req, res) => {

    const { id } =  req.params;

    try {

        const queryReadBudjet = `
        select orcamento.id,
        c.nome,
        c.telefone,
        sum(itens_orcamento.quantidade * produto.preco) as total_do_orcamento
        from itens_orcamento
        join orcamento on (orcamento.id = itens_orcamento.id_orcamento)
        join produto on (produto.id = itens_orcamento.id_produto)
        left join
            (select orcamento.id, cliente.nome
             ,cliente.telefone from orcamento
            join cliente on (orcamento.id_cliente = cliente.id)) c
         on (c.id = itens_orcamento.id_orcamento)
         where orcamento.id = $1
        group by orcamento.id, c.nome, c.telefone
        `;

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