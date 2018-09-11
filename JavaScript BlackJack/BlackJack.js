let playerhand = []; //cards are put in each element of the array
let dealerhand = [];

let player = {score: 0, Hand: playerhand, acebool: false}; //acebool determines if player or dealer has ace. if they have over 21, ace converts to the value of 1
let dealer = {score: 0, Hand: dealerhand, acebool: false};

let playerui = document.getElementById("playerui");
let dealerui = document.getElementById("dealerui");
let res = document.getElementById("res");

let suits = ['♣', '♠', '♥', '♦'];
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
            let card = {Value: values[v], Suit: suits[s], Cardval: numVal};
            deck.push(card);
        }
    }
}

function shuffle() {
    for (var sh = 0; sh < 500; sh++) { //runs for 500 turns
        let card0 = Math.floor((Math.random() * deck.length)); //randomizes deck and then swaps card locations with temporary locations
        let card1 = Math.floor((Math.random() * deck.length));
        let temploc = deck[card0];
        deck[card0] = deck[card1];
        deck[card1] = temploc;
    }
}

function dealCards() { //deals 2 cards to both player and dealer
    for (var d = 0; d < 2; d++) {
        let card = deck.pop();
        playerhand[d] = card;
        player.score += card.Cardval;
        if (card.Cardval == 11) { //acebool turns true if the cardvalue is 11 (ace)
            player.acebool = true;
        }
    }
    for (var e = 0; e < 2; e++) {
        let card = deck.pop();
        dealerhand[e] = card;
        dealer.score += card.Cardval;
        if (card.Cardval == 11) {
            dealer.acebool = true;
        }
    }
    getuiCard();
    isOver();
}

var ph = 2; //global variable that makes sure new card goes into 3rd element of array. as not to overwrite other drawn cards
function hitMe() {
    let card = deck.pop();
    playerhand[ph] = card;
    player.score += card.Cardval;
    ph += 1; //ups value for next empty slot in the array
    getuiCard();
    isOver();
}

function isOver() { 
    if (player.score == 21) { 
        console.log("You've got 21, You Win!")
        res.innerHTML = "You've got 21, You Win!";
    }
    if (player.score > 21) { //check over 21
        if (player.acebool == true) {
            player.score -= 10;
            res.innerHTML = "Ace converted into 1";
        }
        else {
            res.innerHTML = "You've busted. Game over.";
        }
    }
    if (dealer.score == 21) {
        res.innerHTML= "Dealer has 21, you've lost";
    }

    if (dealer.score > 21) { //check over 21
        if (dealer.acebool == true) {
            dealer.score -= 10;
            "Dealer's ace converted into 1";
        }
        else {
            res.innerHTML = "Dealer has busted, You Win!";
        }
    }

}

var dh = 2; //same functionality as line 58
function stay() {
    if (dealer.score < 16) {
        let card = deck.pop();
        dealerhand[dh] = card;
        dealer.score += card.Cardval;
        dh += 1;
        getuiCard();
        isOver();
    }
}

function getuiCard() {
    playerui.innerHTML = "";
    dealerui.innerHTML = "";
    for (var x = 0; x < playerhand.length; x++) {
        let pui = playerhand[x].Value + playerhand[x].Suit;
        playerui.innerHTML += "<div>" + pui + "</div>";
    }
    for (var i = 0; i < dealerhand.length; i++) {
        let dui = dealerhand[i].Value + dealerhand[i].Suit;
        dealerui.innerHTML += "<div>" + dui + "</div>";
    }
}

function newGame() {
    location.reload();
}

generateDeck();
shuffle();
dealCards();


