console.log('sketch');

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  clear();
}

function draw() {
  
  stroke(0);
  strokeWeight(4);

  if (mouseIsPressed) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
  
}