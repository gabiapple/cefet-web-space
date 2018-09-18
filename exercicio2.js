// Faça o exercício da galeria de imagens aqui
// Este arquivo ainda não está incluído no arquivo HTML

const servidorDasImagens = 'https://fegemo.github.io/cefet-web/images/',
  todasAsImagens = [
    'philae-parts.jpg',
    'philae-rosetta.jpg',
    'philae-separation.jpg',
    'philae-67-picture.jpg',
    'philae-collecting.jpg'
  ];

const changeImage = function(factor){
    cont = (cont == 0 && factor < 0) ? 4 : cont + factor;
    image = document.querySelector('#slide');
    image.src = servidorDasImagens + todasAsImagens[cont % 5];
}

let cont = 0;

let buttonPrev = document.querySelector('#anterior');
let buttonNext = document.querySelector('#proximo');

buttonPrev.addEventListener('click', function(e){
    changeImage(-1);
});

buttonNext.addEventListener('click', function(e){
     changeImage(1);
});
