
let player = {
    name: "per",
    chips: 200,
    sayHello: function(){
        console.log("hey,hey,hey")
    }
}
 //array that represents a deck of cards.
let cards = []
//tracks the sum of cards, wether they have blackjack, alive or have a message.
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el") //element to display mesaage
let sumEl = document.getElementById("sum-el")         //element to display the sum of player's cards.
//let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")     //element to display the player's cards.
let playerEl = document.getElementById("player-el")   //elements to display player's information.


playerEl.textContent = player.name +  ": R" + player.chips //updates the playerEl's content to display the player's name and chips

//generates a random card value
function getRandomCard() {
    let randomNumber = Math.floor(Math.random()*13) + 1//generates a random number between 1 and 13
    if (randomNumber > 10) { //face cards have a value of 10, so return 10
        return 10
    } else if (randomNumber === 1) { //if the number is 1, it represents Ace, return 11
        return 11    
    } else { //for numbers between 2 and 10, return the number itself
        return randomNumber
    }
}

function startGame(){ //function to start the game and set the player alive(on)
    isAlive = true
    //to get two random cards for the player
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    //store the two cards in the cards array
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard // calculate the sum of the two cards.
    renderGame()
}

//the renderGame fuction is called to update the display for player cards
function renderGame() {
    cardsEl.textContent = "Cards : " 
    for (let i = 0; i < cards.length; i++) { //loop through the cards array and add each card value to the display
        cardsEl.textContent += cards[i] + " "
    }
    //check value of the sum to determine the message to be displayed
    sumEl.textContent = "sum : " + sum
    if (sum <= 20) {
        message = "Another card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message  //set the content of the element messageEL to determine the message  
}
//function to draw a new card 
function newCard(){
    //if alive and doesn't have black
if (isAlive === true && hasBlackJack === false){ 
    let card = getRandomCard()//get a new random card
    sum += card //add the new card value to the sum
    cards.push(card)//add the new card to the cards array
    renderGame()// call the rendergame function to update the display.
 }
}

//I found it difficult to define sumEl.textContext in the renderGame function. I was stuck with my start game button giving me a sumEl.textContent working. 
//I also found the onclick of the start buttom was 