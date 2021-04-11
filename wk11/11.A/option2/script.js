function setup() {
    createCanvas(1000, 600);
    strokeWeight(5)
    }
    function draw() {
    background(0, 51, 153);
    for (var y = 0; y <= height; y += 40) {
    for (var x = 0; x <= width; x += 40) {
    fill(217, 179, 255);
    ellipse(x, y, 40, 40);
    }
    }

    if (mouseIsPressed) {
        stroke(0, 51, 153);
        } else {
        stroke(217, 179, 255);
        }

}