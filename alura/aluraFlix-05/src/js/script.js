


let imagemteste = document.querySelector('.texte')
let inputValor = document.querySelector('.buscar')
let listarFilmes = document.querySelector('.listarFilmes')
let botao = document.querySelector('.gerar')



botao.addEventListener('click',(event) => {

    let elementoFilmeFavorito = "<img src=" + inputValor.value + ">"
    listarFilmes.innerHTML += elementoFilmeFavorito
    inputValor.value = ''
})
