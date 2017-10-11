// global variables

var bubbles = [];

function setup () {
	// setup canvas
	createCanvas(600, 400);

	//add element to array
	bubbles.push(new Bubble(100,100))


}

function draw () {
	// put drawing code here
	background(255);

	bubbles[0].display();
	bubbles[0].move();
}

// object template
function Bubble(_x, _y){
	//properties
	this.posX = _x;
	this.posY = _y;

	//sample method
	this.display  = function(){
		// draw ellipse
		fill(120);
		noStroke();
		ellipse(this.posX,this.posY,10);
	}
}

// extend template
Bubble.prototype.move = function(){
	var randomValues = [-1,0,1];
	this.posX = this.posX + random(randomValues);
	this.posY = this.posY + random(randomValues);
}
