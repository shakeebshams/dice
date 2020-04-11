var randomNum1 = Math.floor(Math.random() * 6) + 1;
var source1 = "images/dice" + randomNum1 + ".png";
document.getElementsByClassName("img1")[0].src = source1;

var randomNum2 = Math.floor(Math.random() * 6) + 1;
var source2 = "images/dice" + randomNum2 + ".png";
document.getElementsByClassName("img2")[0].src = source2;

if (randomNum1 > randomNum2) {
    //player1 wins
    document.getElementsByTagName("h1")[0].innerHTML = "Player 1 wins.";
} else if (randomNum1 < randomNum2) {
    //player2 wins
    document.getElementsByTagName("h1")[0].innerHTML = "Player 2 wins.";
} else {
    //tie
    document.getElementsByTagName("h1")[0].innerHTML = "It's a tie.";
}