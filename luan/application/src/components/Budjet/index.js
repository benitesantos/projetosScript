import './style.css';
import api from '../../services/api';
import { useState, useEffect } from 'react';
import iconClose from '../../images/icone_fechar.png';
import Main from '../../pages/Main';



export default function RegisterBudjet({
    setModalType,
    setShowModal,
}) {

    // const [showModalEdit, setShowModalEdit] = useState(false);


    const [formEditClient, setFormEditClient] = useState({
        nome: '',
        telefone: '',
        observacao: '',
    });

    const [showModalMain, setShowModalMain] = useState(false);
    const [modalTypeMain, setModalTypeMain] = useState(null);




    function handleModalMain() {

        setModalTypeMain('edit-client');
        setShowModalMain(true);
    }



    const [formAddBudjet, setFormAddBudjet] = useState({
        id_cliente: ''

    });

    const [listClient, setListClient] = useState([]);


    const [client, setClient] = useState([]);


    async function loadClients() {
        try {
            const response = await api.get('/cliente', {

            });
            console.log(response.data[0])

            const clients = [...response.data];
            setClient(clients)
        } catch (error) {

        }
    }

    useEffect(() => {
        loadClients()
    }, [])

    async function findClients(input) {



        if (input === '') {
            setListClient([])
        }

        if (input !== '') {

            const newClient = client.filter((item) => item.nome.toLowerCase().includes(input.toLowerCase()) || item.id === Number(input));

            setListClient(newClient);

            console.log(newClient);


        }
    }


    function handleCloseModalAddBudjet() {
        setModalType(null);
        setShowModal(false);
    }



    async function handleSubmit(e) {
        e.preventDefault();
        console.log(formAddBudjet)
        try {

            const response = await api.post('/orcamento', {
                id_cliente: formAddBudjet.id_cliente,

            });


            console.log(response.data);

        } catch (error) {
            console.log(error.message)
        }

    }


    function handleChangeInputValue(e) {
        findClients(e.target.value)
        console.log(e.target.value)
        setFormAddBudjet({ ...formAddBudjet, id_cliente: e.target.value });

    }

    function handleChangeRadioButton(e) {
        setFormAddBudjet({ ...formAddBudjet, id_cliente: e.target.value });

    }

    return (
        <div>
            <form className='form-cadastro' onSubmit={handleSubmit}>
                <div className='header'>
                    <h2>Adicionar </h2>
                    <img className='icon-close' src={iconClose} alt='icon-close' onClick={handleCloseModalAddBudjet} />
                </div>
                <div className='form-container'>
                    <label>
                        <span className='span-cadastro'>Cliente</span>
                        <input onChange={handleChangeInputValue}></input>
                        {listClient.map((client, index) => (
                            <div>
                                <input type="radio" id={client.id} name="clients" value={client.id} onChange={handleChangeRadioButton} />
                                <label for={client.id}>{client.nome}</label>
                                {showModalMain && modalTypeMain === 'edit-client'(
                                    <Main
                                        setModalTypeMain={setModalTypeMain}
                                        setShowModalMain={setShowModalMain}
                                    />
                                )}

                            </div>
                        ))}
                    </label>
                    <button className='register-button' type='submit'>Cadastrar</button>
                </div>
            </form>
        </div>
    )
}
