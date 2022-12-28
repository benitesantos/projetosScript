
const saida = document.querySelector('.saida')
const imagem = document.querySelector('img')
const body = document.querySelector('body')

const digitacao = (texto, contador) => {

    if(contador < texto.length){
        
        setTimeout(() => {
            if(texto.charAt(contador) === '-'){
                saida.innerHTML += `<br>`
            } else {
                saida.innerHTML += texto.charAt(contador)

            }
            contador++

            digitacao(texto,contador)
        }, 75)
    }
}


// digitacao('Paulo Ricardo Benites Carvalho dos Santos - desenvolvedor full stack',0)

digitacao('const profissao = "professor" ; - console.log(`Feliz dia do ${profissao}`);- Feliz dia do professor.',0)

body.addEventListener('keydown',(event) => {

    if(event.key === 'Enter'){
        imagem.style.display = 'block'
        setTimeout(() => {
            imagem.style.setProperty('transform','scale(1.2)')
            
        },50)

        setTimeout(() => {
            imagem.style.setProperty('transform','scale(1)')

            
        },2050)
        // imagem.classList.add('efeitos')
        // imagem.style.transition = '4s'
        // imagem.style.transform = 'scale(1.3)'
        
    }
    
})