// I got help from chatgpt for randomness
let catColor;

function setup() {
   createARCanvas(600, 600,P2D, {scale: 30,markerId:60});


  catColor = randomColor();
}

function draw() {
  background(240);

  // cat
  fill(catColor);
  noStroke();

  // head
  ellipse(300, 320, 220, 200);

  // ears
  triangle(230, 250, 180, 170, 260, 190);
  triangle(370, 250, 340, 190, 420, 170);

  // eyes
  fill(30);
  ellipse(260, 320, 18, 18);
  ellipse(340, 320, 18, 18);

  // nose
  triangle(300, 345, 290, 360, 310, 360);

  // whiskers
  stroke(30);
  strokeWeight(4);

  // left
  line(240, 370, 170, 360);
  line(240, 372, 170, 372);
  line(240, 374, 170, 384);

  // right
  line(360, 370, 430, 360);
  line(360, 372, 430, 372);
  line(360, 374, 430, 384);
}
// when pressed color changes
function mousePressed() {
  catColor = randomColor();
}

function randomColor() {
  return color(random(255), random(255), random(255));
}
