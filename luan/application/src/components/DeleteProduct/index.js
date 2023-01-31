import api from '../../services/api';
import './style.css';

export default function DeleteProduct({
    setModalDelete,
    productId,
    loadProduct
}) {

    async function handleDelete() {
        try {
            await api.delete(`/produto/${productId}`, {

            });

            await loadProduct();
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

