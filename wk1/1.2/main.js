function setup() {
  createCanvas(1500, 1000);
}
function draw() {
    if (mouseIsPressed) {
      fill(150, 150, 255);
      noStroke();
      blendMode(OVERLAY);
    } else {
      noFill();
      noStroke();
    }
    circle(mouseX, mouseY, 50, 50);
}