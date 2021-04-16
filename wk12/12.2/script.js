let mySound;

function preload() {
    mySound = loadSound('arrested.mp3');
  }

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255, 102, 0);
}

function mousePressed() {
    if (mySound.isPlaying()) {
    mySound.isPaused();
    background(0, 0, 255);
  } else {
    mySound.play();
    background(255, 102, 0);
  }
}