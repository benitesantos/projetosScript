
let input = document.querySelector('input')

let logos = document.querySelector('.logos')

let textoCopa = document.querySelector('h1')

let copasDoMundo = [
    {
        ano: 1930,
        logo: '/assets/emblemas/uruguai1930.png'
    },
    {
        ano: 1934,
        logo: '/assets/emblemas/italia1934.png'
    },
    {
        ano: 1938,
        logo: '/assets/emblemas/franca1938.png'
    },
    {
        ano: 1950,
        logo: '/assets/emblemas/brasil1950.png'
    },
    {
        ano: 1954,
        logo: '/assets/emblemas/suica1954.png'
    },
    {
        ano: 1958,
        logo: '/assets/emblemas/suecia1958.png'
    },
    {
        ano: 1962,
        logo: '/assets/emblemas/chile1962.png'
    },
    {
        ano: 1966,
        logo: '/assets/emblemas/inglaterra1966.png'
    },
    {
        ano: 1970,
        logo: '/assets/emblemas/mexico1970.png'
    },
    {
        ano: 1974,
        logo: '/assets/emblemas/alemanha1974.png'
    },
    {
        ano: 1978,
        logo: '/assets/emblemas/argentina1978.png'
    },
    {
        ano: 1982,
        logo: '/assets/emblemas/espanha1982.png'
    },
    {
        ano: 1986,
        logo: '/assets/emblemas/mexico1986.png'
    },
    {
        ano: 1990,
        logo: '/assets/emblemas/italia1990.png'
    },
    {
        ano: 1994,
        logo: '/assets/emblemas/eua1994.png'
    },
    {
        ano: 1998,
        logo: '/assets/emblemas/franca1998.png'
    },
    {
        ano: 2002,
        logo: '/assets/emblemas/japao2002.png'
    },
    {
        ano: 2006,
        logo: '/assets/emblemas/alemanha2006.png'
    },
    {
        ano: 2010,
        logo: '/assets/emblemas/africa2010.png'
    },
    {
        ano: 2014,
        logo: '/assets/emblemas/brasil2014.png'
    },
    {
        ano: 2018,
        logo: '/assets/emblemas/russia2018.png'
    },
    {
        ano: 2022,
        logo: '/assets/emblemas/catar2022.png'
    }

]

let copaMostrada = []




function verificarAnoDeCopa(event) {
   
    
    if (event.key === 'Enter' && Number(input.value) <= 1929) {
        logos.innerHTML = ''
        textoCopa.textContent = `No ano  ${input.value} - Não existia copa do mundo!`
        input.value = ''
       
    }

    if (event.key === 'Enter' && Number(input.value) >= 1930) {
        logos.innerHTML = ''
        let intervalo = Math.abs(input.value - 1930)
        
       
        if (intervalo % 4 === 0 && Number(input.value) <= 2022) {
            logos.innerHTML = ''
            textoCopa.textContent = `No ano de ${input.value} teve copa do mundo!`
            console.log('Ano de Copa')

            filtrarCopas()

        } else if (intervalo % 4 === 0 && Number(input.value) > 2022) {
            logos.innerHTML = ''
            textoCopa.textContent = `No ano de ${input.value} haverá copa do mundo!`
        }
        else if (intervalo % 4 !== 0 && Number(input.value) < 2022) {
            logos.innerHTML = ''
            console.log('Não é ano de Copa')
            let semCopa = document.createElement('img')
            semCopa.classList.add('sem-copa')
            let texto = document.createElement('h1')
            texto.classList.add('texto')
            texto.textContent = 'Não foi ano de Copa!'
            textoCopa.textContent = `No ano de ${input.value}`
            semCopa.src = 'https://img.ibxk.com.br/2022/07/12/futebol-12120333910184.jpg'
            logos.append(semCopa, texto)
    
    
    
        } else if (intervalo % 4 !== 0 && Number(input.value) > 2022) {
            logos.innerHTML = ''
            textoCopa.textContent = `No ano de ${input.value} não haverá copa do mundo!`
        }
        input.value = ''
    }

}




input.addEventListener('keydown', (verificarAnoDeCopa))






function criarElemento() {
    logos.innerHTML = ''
    for (let copa of copasDoMundo) {
        if (copa.ano === Number(input.value)) {
            let logoImagem = document.createElement('img')
            logoImagem.src = copa.logo
            logos.append(logoImagem)


        }
    }
}

function filtrarCopas() {

    copaMostrada = copasDoMundo.filter((copa) => {

        return copa.ano === Number(input.value)
    })
    console.log(copaMostrada)
    criarElemento()

}