import api from '../../services/api';
import './style.css';

export default function Delete({
    setModalDelete,
    clienteId,
    loadClient
}) {

    async function handleDelete() {
        try {
            await api.delete(`/cliente/${clienteId}`, {

            });

            await loadClient();
            setModalDelete(undefined);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='delete-container'>
            <h3>Apagar item?</h3>
            <div className='delete-content'>
                <button onClick={handleDelete} className='btn-yes'>Sim</button>
                <button onClick={() => setModalDelete(undefined)} className='btn-no'>Não</button>
            </div>
        </div>
    );
}

