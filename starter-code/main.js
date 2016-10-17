
var board = document.getElementById('game-board');

var createCards = function(){
    for(var i = 0; i < 4; i ++){
        var cardElement = document.createElement('div');
        cardElement.className = 'card';
        board.appendChild(cardElement);
        }
}
createCards();

