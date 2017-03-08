console.log("JS file is connected to HTML! Woo!")
// var cardOne = "king";
// var cardTwo = "king";
// var cardThree = "queen";
// var cardFour = "queen";

// if (cardTwo === cardFour) {
// 	alert("You found a match!");
// } else {
// 	alert("Sorry, try again.");
// }
var cards = ['queen','queen','king','king'];
var cardsInPlay = [];
var gameBoard = document.getElementById('game-board');

var createBoard = function() {
	for (var i=0; i<cards.length; i++) {
		var newDiv = document.createElement('div');
		newDiv.className = "card";
        newDiv.setAttribute('data-card', cards[i]);
		gameBoard.appendChild(newDiv);
	}
	for (var i=0; i<cards.length; i++) {
		document.querySelectorAll('.card')[i].addEventListener('click', isTwoCards);
	}
};

var isTwoCards = function() {
	cardsInPlay.push(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') == 'queen') {
		if ((Math.random()*100) > 50) {
			this.innerHTML = '<img src="queen-card-black.png" alt="Queen"/>';
		} else {
			this.innerHTML = '<img src="queen-card-red.png" alt="Queen"/>';
		}
	} else {
		if ((Math.random()*100) > 50) {
			this.innerHTML = '<img src="king-card-black.png" alt="King"/>';
		} else {
			this.innerHTML = '<img src="king-card-red.png" alt="King"/>';
		}
	}
	if (cardsInPlay.length == 2) {
	    isMatch(cardsInPlay);
	    cardsInPlay = [];
	}
};

var isMatch = function(cardsInPlay) {
	if(cardsInPlay[0] && cardsInPlay[1]) {
		if ((cardsInPlay[0] === 'queen' && cardsInPlay[1] == 'queen') || (cardsInPlay[0] === 'king' && cardsInPlay[1] == 'king')) {
			alert('match');
		} else {
			alert('no match');
		}
		for (var i=0; i<cards.length; i++) {
			document.querySelectorAll('.card')[i].innerHTML = "";
		}
	}
};

createBoard();


