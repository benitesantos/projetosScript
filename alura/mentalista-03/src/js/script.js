const numeroSecreto = parseInt(Math.random() * 21);
const imagemMentor = document.querySelector('.mental');
const imagemMentorFeliz = document.querySelector('.mental-feliz');
const imagemMentorTriste = document.querySelector('.mental-triste');

function Chutar() {

    
    
    const chute = parseInt(document.getElementById('valor').value);
    const elementoResultado = document.getElementById('resultado');
    
    if(chute === numeroSecreto){
        elementoResultado.innerHTML = 'Você acertou';
        imagemMentorFeliz.style.display = 'inline';
        imagemMentor.style.display = 'none';
        imagemMentorTriste.style.display = 'none';
    } else if (chute > 20 || chute < 0){
        elementoResultado.innerHTML = 'Você deve digitar um número de 0 a 20';
        imagemMentor.style.display = 'inline';
        imagemMentorFeliz.style.display = 'none';
        imagemMentorTriste.style.display = 'none';

    } else if(chute > numeroSecreto) {
        elementoResultado.innerHTML = `Errou! o número secreto é menor que ${chute}`;
        imagemMentorTriste.style.display = 'inline';
        imagemMentor.style.display = 'none';
        imagemMentorFeliz.style.display = 'none';
    } else if(chute < numeroSecreto) {
        elementoResultado.innerHTML = `Errou! o número secreto é maior que ${chute}`;
        imagemMentorTriste.style.display = 'inline';
        imagemMentor.style.display = 'none';
        imagemMentorFeliz.style.display = 'none';}
    

    
}

function Tentar(){
    let chute = document.getElementById('valor');
    chute.value = '';
    chute = chute.focus()
}