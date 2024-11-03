const emojis = [
  "🤡",
  "🤡",
  "🦊",
  "🦊",
  "🐮",
  "🐮",
  "🐷",
  "🐷",
  "🐭",
  "🐭",
  "🐰",
  "🐰"
];
// usando a variavel state para armazenar os valores e escrever no html
const state = {
    view:{
        timeleft:document.querySelector("#time-left"),
    },
    values:{
        timerId:null, 
        sountDownTimerId:null,      
        currentTime:30,
        },
};
let openCards = [];

let shuffledEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

for (let i = 0; i < emojis.length; i++) {
  let box = document.createElement("div");
  box.className = "item";
  box.innerHTML = shuffledEmojis[i];
  box.onclick = handleClick;
  document.querySelector(".game").appendChild(box);
}
function handleClick() {
    if (openCards.length < 2) {
        this.classList.add("boxOpen");
        openCards.push(this);
    }
    if (openCards.length === 2) {
        setTimeout(checkMatch, 500);
    }
}
function checkMatch() {
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
        openCards = [];
    } else {
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
        openCards = [];
    }
    if (document.querySelectorAll(".boxMatch").length === emojis.length) {
        alert("Parabéns, você ganhou!");
    }
}
// funcion cronometro 
function countDown(){
    state.values.currentTime--;
    state.view.timeleft.textContent=state.values.currentTime;
    if(state.values.currentTime<=0){
        state.values.currentTime=30;
        clearInterval(state.values.sountDownTimerId);
        clearInterval(state.values.timerId);
        alert("Game Over! ACABOU O TEMPO!");
        
        
    }
}
//para chamar a função cronometro onde 1000 representa 1 segundo  state.values.sountDownTimerId=setInterval(countDown,1000);
state.values.sountDownTimerId=setInterval(countDown,1000);