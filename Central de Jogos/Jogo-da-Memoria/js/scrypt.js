
//variaveis globais
const input = document.querySelector('.login__input');
const button = document.querySelector('.login__button');
const form = document.querySelector('.login-form');




//Habilita o botão play
function validaInput ({target}){
    if(target.value.length > 3 ) {
        button.removeAttribute('disabled');
    }
    else{button.setAttribute('disabled', '');}
}

//função submit
function handleSubmit(event) {
event.preventDefault();
console.log('logando');

localStorage.setItem('player', input.value);
window.location ="game.html";

}


//listening
input.addEventListener('input', validaInput);
form.addEventListener('submit', handleSubmit);

