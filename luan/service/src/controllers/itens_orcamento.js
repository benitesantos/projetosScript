const pool = require('../database');

const registerBudgetItens = async (req, res) => {
    const { id_produto, id_orcamento, quantidade } = req.body;

    try {


        const querynewBudgetItens = 'INSERT INTO itens_orcamento (id_produto,id_orcamento, quantidade) values ($1, $2, $3) returning *';

        const newBudgetItens = await pool.query(querynewBudgetItens, [id_produto, id_orcamento, quantidade]);

        const querySelectAllProducts = `select * from produtos where id = $1`;


        const selectAllProducts = await pool.query(querySelectAllProducts, [id_produto]);

        const calculateStock = selectAllProducts.rows[0].estoque - quantidade

        const queryValueStock = 'UPDATE produtos set estoque = $1  WHERE id = $2'
        const valueStock = await pool.query(queryValueStock, [calculateStock, id_produto]);

        return res.status(201).json(newBudgetItens.rows);


    } catch (error) {
        console.log(error.mensagem)
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' });
    }
};

const readBudjetItens = async (req, res) => {

    const { id } = req.params;

    try {

        const queryReadBudjetItens = `SELECT
        produtos.id as codigo,
        produtos.descricao,
        itens_orcamento.quantidade,
        produtos.preco,
        itens_orcamento.quantidade *
        produtos.preco as total
        FROM produtos
        JOIN itens_orcamento on (itens_orcamento.id_produto = produtos.id)
        WHERE itens_orcamento.id_orcamento = $1`

        const { rows } = await pool.query(queryReadBudjetItens, [id]);

        return res.json(rows);

    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' })
    }
}

const updateBudjetItens = async (req, res) => {

    const { id } = req.params;
    let { id_produto, id_orcamento, quantidade, quantidade_nova } = req.body;

    try {

        const queryUpdateBudjetItens = 'UPDATE itens_orcamento set id_produto = $1, id_orcamento = $2, quantidade = $3  WHERE id = $4';


        await pool.query(queryUpdateBudjetItens, [id_produto, id_orcamento, quantidade, id]);

        const querySelectAllProducts = `select * from produtos where id = $1`;


        const selectAllProducts = await pool.query(querySelectAllProducts, [id_produto]);

        const queryCurrentQuantity = 'select quantidade from itens_orcamento where id = $1';

        let currentQuantity = await pool.query(queryCurrentQuantity, [id])


        const calculateStock = selectAllProducts.rows[0].estoque - quantidade_nova + currentQuantity.rows[0].quantidade


        let queryValueStock = 'UPDATE produtos set estoque = $1  WHERE id = $2'
        const valueStock = await pool.query(queryValueStock, [calculateStock, id_produto]);

        const queryUpdateItensQuant = 'UPDATE itens_orcamento set quantidade = $1 WHERE id = $2'

        let updateItensQuant = await pool.query(queryUpdateItensQuant,[quantidade_nova, id])

        return res.status(204).send();

    } catch (error) {
        console.log(error)
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' });
    }

};

const deleteBudjetItens = async (req, res) => {
    const { id } = req.params;

    const { id_produto, quantidade } = req.body;

    try {

        const querySelectAllProducts = `select * from produtos where id = $1`;

        const selectAllProducts = await pool.query(querySelectAllProducts, [id_produto]);

        const calculateStock = selectAllProducts.rows[0].estoque + quantidade

        const queryValueStock = 'UPDATE produtos set estoque = $1  WHERE id = $2'
        const valueStock = await pool.query(queryValueStock, [calculateStock, id_produto]);

        const queryDeleteBudjetItens = 'DELETE FROM itens_orcamento WHERE id = $1';

        await pool.query(queryDeleteBudjetItens, [id]);

        return res.send();

    } catch (error) {
        console.log(error)
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' });
    }
}


module.exports = {
    registerBudgetItens,
    readBudjetItens,
    updateBudjetItens,
    deleteBudjetItens
}

