var cards = ['queen', 'queen', 'king', 'king'];

var cardsInPLay = [];

var board = document.getElementById('game-board');

var createBoard = function(){
    for(var i = 0; i < cards.length; i ++){
        var cardElement = document.createElement('div');
        cardElement.className = 'card';
        board.appendChild(cardElement);
        cardElement.setAttribute('data-card', cards[i]);
        cardElement.addEventListener('click', isTwoCards);
        
        board.appendChild(cardElement);
        board.appendChild(cardElement);
        
    }
};

function isTwoCards(){
   console.log(this.getAttribute('data-card'));
    	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='http://i.imgur.com/bnuv5Im.png'>";
	} else {
		this.innerHTML = "<img src='http://i.imgur.com/v6buNt2.png'>"; 
	}cardsInPLay.push(this.getAttribute('data-card'));
    if(cardsInPLay.length === 2){
        isMatch(cardsInPLay);
        cardsInPLay = [];
    }
}

function isMatch(cards) {
  // alert winning message
  if (cards[0] === cards[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");

  }
}

createBoard();

