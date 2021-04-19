var polySynth;
var velocity = 1;
var baseNote = 70;
var keyStates = [0,0,0,0,0,0,0,0,0];

function setup() {
  createCanvas(windowWidth, windowHeight);
  synth = new p5.PolySynth();
}

// keys
function draw() {
	var keyWidth = width / keyStates.length;
	for (var i=0; i<keyStates.length; i++) {
		var keyColor;
		if (keyStates[i] === 1) {
			keyColor = color(255, 102, 102);
		} else {
			keyColor = color(159, 223, 191);
		}
		fill(keyColor);
        stroke(255);
        rect(i*keyWidth, 0, keyWidth, height);
	}
}

// start
function touchStarted() {
  var keyWidth = width / keyStates.length;
  var keyIndex = floor(mouseX / keyWidth);
  keyStates[keyIndex] = 1;
  var midiNoteNumber = baseNote + keyIndex;
  var freq = midiToFreq(midiNoteNumber);
  synth.noteAttack(freq, velocity, 0);
}

// stop
function touchEnded() {
  for (var i=0; i<keyStates.length; i++) {
    keyStates[i] = 0;
  }
  synth.noteRelease();
}