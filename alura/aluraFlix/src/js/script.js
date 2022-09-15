let velozes1 = "https://static.wikia.nocookie.net/velozes-e-furiosos/images/a/aa/Velozes_e_Furiosos_-_Capa.jpg/revision/latest?cb=20180305235641&path-prefix=pt-br";

let velozes2 = 'https://upload.wikimedia.org/wikipedia/pt/2/20/2_Fast_2_Furious_2003.jpg';

let velozes3 = 'https://br.web.img2.acsta.net/pictures/210/383/21038387_20130909201408304.jpg';

let velozes4 = 'https://br.web.img3.acsta.net/pictures/210/445/21044501_2013092621313492.jpg';

let velozes5 = 'https://br.web.img3.acsta.net/medias/nmedia/18/87/34/17/20028727.jpg';

let velozes6 = 'https://br.web.img3.acsta.net/medias/nmedia/18/92/81/46/20528636.jpg';

let velozes7 = 'https://br.web.img3.acsta.net/pictures/15/03/30/21/19/054397.jpg';

let velozes8 = 'https://br.web.img3.acsta.net/pictures/17/03/27/09/49/121118.jpg';

let velozes9 = 'https://br.web.img3.acsta.net/pictures/21/04/14/19/06/3385237.jpg';

let filmes = [velozes1,velozes2,velozes3,velozes4,velozes5,velozes6,velozes7,velozes8,velozes9];

for(let i = 0; i < filmes.length; i++){
    document.write(`<img src=${filmes[i]}>`)
}
