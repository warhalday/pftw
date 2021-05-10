var u;
var count;
var mods = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  u = 150;
  var highCount = (height/150)+2;
  var wideCount = (width/150)+2;
  count = int(highCount * wideCount);
  
  var index = 0;
  for (var xc = 0; xc < wideCount; xc++) {
    for (var yc = 0; yc < highCount; yc++) {
      mods[index++] = new Module(int(xc)*u,int(yc)*u);
    }
   }
}

function draw() {
  //background(200);
  noStroke();
  for (var i = 0; i <= count; i++) {
    mods[i].draw2();
    mods[i].Over();
  }
}

function mousePressed() {
  for (var i = 0; i <= count; i++) {
    mods[i].Pressed();
  }
}

function Module(_x, _y) {
  this.x = _x;
  this.y = _y;
  this.a = 0;
  this.b = false;
  this.c = 200;
  this.isOverRectangle = false;
  this.k = 2;
  this.s = 75;
  this.r = 0;
  this.c1 = 255;
  this.c2 = 0;
}

Module.prototype.Pressed = function() {
    if (mouseX>(this.x)-(this.s) && mouseX<(this.x)+(this.s) && mouseY>(this.y)-(this.s) && mouseY<(this.y)+(this.s)){
      this.k = this.k+1;
      if (this.k === 5) {
        this.k = 0;
      }
    }
}

Module.prototype.Over = function() {
  if (mouseX>(this.x)-(this.s) && mouseX<(this.x)+(this.s) && mouseY>(this.y)-(this.s) && mouseY<(this.y)+(this.s)){
    this.isOverRectangle = true;
  } else {
    this.isOverRectangle = false;
  }
}


