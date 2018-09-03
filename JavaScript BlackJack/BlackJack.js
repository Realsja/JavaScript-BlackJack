let player = {score: 0, Hand: "hand"}; //player.suit = nothing;
let dealer = {score: 0, Hand: "hand"};

let suits = ['Clubs', 'Spades', 'Hearts', 'Diamonds'];
let values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
let deck = new Array();

function generateDeck() {
    deck = new Array();
    for(var v = 0; v < values.length; v++) {
        for(var s = 0; s < suits.length; s++) {
            let numVal = parseInt(values[v]);
            if (values[v] == "J" || values[v] == "Q" || values[v] == "K") {
                numVal = 10;
            }
            if (values[v] == "A") {
                numVal = 11;
            }
            let card = {Value: values[v], Suit: suits[s], NumericalValue: numVal};
            deck.push(card);
        }
    }
}

function shuffle() {
    for (var sh = 0; sh < 500; sh++) { // good for 500 turns
        let card0 = Math.floor((Math.random() * deck.length));
        let card1 = Math.floor((Math.random() * deck.length));
        let temploc = deck[card0];
        deck[card0] = deck[card1];
        deck[card1] = temploc;
    }
}

function dealCards() {
    for (var d = 0; d < 2; d++) {
        let card = deck.pop();
        player.Hand = card;
    }
    for (var e = 0; e < 2; e++) {
        let card = deck.pop();
        dealer.Hand = card;
    }
    console.log("Your hand ", player.Hand);
    console.log("Dealer's hand ", dealer.Hand);
}

function hitMe() {
    var card = deck.pop();
    player[playerscore].push(card);
    isOver();
}

function isOver() {
    if (player.score > 21) {
        console.log("Busted, game lost");
    }
    else if (dealer.score > 21) {
        console.log("Dealer has busted. You've won!");
    }
}

function stay() {
    if (dealerscore < 16) {
        let card = deck.pop();
        dealer[dealerscore].push(card);
        isOver();
    }
}


generateDeck();
shuffle();
dealCards();