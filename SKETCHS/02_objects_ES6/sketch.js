// http://2ality.com/2015/02/es6-classes-final.html

var bubbles = [];

function setup() {

  // setup canvas
  createCanvas(600, 400);
  frameRate(30);

  // for loop
  for (var i = 0; i < 80; i++) {
    //add element to array
    bubbles.push(new Bubble(random(0, width), random(0, height)));
  }

}

function draw() {
  // put drawing code here
  background(255);

  // for in loop
  for (var i in bubbles) {
    bubbles[i].display();
    bubbles[i].move();
  }
}


//
class Bubble {

  //constructor
  constructor(_x, _y) {

    //propiedades
    this.posX = _x;
    this.posY = _y;
    this.radio = 10;
  }

  display() {
    fill(120);
    noStroke();
    ellipse(this.posX, this.posY, this.radio);
  }

  move() {
    var randomValues = [-1, 0, 1];
    this.posX = this.posX + random(randomValues);
    this.posY = this.posY + random(randomValues);
  }

}
