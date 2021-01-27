let grid = undefined;
let fill1 = prompt("enter a basic color name in lower case", "black");
let fill2 = prompt("enter another basic color name in lowercase", "black")

function setup() {
    createCanvas(1000, 800);
    background("#dbf3fa");
    grid = loadImage("images/100px_grid.png")
}
function draw() {
    // background(grid);

    // snow legs
    fill("#f1f1f1");
    strokeWeight(20);
    stroke("#000000");

    // bottom
    ellipse(500, 650, 400);

    // middle
    ellipse(500, 400, 300);

    // head
    ellipse(575, 200, 200);

    // head mouth
    strokeWeight(10);
    line(550, 250, 560, 255);

    // head eyes
    stroke(0);
    strokeWeight(10);
    point(525, 200);
    point(625, 230);

    // kuato
    ellipse(500, 500, 125);

    // kuato eyes
    stroke(0);
    strokeWeight(20);
    point(475, 500);
    point(525, 500);

    // kuato mouth
    noFill();
    strokeWeight(5);
    arc(500, 525, 40, 40, 0, PI);

    // kuato left arm
    stroke("brown");
    strokeWeight(10);
    line(425, 600, 450, 550);

    // kuato right arm
    line(550, 550, 575, 600);

    // kuato hat brim
    stroke("black");
    strokeWeight(10);
    line(425, 450, 575, 450);

    // kuato hat body
    strokeWeight(10);
    fill(fill1);
    quad(450, 420, 550, 420, 550, 450, 450, 450);
    
    // main left arm
    stroke("brown");
    strokeWeight(20);
    line(350, 400, 350, 650);

    // main right arm
    stroke("brown");
    strokeWeight(20);
    line(650, 400, 650, 650);

    // main hat brim
    stroke("black");
    strokeWeight(20);
    line(475, 120, 675, 120);

    // main hat body
    strokeWeight(20);
    fill(fill2);
    quad(500, 50, 650, 50, 650, 120, 500, 120);


}

