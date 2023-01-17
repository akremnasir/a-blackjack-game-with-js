const cardEl = document.getElementById("card-el")
const sumEl = document.getElementById("sum-el")
const notify = document.getElementById("notify")
const playerEl = document.getElementById("player-el")
let playerName = document.getElementById("player-name").value
let cards = []
let isAlive = false
let hasBlackJack = false
let nameEntered = false


function getRandomNum(){
    let randomNum = Math.floor(Math.random() * 13) + 1
    if(randomNum === 1){
        randomNum = 11
       return randomNum 
    }
    else if(randomNum === 11 || randomNum === 12 || randomNum ===13){
        randomNum = 10
        return randomNum 
    }
    else{
        return randomNum
    }
    
}

function startgame(){
    isAlive = true
    BlackJack = false
    let card1 = getRandomNum()
    let card2 = getRandomNum()
    cards = [card1, card2]
    total = card1 + card2

    if(nameEntered){
        rendergame()
    }
    
    
}
let player = {
    name: playerName,
    chips: 145
}

function rendergame(){
    isAlive = true
    cardEl.textContent = "cards: "
    for(let i = 0; i < cards.length; i++){
        cardEl.textContent += cards[i] + " " 
    }
    let total = 0
    for(let i = 0; i < cards.length; i++){
        total += cards[i]
    }
    sumEl.textContent = "sum: " + total

    if(total === 21){
        notify.textContent = "you win!"
        hasBlackJack = true
        player.chips += 5
        enterName()
    }
    else if(total < 21){
        notify.textContent = "still on the game your choise?"
        isAlive = true
    }
    else{
        notify.textContent = "you lose!"
        isAlive = false
        player.chips -= 1
        enterName()
        console.log(player.chips)
    }
   
    
}


function newcard(){
    if(isAlive && nameEntered){
        let newCard = getRandomNum()
        cards.push(newCard)
        rendergame()
    }
     
}

function enterName(){
    nameEntered = true
    playerEl.textContent = player.name + " : $" + player.chips

    playerName = ""
}







 

