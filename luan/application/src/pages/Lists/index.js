import './style.css';
import api from '../../services/api';
import { useState } from 'react';
import AddClient from '../../components/AddClient';
import SelectClient from '../../components/SelectClient';
import Modal from '../../components/Modal';
import icone_register from '../../images/icone_cadastrar.png';
import icone_find from '../../images/icone_buscar.png';
import iconeRegisterProduct from '../../images/icone_cadastrar_produto.png';

function Lists() {

    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState(null);


    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const response = await api.get("/cliente", {
                //   headers: {
                //   },
            });
            console.log(response.data[0])
        } catch (error) {
            console.log(error);
        }


    }

    function handleModalAddClient() {
        setModalType('add-client');
        setShowModal(true);
    }

    function handleModalSelectClient() {
        setModalType('select-client');
        setShowModal(true);
    }



    return (
        <div className="container-list">

            <div className='container-client'>
                <h3>Cadastrar Cliente</h3>
                <form onSubmit={handleSubmit}>
                    <button onClick={handleModalAddClient}>
                        <img className='icon' src={icone_register} alt='icone' />
                    </button>
                </form>
                {showModal && modalType === 'add-client' && (
                    <Modal>
                        <AddClient
                            setModalType={setModalType}
                            setShowModal={setShowModal}
                        />
                    </Modal>
                )}
            </div>

            <div className='container-client'>
                <h3>Buscar Cliente</h3>
                <form onSubmit={handleSubmit}>
                    <button onClick={handleModalSelectClient}>
                        <img className='icon' src={icone_find} alt='icone' />
                    </button>
                </form>
                {showModal && modalType === 'select-client' && (
                    <Modal>
                        <SelectClient
                            setModalType={setModalType}
                            setShowModal={setShowModal}
                        />
                    </Modal>
                )}               
            </div>


            <div className='container-client'>
                <h3>Cadastrar Produto</h3>
                <form onSubmit={handleSubmit}>
                    <button onClick={handleModalAddClient}>
                        <img className='icon' src={iconeRegisterProduct} alt='icone' />
                    </button>
                </form>               
            </div>

            <div className='container-client'>
                <h3>Buscar Produto</h3>
                <form onSubmit={handleSubmit}>
                    <button onClick={handleModalAddClient}>
                        <img className='icon' src={icone_find} alt='icone' />
                    </button>
                </form>               
            </div>

        </div>
    )
}


export default Lists;