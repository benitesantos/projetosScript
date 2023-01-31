import './style.css';
// import { useState, useEffect } from 'react';
import iconClose from '../../images/icone_fechar.png';


function Main({
    setModalTypeMain,
    setShowModalMain,
}) {

    function handleCloseModalMain() {
        setModalTypeMain(null);
        setShowModalMain(false);
    }




    return (
        <div className='container-main'>
            <div className='info-orcamento'>
                <h1>ORÇAMENTO Nº</h1>
                <input />
                <img className='icon-close' src={iconClose} alt='icon-close' onClick={handleCloseModalMain} />
            </div>
            <div className='info-cliente1'>
                <div>
                    <label>Nome</label>
                    <input className='input-nome' />
                </div>
                <div>
                    <label>Telefone</label>
                    <input className='input-telefone' />
                </div>
                <span>Vendedor: LUAN BULLING</span>
                <div>
                    <label>Observação</label>
                    <input className='input-obs' />
                </div>
            </div>
            <div className='info-cliente2'>
                <span>Data de emissão</span>
                <input />
            </div>
            <div className='tabela-orcamento'>
                <h1>Tabela</h1>
                <div className='container-table'>
                    <span>Código</span>
                    <span>Descrição</span>
                    <span>Unidade</span>
                    <span>Quantidade</span>
                    <span>Preço</span>
                    <span>Desconto</span>
                    <span>Total</span>
                </div>
            </div>
        </div>
    )
}

export default Main;