const cardEl = document.getElementById("card-el");
const sumEl = document.getElementById("sum-el");
const notify = document.getElementById("notify");
const playerEl = document.getElementById("player-el");
const nameInput = document.getElementById("name");

let cards = [];
let isAlive = false;
let hasBlackJack = false;
let nameEntered = false;

let player = {
    name: "Enter your name",
    chips: 145
};

function bodyLoad() {
    alert(
        "-----------------------------Game Rules----------------------------------\n" +
        "1. First, you need to enter your name in the specified place.\n" +
        "2. When you play the game, you must score a sum of 21 to win.\n" +
        "3. If you win, you will receive $5. If your cards' sum is less than 21, you can draw a new card.\n" +
        "4. If the sum of your cards exceeds 21, you lose the game and lose $1.\n" +
        "5. To draw another card, click 'Start Game'."
    );
}

function updateName() {
    playerEl.innerHTML = `${player.name}: $${player.chips}`;
    playerEl.onclick = changeName;
}

function enterName() {
    const enteredName = document.getElementById("player-name").value.trim();
    if (!enteredName) {
        alert("Please enter your name first!");
        return;
    }
    nameEntered = true;
    player.name = enteredName;
    nameInput.style.display = "none";
    updateName();
}

function getRandomNum() {
    let randomNum = Math.floor(Math.random() * 13) + 1;
    if (randomNum === 1) {
        return 11;
    } else if (randomNum > 10) {
        return 10;
    }
    return randomNum;
}

function startGame() {
    if (!nameEntered) {
        alert("Please enter your name first!");
        return;
    }
    player.chips -= 1;
    isAlive = true;
    hasBlackJack = false;
    cards = [getRandomNum(), getRandomNum()];
    renderGame();
}

function renderGame() {
    cardEl.textContent = "Cards: " + cards.join(" ");
    let total = cards.reduce((acc, card) => acc + card, 0);
    sumEl.textContent = "Sum: " + total;

    if (total === 21) {
        notify.textContent = "You win!";
        hasBlackJack = true;
        player.chips += 5;
    } else if (total < 21) {
        notify.textContent = "Still in the game. Your choice?";
        isAlive = true;
    } else {
        notify.textContent = "You lose!";
        isAlive = false;
    }
    updateName();
}

function newCard() {
    if (isAlive && nameEntered) {
        cards.push(getRandomNum());
        renderGame();
    } else {
        alert("Please make sure you've entered your name and started the game.");
    }
}

function changeName() {
    const newName = prompt("Change name \n New name: ").trim();
    if (newName) {
        player.name = newName;
        updateName();
    }
}











 

