var images = ['images/dice1.png', 'images/dice2.png','images/dice3.png','images/dice4.png','images/dice5.png', 'images/dice6.png']

var headerText = document.querySelector('h1');

var leftDice = document.querySelector('.dice .img1');
var rightDice = document.querySelector('.dice .img2');

function rollTheDice() {

    var randomNumber1 = Math.floor((Math.random() * 6));
    var randomNumber2 = Math.floor((Math.random() * 6));

    var randomImage1 = images[randomNumber1];
    var randomImage2 = images[randomNumber2];

    leftDice.setAttribute('src', randomImage1);
    rightDice.setAttribute('src', randomImage2);

    if (randomNumber1 > randomNumber2) {
        headerText.innerText = "Player One Wins!";
    }

    else if (randomNumber1 < randomNumber2) {
        headerText.innerText = "Player Two Wins!";
    }

    else {
        headerText.innerText = "It's a draw!";
    }

}





