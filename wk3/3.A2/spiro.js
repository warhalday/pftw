let rotateBy = 10;
function setup() {
    createCanvas(600,600);
    background(0);
    angleMode(DEGREES);
    heading = createElement('h1', ['RADIAL FLYER'])
    heading.position(700,100);
    copy1 = createElement('h3', ['Click to pause']);
    copy1.position(700,200);
    copy2 = createElement('h3', ['Double Click to restart']);
    copy2.position(700,240);
    copy3 = createElement('h3', ['Move mouse to change value']);
    copy3.position(700,280);

}

let color = 255;

function makeArm(rotateBy) {
    let alt = Math.round(rotateBy / 360);
    fill(255, 215, 0, 130);
    stroke(255, 99, 71, 20);
    strokeWeight(50)
    ellipse(0, 0, 200 / (alt +20, alt - 50));
    fill(0, 255, 255, 171);
    ellipse(100, 100, 200 / (alt +20, alt - 50));

    // points
    let a = createVector(alt + 20, alt - 20);
    stroke(225, 0, 225, 63); //magenta
    point(a);
    let b = createVector(alt +30, alt - 40);
    stroke(0, 0, 139, 127); // dark blue
    point(b);
    stroke(240,128,128,63); //lightcoral
    point(createVector(100, 10));
    stroke(255, 215, 0, 50); //yellow
    point(createVector(200, 10));
    stroke(128,0,0,20); //maroon
    point(createVector(300, 10));
    stroke(color, 191); //cyan
    point(createVector(alt + 90, alt - 100));
    
}


function draw() {
    translate(300, 300);
    rotate(rotateBy);
    makeArm(rotateBy);
    rotateBy += 50;
}

function mousePressed() {
    noLoop();
}

function doubleClicked() {
    loop();
}

function mouseMoved() {
    color = color + 50;
    if (color > 255) {
        color = 0;
    }
}
