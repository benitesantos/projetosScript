import api from '../../services/api';
import { useState, useEffect } from 'react';
import iconClose from '../../images/icone_fechar.png';



export default function EditClient({
    clienteId,
    setModalType,
    setShowModal,
    formEditClient,
    setFormEditClient,
    loadClients
}) {

    const [fields, setFields] = useState({
        nome: formEditClient.nome,
        telefone: formEditClient.telefone,
        observacao: formEditClient.observacao
    });

    useEffect(() => {
        console.log('CLIENTE ID :', clienteId)
        console.log('FORM EDIT CLIENT :', formEditClient)

    }, [clienteId])



    function handleCloseModalEditClient() {
        setModalType(null);
        setShowModal(false);
    }



    async function handleSubmit(e) {
        e.preventDefault();
        try {

            const response = await api.put(`/cliente/${clienteId}`, {
                nome: formEditClient.nome,
                telefone: formEditClient.telefone,
                observacao: formEditClient.observacao
            });


            console.log(response.data)

            await loadClients();

            setShowModal(false);



        } catch (error) {
            console.log(error.response.data)
        }

    }

    function handleChangeInputValue(e) {
        setFormEditClient({ ...formEditClient, [e.target.name]: e.target.value });
        setFields({ ...fields, [e.target.name]: e.target.value })
    }



    return (
        <div className='window'>
            <form className='form-cadastro' onSubmit={handleSubmit}>
                <div className='header'>
                    <h2>Editar Cliente</h2>
                    <img className='icon-close' src={iconClose} alt='icon-close' onClick={handleCloseModalEditClient} />
                </div>
                <div className='form-container'>
                    <label>
                        <span className='span-cadastro'>Nome</span>
                        <input className='input-campo' name='nome' type='text' onChange={handleChangeInputValue} value={fields.nome} />
                    </label>
                    <label>
                        <span className='span-cadastro'>Telefone</span>
                        <input className='input-campo' name='telefone' type='text' onChange={handleChangeInputValue} value={fields.telefone} />
                    </label>
                    <label>
                        <span className='span-cadastro'>Observação</span>
                        <input className='input-campo' name='observacao' type='text' onChange={handleChangeInputValue} value={fields.observacao} />
                    </label>
                    <button className='register-button' type='submit'>Editar</button>
                </div>

                {/* <div><input className='clean-button' type="reset" value="Limpar"/></div> */}
            </form>
        </div>
    );
};

