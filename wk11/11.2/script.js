function setup() {
    let canvas = createCanvas(1000, 1000);
}
    
function draw() {
//VERTICAL LINES (A)
    for(let x=500; x<750; x+=5) {
    line(x, 0, x, 500)
    }

//HORIZONTAL LINES (B)
    for(let i = 250; i <= 500; i+=5){
    line(500, i, 1000, i)
    }

//DIAGONAL LINES (C)
    for (let i=0; i<=250; i+=5) {
    line(750, i, 1000-i, 250)
    line(1000-i, 0, 1000, i)
    line(750, 250+i, 1000-i, 500)
    line(1000, 250+i, 1000-i, 250)
    }

if (mouseIsPressed) {
        stroke(51, 102, 255);
        } else {
        stroke(0);
        }
    
}

    