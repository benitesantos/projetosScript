import './style.css';
import api from '../../services/api';
import { useState, useEffect } from 'react';
import iconClose from '../../images/icone_fechar.png'

export default function SelectClient({
    setModalType,
    setShowModal,
}) {

    const [listClientOriginal, setListClientOriginal] = useState([]);
    const [listClient, setListClient] = useState([]);

    async function loadClients() {

        try {
            const response = await api.get('/cliente', {

            });
            console.log(response.data[0])

            const clients = [...response.data];

            const newObject = clients.map((item) => {
                return { ...item }
            })

            setListClient(newObject);
            setListClientOriginal(newObject);

        } catch (error) {
            console.log(error);
        }

    }

    async function findClients(input) {

        console.log(input)

        if (input === '') {
            setListClient(listClientOriginal)
        }

        if (input !== '') {

            const newClient = listClientOriginal.filter((item) => item.nome.toLowerCase().includes(input.toLowerCase()) || item.id === Number(input));


            setListClient(newClient);
        }

    }

    function handleCloseModalSelectClient() {
        setModalType(null);
        setShowModal(false);
    }

    useEffect(() => {
        loadClients();
    }, []);

    const renderHeader = () => {
        return <div className="header-table-client">
            <span className='span-id'>Id</span>
            <span className='span-nome'>Nome</span>
            <span className='span-telefone'>Telefone</span>
            <span className='span-observacao'>Observação</span>
        </div>
    }

    return (
        <div className='container-select-client'>
            <div className='header'>
                <h2>Listar Clientes</h2>
                <img className='icon-close' src={iconClose} alt='icon-close' onClick={handleCloseModalSelectClient} />
            </div>
            <input className='input-find' placeholder='Buscar Cliente' onChange={(e) => findClients(e.target.value)} />
            {renderHeader()}

            <ul className='content-clients'>
                {listClient.map((client, index) => (
                    <li key={client.id} className='content-client'>
                        <span className='client-id'>{client.id}</span>
                        <span className='client-nome'>{client.nome}</span>
                        <span className='client-telefone'>{client.telefone}</span>
                        <span className='client-observacao'>{client.observacao}</span>
                    </li>
                ))}
            </ul>

        </div>
    )
}