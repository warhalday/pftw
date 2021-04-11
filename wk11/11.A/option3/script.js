function setup() {
    createCanvas(1000, 600);
    strokeWeight(4);
    }
function draw() {
    background(212, 212, 170);
    for (var i = 20; i < 900; i += 8) {
    line(i, 40, i + 60, 180);
    }
    for (var i = 20; i < 900; i += 8) {
    line(i, 300, i + 60, 180);
    }
    for (var i = 20; i < 900; i += 8) {
    line(i, 300, i + 60, 420);
    }
    for (var i = 20; i < 900; i += 8) {
    line(i, 550, i + 60, 420);
}
}
    