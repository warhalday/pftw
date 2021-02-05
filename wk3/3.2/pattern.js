function setup() {
    createCanvas(600,600);
}
function createTile(orginX, orginY, primaryColor, secondaryColor, dotColor) {
    translate(orginX, orginY);
    fill(primaryColor);
    rect(0, 0, 200, 200);

//lines

    stroke(secondaryColor);
    strokeWeight(10);
    line(12.5, 12.5, 0, 25);
    line(25, 25, 0, 50);
    line(37.5, 37.5, 0, 75);
    line(50, 50, 0, 100);
    line(62.5, 62.5, 0, 125);
    line(75, 75, 0, 150);
    line(87.5, 87.5, 0, 175);
    line(100, 100, 0, 200);
    line(112.5, 112.5, 0, 225);
    line(125, 125, 0, 250);
    line(137.5, 137.5, 0, 275);
    line(150, 150, 0, 300);
    line(162.5, 162.5, 0, 325);
    line(175, 175, 0, 350);
    line(187.5, 187.5, 0, 375);


//dots
    
    noStroke();
    fill(dotColor);
    circle(60, 20, 10);
    circle(90, 20, 10);
    circle(120, 20, 10);
    circle(150, 20, 10);
    circle(180, 20, 10);
    circle(90, 50, 10);
    circle(120, 50, 10);
    circle(150, 50, 10);
    circle(180, 50, 10);
    circle(120, 80, 10);
    circle(150, 80, 10);
    circle(180, 80, 10);
    circle(150, 110, 10);
    circle(180, 110, 10);
    circle(180, 140, 10);
}

function draw() {
    createTile(0,0, 'cyan', 'maroon', 'maroon');
    createTile(0,200, 'aquamarine', 'pink', 'pink');
    createTile(0,200, 'lightcoral', 'lemonchiffon', 'lemonchiffon');
    createTile(200, -400, 'plum', 'salmon', 'salmon');
    createTile(0, 200, 'pink', 'aquamarine', 'aquamarine');
    createTile(0, 200, 'aquamarine', 'pink', 'pink');
    createTile(200, -400, 'pink', 'aquamarine', 'aquamarine');
    createTile(0, 200, 'cyan', 'maroon', 'maroon');
    createTile(0, 200, 'plum', 'aquamarine', 'aquamarine');
    
    
}