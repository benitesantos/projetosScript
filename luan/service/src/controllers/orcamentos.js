const pool = require('../database');

const registerBudget = async (req, res) => {
    const { id_cliente, data_emissao } = req.body;

    try {

        const querynewBudget = 'INSERT INTO orcamentos (id_cliente) values ($1) returning *';

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
        select orcamentos.id,
        orcamentos.data_emissao,
        c.nome,
        c.telefone,
        sum(itens_orcamento.quantidade * produtos.preco) as total_do_orcamento
        from itens_orcamento
        join orcamentos on (orcamentos.id = itens_orcamento.id_orcamento)
        join produtos on (produtos.id = itens_orcamento.id_produto)
        left join
            (select orcamentos.id, clientes.nome
             ,clientes.telefone from orcamentos
            join clientes on (orcamentos.id_cliente = clientes.id)) c
         on (c.id = itens_orcamento.id_orcamento)
         where orcamentos.id = $1
        group by orcamentos.id, c.nome, c.telefone
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

        const queryDeleteBudjet = 'DELETE FROM orcamentos WHERE id = $1';

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