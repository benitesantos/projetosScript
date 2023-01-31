import api from '../../services/api';
import { useState, useEffect } from 'react';
import iconClose from '../../images/icone_fechar.png';



export default function EditProduct({
    productId,
    setModalType,
    setShowModal,
    formEditProduct,
    setFormEditProduct,
    loadProducts
}) {

    const [fields, setFields] = useState({
        descricao: formEditProduct.descricao,
        marca: formEditProduct.marca,
        estoque: formEditProduct.estoque,
        preco: formEditProduct.preco
    });

    useEffect(() => {
        console.log('PRODUTO ID :', productId)
        console.log('FORM EDIT CLIENT :', formEditProduct)

    }, [productId])



    function handleCloseModalEditProduct() {
        setModalType(null);
        setShowModal(false);
    }



    async function handleSubmit(e) {
        e.preventDefault();
        try {

            const response = await api.put(`/produto/${productId}`, {
                descricao: formEditProduct.descricao,
                marca: formEditProduct.marca,
                estoque: formEditProduct.estoque,
                preco: formEditProduct.preco
            });


            console.log(response.data)

            await loadProducts();


        } catch (error) {
            console.log(error.response.data)
        }

    }

    function handleChangeInputValue(e) {
        setFormEditProduct({ ...formEditProduct, [e.target.name]: e.target.value });
        setFields({ ...fields, [e.target.name]: e.target.value })
    }



    return (
        <div className='window'>
            <form className='form-cadastro' onSubmit={handleSubmit}>
                <div className='header'>
                    <h2>Editar Produto</h2>
                    <img className='icon-close' src={iconClose} alt='icon-close' onClick={handleCloseModalEditProduct} />
                </div>
                <div className='form-container'>
                    <label>
                        <span className='span-cadastro'>Descrição</span>
                        <input className='input-campo' name='descricao' type='text' onChange={handleChangeInputValue} value={fields.descricao} />
                    </label>
                    <label>
                        <span className='span-cadastro'>Marca</span>
                        <input className='input-campo' name='marca' type='text' onChange={handleChangeInputValue} value={fields.marca} />
                    </label>
                    <label>
                        <span className='span-cadastro'>Estoque</span>
                        <input className='input-campo' name='estoque' type='text' onChange={handleChangeInputValue} value={fields.estoque} />
                    </label>
                    <label>
                        <span className='span-cadastro'>Preço</span>
                        <input className='input-campo' name='preco' type='text' onChange={handleChangeInputValue} value={fields.preco} />
                    </label>
                    <button className='register-button' type='submit'>Editar</button>
                </div>

                {/* <div><input className='clean-button' type="reset" value="Limpar"/></div> */}
            </form>
        </div>
    );
};

