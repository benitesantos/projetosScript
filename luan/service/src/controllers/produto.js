const pool = require('../database');

const registerProduct = async (req, res) => {
    const { descricao, marca, preco } = req.body;


    try {
        const queryVerifyDescription = 'SELECT * FROM produto WHERE descricao = $1';

        const verifyDescription = await pool.query(queryVerifyDescription, [descricao]);

        if (verifyDescription.rowCount > 0) {
            return res.status(400).json({ mensagem: 'Ja existe um produto com esta descrição.' });
        }

        const queryNewProduct = 'INSERT INTO produto ( descricao, marca, preco) values ($1, $2, $3 ) returning *';

        const newProduct = await pool.query(queryNewProduct, [descricao, marca, preco]);

        return res.status(201).json(newProduct.rows);

    } catch (error) {
        console.log('deu erro ', error.mensagem)
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' })
    }

}

const readProduct = async (req, res) => {
    try {

        const { rows } = await pool.query('SELECT * FROM produto');
        return res.json(rows);

    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
}

const readProductById = async (req, res) => {
    const { id } = req.params;

    try {

        const { rows } = await pool.query('SELECT * FROM produto WHERE id = $1', [id]);


        return res.json(rows);

    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
}

const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { descricao, marca, preco } = req.body;


    try {

        const queryUpdateProduct = 'UPDATE produto set descricao = $1, marca = $2, preco = $3 WHERE id = $4';

        await pool.query(queryUpdateProduct, [descricao, marca, preco, id]);

        return res.status(204).send();

    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' });
    }

};

const deleteProduct = async (req, res) => {
    const { id } = req.params;

    try {

        const queryDeleteProduct = 'DELETE FROM produto WHERE id = $1';

        await pool.query(queryDeleteProduct, [id]);

        return res.send();

    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' });
    }
};


module.exports = {
    registerProduct,
    readProductById,
    readProduct,
    updateProduct,
    deleteProduct
}