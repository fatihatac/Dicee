var randomNumber1 = Math.floor(Math.random()*6) + 1; //1-6
var selectedDice1 = "images/dice" +randomNumber1 +".png";
document.querySelector(".img1").setAttribute("src",selectedDice1);

var randomNumber2 = Math.floor(Math.random()*6) + 1; //1-6
var selectedDice2 = "images/dice" +randomNumber2 +".png";
document.querySelector(".img2").setAttribute("src",selectedDice2);


if(selectedDice1>selectedDice2){
   document.querySelector(".container h1").textContent = "🚩 Player 1 Wins!"
}
else if(selectedDice2>selectedDice1){
    document.querySelector(".container h1").textContent = "Player 2 Wins! 🚩"
}
else{
    document.querySelector(".container h1").textContent = "Draw!"
}