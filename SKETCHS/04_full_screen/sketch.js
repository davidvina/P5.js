function setup() {
  createCanvas(windowWidth, windowHeight
  );
  // setup canvas
}

function draw() {
  background(160);
  fill(0);
  text('displayWidth: ' + displayWidth, 20, 20);
  text('displayHeight: ' + displayHeight, 20, 40);
  text('windowWidth: ' + windowWidth, 20, 60);
  text('windowHeight: ' + windowHeight, 20, 80);
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

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
