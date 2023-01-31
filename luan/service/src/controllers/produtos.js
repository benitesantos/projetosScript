const pool = require('../database');

const registerProduct = async (req, res) => {
    const { descricao, marca, estoque ,preco } = req.body;


    try {
        const queryVerifyDescription = 'SELECT * FROM produtos WHERE descricao = $1';

        const verifyDescription = await pool.query(queryVerifyDescription, [descricao]);

        if (verifyDescription.rowCount > 0) {
            return res.status(400).json({ mensagem: 'Ja existe um produto com esta descrição.' });
        }

        const queryNewProduct = 'INSERT INTO produtos ( descricao, marca,estoque, preco) values ($1, $2, $3, $4 ) returning *';

        const newProduct = await pool.query(queryNewProduct, [descricao, marca,estoque,preco]);

        return res.status(201).json(newProduct.rows);

    } catch (error) {
        console.log('deu erro ', error.mensagem)
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' })
    }

}

const readProduct = async (req, res) => {
    try {

        const { rows } = await pool.query('SELECT * FROM produtos order by id');
        return res.json(rows);

    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
}

const readProductById = async (req, res) => {
    const { id } = req.params;

    try {

        const { rows } = await pool.query('SELECT * FROM produtos WHERE id = $1', [id]);


        return res.json(rows);

    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
}

const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { descricao, marca, estoque, preco } = req.body;


    try {

        const queryUpdateProduct = 'UPDATE produtos set descricao = $1, marca = $2, estoque = $3 ,preco = $4 WHERE id = $5';


        await pool.query(queryUpdateProduct, [descricao, marca, estoque,preco, id]);

        return res.status(204).send();

    } catch (error) {
        console.log(error.mensagem)
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' });
    }

};

const deleteProduct = async (req, res) => {
    const { id } = req.params;

    try {

        const queryDeleteProduct = 'DELETE FROM produtos WHERE id = $1';

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