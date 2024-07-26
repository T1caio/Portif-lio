const Front = "card-front"
const Back = "card-back"
const Card = "card"
const Icon = "icon"


startgame();
function startgame() {

    initializeCards(game.CreateCardsFromTechs());
}
function initializeCards(cards) {
    let Gameboard = document.getElementById("gameboard");
    Gameboard.innerHTML = '';
    game.cards.forEach(card => {
        cardElement = document.createElement('div');
        cardElement.id = card.id;
        cardElement.classList.add(Card);
        cardElement.dataset.icon = card.icon;
        createCardContent(card, cardElement);
        cardElement.addEventListener('click', flipcard)
        Gameboard.appendChild(cardElement);
    })
}
function createCardContent(card, cardElement) {
    createCardFace(Front, card, cardElement);
    createCardFace(Back, card, cardElement)
}
function createCardFace(face, card, element) {
    let cardElementFace = document.createElement('div');
    cardElementFace.classList.add(face);
    if (face === Front) {
        let iconElement = document.createElement('img');
        iconElement.classList.add(Icon);
        iconElement.src = "./images/" + card.icon + ".png";
        cardElementFace.appendChild(iconElement)

    }
    else { cardElementFace.innerHTML = "&lt/&gt" }
    element.appendChild(cardElementFace)
}


function flipcard() {

    if (game.setCard(this.id)) {
        this.classList.add('flip');
        if (game.secondCard) {
            if (game.checkMath()) {
                game.clearCards(); if (game.checkGameover()) {
                    let gameoverON = document.getElementById("gameover");
                    gameoverON.style.display = 'flex'
                }
            }
            else {
                setTimeout(() => {
                    let firstCardView = document.getElementById(game.firstCard.id);
                    let secondCardView = document.getElementById(game.secondCard.id)
                    firstCardView.classList.remove('flip'); secondCardView.classList.remove('flip');
                    game.unflipcards()
                }, 1000)
            }
        }
    }
}

function restart() {
    game.clearCards();
    startgame(); let gameoverON = document.getElementById("gameover");
    gameoverON.style.display = 'none'


}


