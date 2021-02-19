let _x = 100;
let _y = 300;
let _r = 120;
let bubbleArray = [];


// create canvas

function setup () {
  createCanvas(600, 600);
    for (let i = 0; i < 6; i++) {
      const bubble = new Bubble(_x, _y, _r);
      bubbleArray.push(bubble);
      _x += 75;
  }
}



function draw () {
  background(249, 249, 210);
  for (let k = 0; k < 6; k++) {
    bubbleArray[k].move();
    bubbleArray[k].show();
  }
}

// circles

class Bubble {
  constructor (_x, _y, _r) {
    this.x = _x;
    this.y = _y;
    this.width = _r;
    this.height = _r;
    this.show();
    this.move();
  }

// circles movement

  move () {
    this.x = this.x + random(-3, 3);
    this.y = this.y + random(-3, 3);
  }

// circles features

  show () {
    fill(0,0,255,180)
    noStroke()
    ellipse(this.x, this.y, this.width);
  }
}