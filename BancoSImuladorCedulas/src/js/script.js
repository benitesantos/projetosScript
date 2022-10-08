
const resultado = document.querySelector('.tudo')

const input = document.querySelector('input')

const dinheiro = document.querySelector('.dinheiro')


const body = document.querySelector('body')

input.addEventListener('keydown',(event) => {
   if (event.key === 'Enter'){

    let valor = parseInt(input.value)
    input.value = ''
    resultado.innerHTML = ''
    dinheiro.innerHTML = ` R$ ${valor.toFixed(2)}`


    let notas = [
        {
            valor:100,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/0/01/100_Brazil_real_Second_Obverse.jpg'
        },
        {
            valor: 50,
            imagem: 'https://thumbs.jusbr.com/filters:format(webp)/imgs.jusbr.com/publications/images/2b258b728aacc8fd38b72f9e21b53f9c'
        },
        {
            valor: 20,
            imagem: 'https://www.bcb.gov.br/novasnotas/assets/img/section/20/20_front.jpg'
        },
        {
            valor: 10,
            imagem: 'https://www.bcb.gov.br/novasnotas/assets/img/section/10/10_front.jpg'
        },
        {
            valor: 5,
            imagem: 'https://www.bcb.gov.br/novasnotas/assets/img/section/5/5_front.jpg'
        },
        {
            valor: 2,
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/2_Brazil_real_Second_Obverse.jpg'
        },
        {
            valor: 1,
            imagem: 'https://images.tcdn.com.br/img/img_prod/910747/cedula_de_1_real_fe_serie_ac_245_1_20201204224436.jpg'
        }
    ]

     notas.forEach((nota) => {
       let qtdNotas = parseInt(valor/nota.valor)

        if(qtdNotas !== 0){
            
        //   if(nota.valor === 1){
        //     resultado.innerHTML += `<div class="nota"><div>${qtdNotas} moeda(s) de R$ ${nota.valor.toFixed(2)}</div> <img class="imagem-menor" src = ${nota.imagem}> </div> `
        //     return
        //   }
          resultado.innerHTML += `<div class="nota"><div>${qtdNotas} nota(s) de R$ ${nota.valor.toFixed(2)}</div> <img src = ${nota.imagem}> </div> `
        }
        valor = valor % nota.valor
        
    })
   }
})

