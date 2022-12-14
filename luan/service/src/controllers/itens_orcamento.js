const pool = require('../database');

const registerBudgetItens = async (req, res) => {
    const { id_produto,id_orcamento, quantidade } = req.body;

    try {

        
        const querynewBudgetItens = 'INSERT INTO itens_orcamento (id_produto,id_orcamento, quantidade) values ($1, $2, $3) returning *';

        const newBudgetItens = await pool.query(querynewBudgetItens, [id_produto,id_orcamento, quantidade ]);

        return res.status(201).json(newBudgetItens.rows);


    } catch (error) {
        console.log(error.mensagem)
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' });
    }
};

const readBudjetItens = async (req, res) => {

    const { id } =  req.params;

    try {

        const queryReadBudjetItens = `SELECT
        produto.id as codigo,
        produto.descricao,
        itens_orcamento.quantidade,
        produto.preco,
        itens_orcamento.quantidade *
        produto.preco as total
        FROM produto
        JOIN itens_orcamento on (itens_orcamento.id_produto = produto.id)
        WHERE itens_orcamento.id_orcamento = $1`

        const { rows } = await pool.query(queryReadBudjetItens, [id]);

        return res.json(rows);

    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' })
    }
}

const deleteBudjetItens = async (req, res) => {
    const { id } = req.params;

    try {

        const queryDeleteBudjetItens = 'DELETE FROM itens_orcamento WHERE id = $1';

        await pool.query(queryDeleteBudjetItens, [id]);

        return res.send();

    } catch (error) {
        console.log(error.mensagem)
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' });
    }
}


module.exports = {
    registerBudgetItens,
    readBudjetItens,
    deleteBudjetItens
}