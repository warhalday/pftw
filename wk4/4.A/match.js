let startingX = 250;
let startingY = 400;
const rectWidth = 180;
const rectHeight = 250;
const myRect = [];
let startingId = 0;

function setup () {
  createCanvas(1600, 1600);
  background(0);
  for (let k = 0; k < 3; k++) {
    for (let i = 0; i < 4; i++) {
      rect(startingX, startingY, rectWidth, rectHeight);
      myRect.push({ x: startingX, y: startingY, id: startingId });
      startingX += 225;
      startingId++;
    }
    startingY += 300;
    startingX = 250;
  }

  console.log(myRect);
}

function mousePressed () {
  for (let j = 0; j < myRect.length; j++) {
    if (mouseX >= myRect[j].x && mouseX < myRect[j].x + rectWidth && mouseY > myRect[j].y && mouseY < myRect[j].y + rectHeight) {
      console.log('rect has been hit', myRect[j].id);
    }
  }
}

// function before adding in the array

// function mousePressed () {
//   for (let j = 0; j < myRect.length; j++) {
//     if (mouseX >= startingX && mouseX < startingX + rectWidth && mouseY > startingY && mouseY < startingY + rectHeight) {
//       console.log('rect has been hit', myRect[j].id);
//     }
//   }
// }