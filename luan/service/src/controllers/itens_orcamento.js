const pool = require('../database');

const registerBudgetItens = async (req, res) => {
    const { id_produto,id_orcamento, quantidade,total } = req.body;

    try {

        
        const querynewBudgetItens = 'INSERT INTO itens_orcamento (id_produto,id_orcamento, quantidade ,total) values ($1, $2, $3, $4 ) returning *';

        const newBudgetItens = await pool.query(querynewBudgetItens, [id_produto,id_orcamento, quantidade, total ]);

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
        itens_orcamento.total
        FROM produto
        JOIN itens_orcamento on (itens_orcamento.id_produto = produto.id)
        WHERE itens_orcamento.id_orcamento = $1`

        const { rows } = await pool.query(queryReadBudjetItens, [id]);

        return res.json(rows);

    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' })
    }
}

module.exports = {
    registerBudgetItens,
    readBudjetItens
}