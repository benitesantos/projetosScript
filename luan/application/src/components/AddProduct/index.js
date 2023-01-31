import './style.css';
import api from '../../services/api';
import { useState } from 'react';
import iconClose from '../../images/icone_fechar.png';



export default function AddProduct({
    setModalType,
    setShowModal,
}) {



    const [formAddProduct, setFormAddProduct] = useState({
        descricao: '',
        marca: '',
        estoque: '',
        preco: ''
    });

    

    function handleCloseModalAddProduct() {
        setModalType(null);
        setShowModal(false);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            
            const response = await api.post('/produto', {
                descricao: formAddProduct.descricao,
                marca: formAddProduct.marca,
                estoque: formAddProduct.estoque,
                preco: formAddProduct.preco
            });

            setShowModal(false);

            

            console.log(response.data)

        } catch (error) {
            console.log(error.response.data)
        }

    }
    
    function handleChangeInputValue(e){
        setFormAddProduct({...formAddProduct, [e.target.name]: e.target.value});
    }



    return (
        <div className='window-product'>
            <form className='form-cadastro' onSubmit={handleSubmit}>
            <div className='header'>
                <h2>Adicionar Produto</h2>
                <img className='icon-close' src={iconClose} alt='icon-close' onClick={handleCloseModalAddProduct} />
            </div>
                <div className='form-container'>
                    <label>
                        <span className='span-cadastro'>Descrição</span>
                        <input className='input-campo' name='descricao' type='text' onChange={handleChangeInputValue} />
                    </label>
                    <label>
                        <span className='span-cadastro'>Marca</span>
                        <input className='input-campo' name='marca' type='text' onChange={handleChangeInputValue} />
                    </label>
                    <label>
                        <span className='span-cadastro'>Estoque</span>
                        <input className='input-campo' name='estoque' type='number' onChange={handleChangeInputValue}/>
                    </label>
                    <label>
                        <span className='span-cadastro'>Preço</span>
                        <input className='input-campo' name='preco' type='number' onChange={handleChangeInputValue}/>
                    </label>
                    <button className='register-button' type='submit'>Cadastrar</button>
                </div>
                    
                    {/* <div><input className='clean-button' type="reset" value="Limpar"/></div> */}
            </form>
        </div>
    );
};

