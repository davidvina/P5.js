function setup() {

  // setup canvas
  createCanvas(600, 400);
  frameRate(90);
  background(255, 0, 0);
}

function draw() {
  // put drawing code here

  //text(mouseX + ' ' + mouseY, 20, 20);
}

// like mousePressed()
function touchStarted() {
  noStroke();
  fill(180);
  rect(mouseX, mouseY, 10, 10);
  // prevent default
  return false;
}
// like mouseDragged()
function touchMoved() {
  noStroke();
  fill(220);
  rect(mouseX, mouseY, 5, 5);
  // prevent default
  return false;
}
