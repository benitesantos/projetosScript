
function Converter() {
    const valorElemento = document.getElementById('valor');
    const valor = valorElemento.value;
    const valorEmKmPorHora = parseFloat(valor);

    let valorEmMetrosPorSegundo = valorEmKmPorHora / 3.6;

    let elementoValorConvertido = document.getElementById('valorConvertido')

    let valorConvertido = `Velocidade = ${valorEmMetrosPorSegundo.toFixed(2)} m/s`

    elementoValorConvertido.innerHTML = valorConvertido 


}