// Faça o exercício dos parágrafos aqui
// Este arquivo ainda não está incluído no arquivo HTML

let buttons = document.querySelectorAll('.botao-expandir-retrair');

for(let button of buttons){
    button.addEventListener('click', function(e) {
        alert('clicou no botao mais');
        let no = e.currentTarget;
        let parent = no.parentNode;
        parent.classList.toggle('expandido');
        console.log(no.innerHTML);
        no.innerHTML = no.innerHTML == '+' ? '-' : '+';
        console.log(no.innerHTML);
    });
    
}


