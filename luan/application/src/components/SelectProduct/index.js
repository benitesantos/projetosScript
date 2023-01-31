import './style.css';
import api from '../../services/api';
import { useState, useEffect } from 'react';
import Modal from '../Modal';
import EditProduct from '../EditProduct';
import DeleteProduct from '../DeleteProduct';
import iconClose from '../../images/icone_fechar.png';
import icone_edit from '../../images/icone_editar.png';
import icone_trash from '../../images/icone_deletar.png';




export default function SelectProduct({
    setModalType,
    setShowModal,
}) {

    const [showModalEdit, setShowModalEdit] = useState(false);
    const [modalTypeEdit, setModalTypeEdit] = useState(null);
    const [productId, setProductId] = useState(null);

    const [modalDelete, setModalDelete] = useState(undefined);



    const [listProductOriginal, setListProductOriginal] = useState([]);
    const [listProduct, setListProduct] = useState([]);

    const [formEditProduct, setFormEditProduct] = useState({
        descricao: '',
        marca: '',
        estoque: '',
        preco: ''
    });

    async function loadProducts() {

        try {
            const response = await api.get('/produto', {

            });
            console.log(response.data[0])

            const clients = [...response.data];

            const newObject = clients.map((item) => {
                return { ...item }
            })

            setListProduct(newObject);
            setListProductOriginal(newObject);

        } catch (error) {
            console.log(error);
        }

    }

    async function findProducts(input) {

        console.log(input)

        if (input === '') {
            setListProduct(listProductOriginal)
        }

        if (input !== '') {

            const newProduct = listProductOriginal.filter((item) => item.descricao.toLowerCase().includes(input.toLowerCase()) || item.id === Number(input));


            setListProduct(newProduct);
        }

    }

    function handleCloseModalSelectProduct() {
        setModalType(null);
        setShowModal(false);
    }

    function handleModalEditProduct(produto) {

        setFormEditProduct(produto);

        setProductId(produto.id);

        setModalTypeEdit('edit-product');
        setShowModalEdit(true);
    }


    useEffect(() => {
        loadProducts();
    }, []);

    const renderHeader = () => {
        return <div className="header-table-product">
            <span className='span-id'>Id</span>
            <span className='span-descricao'>Descrição</span>
            <span className='span-marca'>Marca</span>
            <span className='span-estoque'>Estoque</span>
            <span className='span-preco'>Preço</span>
        </div>
    }

    return (
        <div className='container-select-product'>
            <div className='header'>
                <h2>Listar Produtos</h2>
                <img className='icon-close' src={iconClose} alt='icon-close' onClick={handleCloseModalSelectProduct} />
            </div>
            <input className='input-find' placeholder='Buscar Produto' onChange={(e) => findProducts(e.target.value)} />
            {renderHeader()}

            <ul className='content-products'>
                {listProduct.map((product, index) => (
                    <li key={product.id} className='content-product'>
                        <span className='product-id'>{product.id}</span>
                        <span className='product-descricao'>{product.descricao}</span>
                        <span className='product-marca'>{product.marca}</span>
                        <span className='product-estoque'>{product.estoque}</span>
                        <span className='product-preco'>{product.preco}</span>
                        <div className='user-actions'>
                            <img
                                className='actions'
                                src={icone_edit}
                                alt='icon-edit'
                                onClick={() => handleModalEditProduct(product)}
                            />
                            <img
                                className='actions'
                                src={icone_trash}
                                alt='icon-trash'
                                onClick={() => setModalDelete(index)}
                            />
                        </div>
                        {showModalEdit && modalTypeEdit === 'edit-product' && (
                            <Modal>
                                <EditProduct
                                    productId={productId}
                                    setModalType={setModalType}
                                    setShowModal={setShowModal}
                                    formEditProduct={formEditProduct}
                                    setFormEditProduct={setFormEditProduct}
                                    loadProducts={loadProducts}
                                    listProduct={listProduct}
                                    setListProduct={setListProduct}
                                />
                            </Modal>
                        )}
                        {modalDelete === index && (
                            <Modal>
                                <DeleteProduct
                                loadProducts={loadProducts}
                                productId = {product.id}
                                setModalDelete={setModalDelete}
                            />
                            </Modal>
                        )}
                    </li>
                ))}
            </ul>

        </div>
    )
}