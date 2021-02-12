let rectX = 0;
const rectHeight = 75;
let rectY;
const rectWidth = 75;
let clickCount = 0;
let speed;
function setup () {
    createCanvas(500, 500);
    rectY = random(height - rectHeight)
    speed = random(1, 3);
    heading1 = createElement('h1', ['HOW MANY TIMES CAN YOU']);
    heading1.position(30, 500);
    heading2 = createElement('h1', ['CLICK THE PINK SQUARE?']);
    heading2.position(45, 540);
}

function draw () {
    background(0, 0, 112);
    drawShape();
    rectX += speed;
    if(rectX > width) {
        noLoop;
        text('Your Score Was: ' + clickCount, 120, 475);
        textSize(30);
    }
}

function mousePressed() {
    if ((mouseX >= rectX && mouseX <= rectX + rectWidth) && (mouseY >= rectY && mouseY <= rectY + rectHeight)) {
        clickCount++;
        console.log('hit', clickCount);
    }
   
}

function drawShape () {
    fill(255, 128, 128);
    rect(rectX, rectY, rectWidth, rectHeight);
}
