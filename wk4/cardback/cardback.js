function setup() {
    createCanvas(180,250)
}
function createTile() {
    translate(0, 0);
    fill('darkblue');
    rect(0, 0, 180, 250);

//lines

    stroke('gold');
    strokeWeight(2);
    line(20, 0, 0, 20);
    line(50, 0, 0, 50);
    line(80, 0, 0, 80);
    line(110, 0, 0, 110);
    line(140, 0, 0, 140);
    line(170, 0, 0, 170);
    line(200, 0, 0, 200);
    line(230, 0, 0, 230);
    line(260, 0, 0, 260);
    line(290, 0, 0, 290);
    line(320, 0, 0, 320);
    line(350, 0, 0, 350);
    line(380, 0, 0, 380);
    line(410, 0, 0, 410);
    

    line(160, 0, 180, 20);
    line(130, 0, 180, 50);
    line(100, 0, 180, 80);
    line(70, 0, 180, 110);
    line(40, 0, 180, 140);
    line(10, 0, 180, 170);
    line(0, 20, 180, 200);
    line(0, 50, 180, 230);
    line(0, 80, 180, 260);
    line(0, 110, 180, 290);
    line(0, 140, 180, 320);
    line(0, 170, 180, 350);
    line(0, 200, 180, 380);
    line(0, 230, 180, 410);
    


//dots
    
    noStroke();
    fill('gold');
    circle(0, 20, 10);
    circle(30, 20, 20);
    circle(60, 20, 10);
    circle(90, 20, 20);
    circle(120, 20, 10);
    circle(150, 20, 20);
    circle(180, 20, 10);
    
    circle(0, 50, 20);
    circle(30, 50, 10);
    circle(60, 50, 20);
    circle(90, 50, 10);
    circle(120, 50, 20);
    circle(150, 50, 10);
    circle(180, 50, 20);
    
    circle(0, 80, 10);
    circle(30, 80, 20);
    circle(60, 80, 10);
    circle(90, 80, 20);
    circle(120, 80, 10);
    circle(150, 80, 20);
    circle(180, 80, 10);
    
    circle(0, 110, 20);
    circle(30, 110, 10);
    circle(60, 110, 20);
    circle(90, 110, 10);
    circle(120, 110, 20);
    circle(150, 110, 10);
    circle(180, 110, 20);

    circle(0, 140, 10);
    circle(30, 140, 20);
    circle(60, 140, 10);
    circle(90, 140, 20);
    circle(120, 140, 10);
    circle(150, 140, 20);
    circle(180, 140, 10);

    circle(0, 170, 20);
    circle(30, 170, 10);
    circle(60, 170, 20);
    circle(90, 170, 10);
    circle(120, 170, 20);
    circle(150, 170, 10);
    circle(180, 170, 20);

    circle(0, 200, 10);
    circle(30, 200, 20);
    circle(60, 200, 10);
    circle(90, 200, 20);
    circle(120, 200, 10);
    circle(150, 200, 20);
    circle(180, 200, 10);

    circle(0, 230, 20);
    circle(30, 230, 10);
    circle(60, 230, 20);
    circle(90, 230, 10);
    circle(120, 230, 20);
    circle(150, 230, 10);
    circle(180, 230, 20);


    noStroke();
    fill('green');
    circle(30, 20, 10);
    circle(90, 20, 10);
    circle(150, 20, 10);

    circle(0, 50, 10);
    circle(60, 50, 10);
    circle(120, 50, 10);
    circle(180, 50, 10);

    circle(30, 80, 10);
    circle(90, 80, 10);
    circle(150, 80, 10);
    
    circle(0, 110, 10);
    circle(60, 110, 10);
    circle(120, 110, 10);
    circle(180, 110, 10);
    
    circle(30, 140, 10);
    circle(90, 140, 10);
    circle(150, 140, 10);

    circle(0, 170, 10);
    circle(60, 170, 10);
    circle(120, 170, 10);
    circle(180, 170, 10);

    circle(30, 200, 10);
    circle(90, 200, 10);
    circle(150, 200, 10);

    circle(0, 230, 10);
    circle(60, 230, 10);
    circle(120, 230, 10);
    circle(180, 230, 10);
    
}



function draw() {
    createTile();
}