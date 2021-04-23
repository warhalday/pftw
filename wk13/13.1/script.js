let xpos = 0;
let ypos = 0;

function setup() {
    createCanvas(700, 700);
}
function draw() {
    background(242, 230, 217);

// yellow 1

    fill(255, 255, 0);
    noStroke();
    ellipse(
        275+sin(xpos)*-150,
        275+sin(ypos)*-150,
        100, 100);
    ellipse(
        325+sin(xpos)*100,
        325+sin(ypos)*100,
        100, 100);
    ellipse(
        425+sin(xpos)*200,
        425+sin(ypos)*200,
        100, 100);

    ellipse(
        0+sin(xpos)*-200,
        350+sin(ypos)*-200,
        200, 200);
    ellipse(
        350+sin(xpos)*-200,
        0+sin(ypos)*-200,
        200, 200);
    ellipse(
        350+sin(xpos)*200,
        700+sin(ypos)*200,
        200, 200);
    ellipse(
        700+sin(xpos)*200,
        350+sin(ypos)*200,
        200, 200);

// yellow 2

    ellipse(
        0+sin(xpos)*100,
        0+sin(ypos)*100,
        200, 200);
    ellipse(
        0+sin(xpos)*100,
        700+sin(ypos)*100,
        200, 200);
    ellipse(
        700+sin(xpos)*100,
        0+sin(ypos)*100,
        200, 200);
    ellipse(
        700+sin(xpos)*100,
        700+sin(ypos)*100,
        200, 200);

// yellow 3
    fill(0, 0, 0, 25);
    noStroke();
    ellipse(
        350+sin(xpos)*500,
        350+sin(ypos)*500,
        200, 200);
    ellipse(
        350+sin(xpos)*-500,
        350+sin(ypos)*-500,
        200, 200);


// magenta 1

    fill(255, 0, 255, 80);
    noStroke();
    ellipse(
        100+sin(xpos)*-150,
        100+sin(ypos)*-150,
        100, 100);
    ellipse(
        175+sin(xpos)*100,
        175+sin(ypos)*100,
        100, 100);
    ellipse(
        300+sin(xpos)*200,
        300+sin(ypos)*200,
        100, 100);

// magenta 2

    ellipse(
        400+sin(xpos)*-150,
        400+sin(ypos)*-150,
        100, 100);
    ellipse(
        425+sin(xpos)*100,
        425+sin(ypos)*100,
        100, 100);
    ellipse(
        600+sin(xpos)*200,
        600+sin(ypos)*200,
        100, 100);

// magenta 3

    ellipse(
        200+sin(xpos)*-50,
        500+sin(ypos)*-50,
        200, 200);
    ellipse(
        100+sin(xpos)*-150,
        600+sin(ypos)*-150,
        100, 100);
    ellipse(
        175+sin(xpos)*100,
        675+sin(ypos)*100,
        100, 100);
    ellipse(
        300+sin(xpos)*200,
        500+sin(ypos)*200,
        100, 100);

// magenta 4

    ellipse(
        500+sin(xpos)*-50,
        200+sin(ypos)*-50,
        200, 200);
    ellipse(
        600+sin(xpos)*-150,
        100+sin(ypos)*-150,
        100, 100);
    ellipse(
        675+sin(xpos)*100,
        175+sin(ypos)*100,
        100, 100);
    ellipse(
        500+sin(xpos)*200,
        300+sin(ypos)*200,
        100, 100);

// cyan 1

    fill(0, 255, 255, 80);
    noStroke();
    ellipse(
        200+sin(xpos)*-50,
        200+sin(ypos)*-50,
        200, 200);
    ellipse(
        500+sin(xpos)*-50,
        500+sin(ypos)*-50,
        200, 200);



    

        
    xpos += 0.05;
    ypos += 0.04;

  
}
