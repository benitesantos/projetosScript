const primeiraNota = document.querySelector('#nota1')
const segundaNota = document.querySelector('#nota2')
const terceiraNota = document.querySelector('#nota3')
const quartaNota = document.querySelector('#nota4')
const botaoMedia = document.querySelector('.btn-media')
const resultado = document.querySelector('.resultado')
const botaoLimpar = document.querySelector('.btn-limpar')
const inputs = document.querySelector('.inputs')


console.log(primeiraNota.value,segundaNota.value,terceiraNota.value,quartaNota.value,botaoMedia)

console.log(quartaNota)

const quantNotas = [primeiraNota,segundaNota,terceiraNota,quartaNota]




botaoMedia.addEventListener('click',()=> {

    let mediaVisivel = false


    const notasValidas = quantNotas.filter((numero) => {
        return numero.value !== ''
    })

    console.log(notasValidas.length)

     
    let mediaAritimetica = (Number(primeiraNota.value) + Number(segundaNota.value) + Number(terceiraNota.value) + Number(quartaNota.value)) / notasValidas.length


    
    if(mediaVisivel === false){
        resultado.style.display = 'flex'
        
    } else {
        resultado.style.display = 'none'
    }
    mediaVisivel = !mediaVisivel

   
    
    resultado.textContent = mediaAritimetica.toFixed(1)
   

    console.log(mediaAritimetica.toFixed(1))
})

botaoLimpar.addEventListener('click',() => {

    primeiraNota.value = ''
    segundaNota.value = ''
    terceiraNota.value = ''
    quartaNota.value = ''
    resultado.style.display = 'none'
        

})