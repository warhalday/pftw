function setup() {
    createCanvas(1000, 600);
    }
    function draw() {
    background(255, 204, 255);
    for (var y = 30; y <= height; y += 8) {
    for (var x = 0; x <= width; x += 15) {
    ellipse(x + y, y, 16 - y/10.0, 16 - y/10.0);
    stroke(255, 204, 255)
    fill(0, 128, 0)
    }
    }
    }