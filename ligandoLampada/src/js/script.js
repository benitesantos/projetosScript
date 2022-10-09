const btn = document.querySelector('#clicker')
const lamp = document.querySelector('#lamp')


btn.addEventListener('click' ,() => {
    if(btn.value === 'Acender'){
        lamp.src = '/img/ligada.png'
        btn.value = 'Apagar'
        btn.innerHTML = 'Apagar'
    } else {
        lamp.src = '/img/desligada.png'
        btn.value = 'Acender'
        btn.innerHTML = 'Acender'
    }
})