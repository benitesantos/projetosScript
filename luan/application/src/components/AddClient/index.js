import './style.css';
import api from '../../services/api';
import { useState } from 'react';


export default function AddClient({
    setModalType,
    setShowModal,
}) {



    const [formAddClient, setFormAddClient] = useState({
        nome: '',
        telefone: '',
        observacao: '',
    });

    

    function handleCloseModalAddClient() {
        setModalType(null);
        setShowModal(false);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            
            const response = await api.post('/cliente', {
                nome: formAddClient.nome,
                telefone: formAddClient.telefone,
                observacao: formAddClient.observacao
            });
            

            console.log(response.data)

        } catch (error) {
            console.log(error.response.data)
        }

    }
    
    function handleChangeInputValue(e){
        setFormAddClient({...formAddClient, [e.target.name]: e.target.value});
    }



    return (
        <div className='window'>
            <form className='form-cadastro' onSubmit={handleSubmit}>
                <h1>Adicionar Cliente</h1>
                <div className='form-container'>
                    <label>
                        <span className='span-cadastro'>Nome</span>
                        <input className='input-campo' name='nome' type='text' onChange={handleChangeInputValue} />
                    </label>
                    <label>
                        <span className='span-cadastro'>Telefone</span>
                        <input className='input-campo' name='telefone' type='text' onChange={handleChangeInputValue} />
                    </label>
                    <label>
                        <span className='span-cadastro'>Observação</span>
                        <input className='input-campo' name='observacao' type='text' onChange={handleChangeInputValue}/>
                    </label>
                    <button className='register-button' type='submit'>Cadastrar</button>
                </div>
                    <button className='btn-close' onClick={handleCloseModalAddClient}>Fechar</button>
                    <div><input className='clean-button' type="reset" value="Limpar"/></div>
            </form>
        </div>
    );
};

