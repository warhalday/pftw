let blockX = 0; 
let blockY = 0;
let blockColor = 255;
let drawTimer;
const speed = 10;
const distance = 2;


// canvas

function setup () {
    createCanvas(500, 500);
    background('gold');
    heading = createElement('h1', ['Timer Practice'])
    heading.position(600,75);
    copy1 = createElement('h3', ['Press 1 - 9 on your keyboard']);
    copy1.position(600,150);
    copy2 = createElement('h3', ['to change the value of the square.']);
    copy2.position(600,175);
}

// square inside canvas

function drawBlock (x, y, color) {
    fill(color || 255); 
    rect(x, y, 50, 50);
}

// key trigger slash color changes

function keyTyped() {
    let keyToNumber = Number(key);
    if (isNaN(keyToNumber)){
            return;
    }

    // 1 through 9 is for key input, 1 through 255 color output

    keyToNumber = map(keyToNumber, 1, 9, 1, 255);
    console.log('converted number', keyToNumber);
    blockColor = keyToNumber;
}

window.setTimeout(() => {

    //intervals

    drawTimer = window.setInterval(() => {
        if(blockY - 50 <= height) { 
        drawBlock(blockX, blockY, blockColor);
        blockY += distance;
        } else {
            blockY = 0; 
            blockX += 50;
        }
        if(blockY - 50 > height && blockX - 50 > width) {

            //ends timer

            window.clearInterval(drawTimer);
            alert('Timer Done');
        }
    }, speed);
}, 1500);