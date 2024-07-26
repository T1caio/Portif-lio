let game = {
    lockmode: false,
    firstCard: null,
    secondCard: null,
    setCard: function (id) {
        let card = this.cards.filter(card => card.id === id)[0];
        if (card.flipped || this.lockmode) { return false; }
        if (!this.firstCard) { this.firstCard = card; this.firstCard.flipped = true; return true; }
        else {
            this.secondCard = card;
            this.secondCard.flipped = true;
            this.lockmode = true;
            return true
        }

    },
    checkMath: function (id) {
        if (!this.firstCard || !this.secondCard) { return false }
        return this.firstCard.icon === this.secondCard.icon
    },
    clearCards() {
        this.firstCard = null;
        this.secondCard = null;
        this.lockmode = false
    },
    unflipcards: function () {
        this.firstCard.flipped = false;
        this.secondCard.flipped = false;
        this.clearCards()
    },
    checkGameover: function(){return this.cards.filter(card=>!card.flipped).length==0;


    },
    techs: ['bootstrap', 'css', 'electron', 'firebase', 'html', 'javascript', 'jquery', 'mongo', 'node', 'react'],
    cards: null,
    CreateCardsFromTechs: function () {
        this.cards = [];
        this.techs.forEach((tech) => { this.cards.push(this.createpairfortech(tech)) });
        this.cards = this.cards.flatMap(pair => pair);
        this.shuffleCards();
        return this.cards
    },
    createpairfortech: function (tech) {
        return [{
            id: this.createIdWithTech(tech),
            icon: tech,
            flipped: false
        }, {
            id: this.createIdWithTech(tech),
            icon: tech,
            flipped: false
        }]
    },
    createIdWithTech: function (tech) {
        return tech + parseInt(Math.random() * 1000)
    },
    shuffleCards: function (cards) {
        let currentIndex = this.cards.length;
        let randomIndex = 0;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [this.cards[randomIndex], this.cards[currentIndex]] = [this.cards[currentIndex], this.cards[randomIndex]]
        }
    }


}