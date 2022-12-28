import './style.css';

function Main() {
    return (
        <div className='container-main'>
            <h1>ORÇAMENTO Nº</h1>
            <div className='info-cliente1'>
                <span>Nome</span>
                <span>Telefone</span>
                <span>Vendedor</span>
                <span>Observação</span>
            </div>
            <div className='info-cliente2'>
                <span>Data de emissão</span>
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