Module.prototype.draw2 = function() {
  push();
  translate(this.x, this.y);
  rectMode(CENTER);
  rotate(this.r);
  
  if (this.k === 0){
    fill(this.c1);
    rect(0,0,this.s*2,this.s*2);
    fill(this.c2);
    triangle(-75,-75,75,75,-75,75);

    //-60
    ellipse(-40, -60, 10);
    ellipse(-20, -60, 10);
    ellipse(0, -60, 10);
    ellipse(20, -60, 10);
    ellipse(40, -60, 10);
    ellipse(60, -60, 10);
    //-40
    ellipse(-20, -40, 10);
    ellipse(0, -40, 10);
    ellipse(20, -40, 10);
    ellipse(40, -40, 10);
    ellipse(60, -40, 10);
    //-20
    ellipse(0, -20, 10);
    ellipse(20, -20, 10);
    ellipse(40, -20, 10);
    ellipse(60, -20, 10);
    //0
    ellipse(20, 0, 10);
    ellipse(40, 0, 10);
    ellipse(60, 0, 10);
    //20
    ellipse(40, 20, 10);
    ellipse(60, 20, 10);
    //40
    ellipse(60, 40, 10);
    
    

  }
  if (this.k === 1){
    fill(this.c1);
    rect(0,0,this.s*2,this.s*2);
    fill(this.c2);
    triangle(-75,75,-75,-75,75,-75);
    //-40
    ellipse(60, -40, 10);
    //-20
    ellipse(40, -20, 10);
    ellipse(60, -20, 10);
    //0
    ellipse(20, 0, 10);
    ellipse(40, 0, 10);
    ellipse(60, 0, 10);
    //20
    ellipse(0, 20, 10);
    ellipse(20, 20, 10);
    ellipse(40, 20, 10);
    ellipse(60, 20, 10);
    //40
    ellipse(-20, 40, 10);
    ellipse(0, 40, 10);
    ellipse(20, 40, 10);
    ellipse(40, 40, 10);
    ellipse(60, 40, 10);
    //60
    ellipse(-40, 60, 10);
    ellipse(-20, 60, 10);
    ellipse(0, 60, 10);
    ellipse(20, 60, 10);
    ellipse(40, 60, 10);
    ellipse(60, 60, 10);

  }
  if (this.k === 2){
    fill(this.c1);
    rect(0,0,this.s*2,this.s*2);
    fill(this.c2);
    triangle(75,75,-75,-75,75,-75);
    //-40
    ellipse(-60, -40, 10);
    //-20
    ellipse(-60, -20, 10);
    ellipse(-40, -20, 10);
    //0
    ellipse(-60, 0, 10);
    ellipse(-40, 0, 10);
    ellipse(-20, 0, 10);
    //20
    ellipse(-60, 20, 10);
    ellipse(-40, 20, 10);
    ellipse(-20, 20, 10);
    ellipse(0, 20, 10);
    //40
    ellipse(-60, 40, 10);
    ellipse(-40, 40, 10);
    ellipse(-20, 40, 10);
    ellipse(0, 40, 10);
    ellipse(20, 40, 10);
    //60
    ellipse(-60, 60, 10);
    ellipse(-40, 60, 10);
    ellipse(-20, 60, 10);
    ellipse(0, 60, 10);
    ellipse(20, 60, 10);
    ellipse(40, 60, 10);
    
  }
  if (this.k === 3){
    fill(this.c1);
    rect(0,0,this.s*2,this.s*2);
    fill(this.c2);
    triangle(-75,75,75,75,75,-75);
    //-60
    ellipse(-60, -60, 10);
    ellipse(-40, -60, 10);
    ellipse(-20, -60, 10);
    ellipse(0, -60, 10);
    ellipse(20, -60, 10);
    ellipse(40, -60, 10);
    //-40
    ellipse(-60, -40, 10);
    ellipse(-40, -40, 10);
    ellipse(-20, -40, 10);
    ellipse(0, -40, 10);
    ellipse(20, -40, 10);
    //-20
    ellipse(-60, -20, 10);
    ellipse(-40, -20, 10);
    ellipse(-20, -20, 10);
    ellipse(0, -20, 10);
    //0
    ellipse(-60, 0, 10);
    ellipse(-40, 0, 10);
    ellipse(-20, 0, 10);
    //20
    ellipse(-60, 20, 10);
    ellipse(-40, 20, 10);
    //40
    ellipse(-60, 40, 10);
  }
  if (this.k === 4){
    fill(255);
    rect(0,0,this.s*2,this.s*2);

    fill(0)
    //-60
    ellipse(-60, -60, 10);
    ellipse(-40, -60, 10);
    ellipse(-20, -60, 10);
    ellipse(0, -60, 10);
    ellipse(20, -60, 10);
    ellipse(40, -60, 10);
    ellipse(60, -60, 10);

    //-40
    ellipse(-60, -40, 10);
    ellipse(-40, -40, 10);
    ellipse(-20, -40, 10);
    ellipse(0, -40, 10);
    ellipse(20, -40, 10);
    ellipse(40, -40, 10);
    ellipse(60, -40, 10);

    //-20
    ellipse(-60, -20, 10);
    ellipse(-40, -20, 10);
    ellipse(-20, -20, 10);
    ellipse(0, -20, 10);
    ellipse(20, -20, 10);
    ellipse(40, -20, 10);
    ellipse(60, -20, 10);

    //0
    ellipse(-60, 0, 10);
    ellipse(-40, 0, 10);
    ellipse(-20, 0, 10);
    ellipse(0, 0, 10);
    ellipse(20, 0, 10);
    ellipse(40, 0, 10);
    ellipse(60, 0, 10);
    
    //20
    ellipse(-60, 20, 10);
    ellipse(-40, 20, 10);
    ellipse(-20, 20, 10);
    ellipse(0, 20, 10);
    ellipse(20, 20, 10);
    ellipse(40, 20, 10);
    ellipse(60, 20, 10);

    //40
    ellipse(-60, 40, 10);
    ellipse(-40, 40, 10);
    ellipse(-20, 40, 10);
    ellipse(0, 40, 10);
    ellipse(20, 40, 10);
    ellipse(40, 40, 10);
    ellipse(60, 40, 10);

    //60
    ellipse(-60, 60, 10);
    ellipse(-40, 60, 10);
    ellipse(-20, 60, 10);
    ellipse(0, 60, 10);
    ellipse(20, 60, 10);
    ellipse(40, 60, 10);
    ellipse(60, 60, 10);
  }
  
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}