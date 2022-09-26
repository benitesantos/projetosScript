const filme1 = 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/92/91/32/20224832.jpg'

const filme2 = 'https://br.web.img2.acsta.net/medias/nmedia/18/92/34/89/20194741.jpg'

const filme3 = 'https://cineclick-static.flixmedia.cloud/480/69/1080x1620_1573418825.jpg'

let imagem = document.querySelector('.primeiro')
let imagem2 = document.querySelector('.segundo')
let imagem3 = document.querySelector('.terceiro')
let texto1 = document.querySelector('.texto1')
let texto2 = document.querySelector('.texto2')
let texto3 = document.querySelector('.texto3')


let botao = document.querySelector('.btn')


imagem.src = filme1
imagem2.src = filme2
imagem3.src = filme3



let aneis = [imagem,imagem2,imagem3]

const timer = ms => new Promise(res => setTimeout(res, ms))

botao.addEventListener('click',async (event) => {
   
    // aneis.forEach((imagem) => {
    //     imagem.style.display = 'inline'
        
    //     })
   

    for(let imagem of aneis){
        imagem.style.display = 'inline'

        texto1.style.display = 'block'
        texto2.style.display = 'block'
        texto3.style.display = 'block'
        await timer(500)
    }    
})

