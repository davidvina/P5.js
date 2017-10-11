var bubbles = [];

function setup() {
	// setup canvas
	createCanvas(600, 400);
	//
	frameRate(30);

	// for loop
	for (var i = 0; i < 80; i++) {
		//add element to array
		bubbles.push(new Bubble(random(0, width), random(0, height)));
	}

	// show text on console
	//console.log(random(0,width));
}

function draw() {
	// put drawing code here
	background(255);

	// for in loop
	for (var i in bubbles) {
		bubbles[i].display();
		bubbles[i].move();
	}
	// fill(255,0,0);
	// textSize(32);
	// text(frameRate(), 10, 30);
}

// object template
function Bubble(_x, _y) {
	//properties
	this.posX = _x;
	this.posY = _y;

	//sample method
	this.display = function() {
		// draw ellipse
		fill(120);
		noStroke();
		ellipse(this.posX, this.posY, 10);
	};
}

// extend template
Bubble.prototype.move = function() {
	var randomValues = [-1, 0, 1];
	this.posX = this.posX + random(randomValues);
	this.posY = this.posY + random(randomValues);
};
