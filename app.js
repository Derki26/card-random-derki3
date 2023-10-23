const spadeValor = ["heart", "diamont", "spade", "club"];
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let cardtop = document.querySelector("#card-top");
let number = document.querySelector("#number");
let cardbuttom = document.querySelector("#card-bottom");


function electioncard(arr1, arr2){
    let card1 =[]
    card1.push(arr1[Math.floor(Math.random()*arr1.length)]);
    card1.push(arr2[Math.floor(Math.random()*arr2.length)]);
    return card1
}
function changeColor(arr){
    if(arr[0] === "heart" || arr[0] === "diamont"){
        cardtop.style.color = "red";
        number.style.color = "red";
        cardbuttom.style.color = "red";
    }
    else{
        cardtop.style.color = "black";
        number.style.color = "black";
        cardbuttom.style.color = "black";
    }
}
function asignarSpade(arr){
    if(arr[0] === "heart"){
        cardtop.innerHTML = "♥"
        cardbuttom.innerHTML = "♥"
    }
    else if(arr[0] === "diamont"){
        cardtop.innerHTML = "♦"
        cardbuttom.innerHTML = "♦"
    }
    else if(arr[0] === "club"){
        cardtop.innerHTML = "♣"
        cardbuttom.innerHTML = "♣"
    }
    else{
        cardtop.innerHTML = "♠"
        cardbuttom.innerHTML = "♠"
    }
}
function changeValor(arr){
    number.innerHTML = arr[1];
}
function generationCard(){
    let card1 = electioncard(spadeValor, values);
    changeColor(card1);
    asignarSpade(card1);
    changeValor(card1);

    let pokerSound = document.getElementById("pokerSound");
    pokerSound.play();
}


window.onload = function() {
    generationCard();
    setInterval(generationCard, 10000); 
}
document.querySelector(".button1").addEventListener("click", generationCard)