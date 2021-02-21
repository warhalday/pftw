const DOWN = 'down';
const UP = 'up';
let startingX = 250;
let startingY = 125;
let cards = [];
const gameState = {
    totalPairs: 9,
    flippedCards: [],
    numMatched: 0,
    attempts: 0,
    waiting: false
};

// card images array
let cardFaceArray = [];
let cardBack;
function preload() {

    // card back
    cardBack = loadImage('images/cardback.png');

    // card face
    cardFaceArray = [
        loadImage('images/ca.png'),
        loadImage('images/adapt.png'),
        loadImage('images/fo.png'),
        loadImage('images/gr.png'),
        loadImage('images/mandy.png'),
        loadImage('images/ms.png'),
        loadImage('images/ra.png'),
        loadImage('images/se.png'),
        loadImage('images/vk.png'),
    ]
}

function setup() {
    createCanvas(1200, 800);
    let selectedFaces = [];
    for (let z = 0; z < 9; z++) {
        const randomIdx = floor(random(cardFaceArray.length));
        const face = cardFaceArray[randomIdx];
        selectedFaces.push(face);
        selectedFaces.push(face);

        // remove the used cardface 
        cardFaceArray.splice(randomIdx, 1);
    }
    selectedFaces = shuffleArray(selectedFaces);
    for(let j = 0; j < 3; j++) {
        for (let i = 0; i < 6; i++) {
            const faceImage = selectedFaces.pop();
        cards.push(new Card(startingX, startingY, faceImage));
        startingX += 150;
        }
    startingY += 200;
    startingX = 250;
    }
}

// game win
function draw () {
    background(0, 102, 0);
    if (gameState.numMatched === gameState.totalPairs) {
        fill('gold');
        noStroke();
        textSize(50);
        text('YOU', 25, 165);
        text('JUST', 25, 240);
        text('WON', 25, 315);
        text('!!!!!!!!!!!!!!', 25, 615);
        noLoop();
    }
    for (let k = 0; k < cards.length; k++) {
        if(!cards[k].isMatch) {
            cards[k].face = DOWN;
        }
        cards[k].show();
    }

    // matches, attmepts, title
    noLoop();
    gameState.flippedCards.length = 0;
    gameState.waiting = false;
    fill (255);
    textSize(20);
    text('Attemps: ' + gameState.attempts, 25, 700);
    text('Matches: ' + gameState.numMatched, 25, 670);
    fill('#fffff');
    textSize(55);
    text('THE', 25, 390);
    text('CAGE', 25, 465);
    text('MATCH', 25, 540);
}

function mousePressed() {
    if (gameState.waiting) {
        return;
    }
    for (let k = 0; k < cards.length; k++) {

        // first check flipped cards length then trigger flip
        if (gameState.flippedCards.length < 2 && cards[k].didHit(mouseX, mouseY)) {
            console.log('flipped', cards[k]);
            gameState.flippedCards.push(cards[k]);
        }
    }
    if (gameState.flippedCards.length === 2) {
        gameState.attempts++;
        if (gameState.flippedCards[0].cardFaceImg === gameState.flippedCards[1].cardFaceImg) {

            // mark cards as flipped
                gameState.flippedCards[0].isMatch = true;
                gameState.flippedCards[1].isMatch = true;

            // empty the flipped cards array
                gameState.flippedCards.length = 0;

            // increment the score
                gameState.numMatched++;
                loop();
        } else {
            gameState.waiting = true;
            const loopTimeout = window.setTimeout(() => {
                loop();
                window.clearTimeout(loopTimeout);
            }, 1000)
        }
    }
}

// card
class Card {
    constructor (x, y, cardFaceImg) {
        this.x = x;
        this.y = y;
        this.width = 125;
        this.height = 175;
        this.face = DOWN;
        this.cardFaceImg = cardFaceImg;
        this.isMatch = false;
        this.show();
    }
show () {
    if(this.face === UP || this.isMatch) {
        rect(this.x, this.y, this.width, this.height, 5);
        image(this.cardFaceImg, this.x, this.y);

    } else {
        rect(this.x, this.y, this.width, this.height, 5);
        image(cardBack, this.x, this.y);
        }
    }

didHit (mouseX, mouseY) {
    if (mouseX >= this.x && mouseX <= this.x + this.width && mouseY >= this.y && mouseY <= this.y + this.height) {
        this.flip();
        return true;
    } else {
        return false;
        }
    }  

    flip () {
        if (this.face === DOWN) {
            this.face = UP;
        } else {
            this.face = DOWN;
        }
        this.show();
    }
}   

// shuffle cards
function shuffleArray (array) {
    let counter = array.length;
    while (counter > 0) {

        // pick random index
        const idx = Math.floor(Math.random() * counter);

        // decrease counter by 1
        counter--;
        //swap last element

        const temp = array[counter];
        array[counter] = array[idx];
        array[idx] = temp;
    }
    return array;
}