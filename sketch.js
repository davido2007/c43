var hr;
var mn;
var sc;
function setup() {
  createCanvas(600,400);

  hr = hour();
  mn = minute();
  sc = second();

  angleMode(DEGREES);
}

function draw() {
  background(255,255,255);  
  scAngle = map(sc, 0, 60, 0, 360);
  scAngle = map(mn, 0, 60, 0, 360);
  scAngle = map(hr, 0, 60, 0, 360);

  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0, 0, 100, 0);
  pop();

  drawSprites();
}