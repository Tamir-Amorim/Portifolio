
const grid = document.querySelector(".grid");

const personalidades = [
    'abdias_nascimento',
    'conceição_evaristo',
    'descartes',
    'fanon',
    'fred_hampton',
    'guerreiro_ramos',
    'kant',
    'karl_marx',
    'Lelia_gonzales',
    'luiz_gama',
    'malcom_x',
    'martin_luther_king',
    'milton_santos',
    'steve_biko',
    'sueli_carneiro'

]

function createCard(){
 
const card = document.createElement("div");
const front = document.createElement("div");
const back = document.createElement("div");

card.className = "card";
front.className = "face front";
back.className = "face back";

card.appendChild(front);
card.appendChild(back);

grid.appendChild(card);
    
}




function loadGame() {

for (let i = 0; i < 29; i++) {
    createCard();
    }

}

loadGame();