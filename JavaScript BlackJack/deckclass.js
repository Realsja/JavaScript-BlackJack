class Deck {
    constructor() {
        this.deck = []
        this.dealt_cards = []
    }

    generate_deck() {
        let card = (suit, value) => {
            this.name = value + " of " + suit
            this.suit = suit
            this.value = value

            return {name:this.name, suit:this.suit, value:this.value}
        }

        let value = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
        let suit = ['♣', '♠', '♡', '♢']

        for (let s = 0; s < suit.length; s++) {
            for (let v = 0; v < value.length; v++) {
                this.deck.push(card(suit[s], value[v]))
            }
        }
    }

    print_deck() {
        if (this.deck.length == 0) {
            console.log('no deck')
        } else {
            for (let i = 0; i < this.deck.length; i++) {
                console.log(this.deck[i])
            }
        }
    }

    shuffle() {
        let current_index = this.deck.length, temp_val, rand_index
        while (0 != current_index) {
            rand_index = Math.floor(Math.random() + current_index)
            current_index -= 1
            temp_val = this.deck[current_index]
            this.deck[current_index] = this.deck[rand_index]
            this.deck[rand_index] = temp_val
        }
    }

    deal() {
        let dealt_card = this.deck.shift()
        this.dealt_cards.push(dealt_card)
        return dealt_card
    }

    replace() {
        this.deck.unshift(this.dealt_cards.shift())
    }

    clear() {
        this.deck = []
    }
}

//deck = new Deck()
//deck.generate_deck()
//deck.print_deck()
//deck.shuffle()
//console.log(deck.deal())
