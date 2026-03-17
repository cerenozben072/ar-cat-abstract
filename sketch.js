// I got help from chatgpt for randomness

const gfxs = [];
let catColor;

const markers = [60, 61];

function setup() {
  markers.forEach((id) => {
    let gfx = createARGraphics(600, 600, P2D, { scale: 3, markerId: id });
    gfxs.push(gfx);
  });

  p5SimpleAREnableGesture(true);
  catColor = randomColor();
}

function draw() {
  gfxs.forEach((gfx) => {
    gfx.clear();

    // cat
    gfx.fill(catColor);
    gfx.noStroke();

    // head
    gfx.ellipse(300, 320, 220, 200);

    // ears
    gfx.triangle(230, 250, 180, 170, 260, 190);
    gfx.triangle(370, 250, 340, 190, 420, 170);

    // eyes
    gfx.fill(30);
    gfx.ellipse(260, 320, 18, 18);
    gfx.ellipse(340, 320, 18, 18);

    // nose
    gfx.triangle(300, 345, 290, 360, 310, 360);

    // whiskers
    gfx.stroke(30);
    gfx.strokeWeight(4);

    // left
    gfx.line(240, 370, 170, 360);
    gfx.line(240, 372, 170, 372);
    gfx.line(240, 374, 170, 384);

    // right
    gfx.line(360, 370, 430, 360);
    gfx.line(360, 372, 430, 372);
    gfx.line(360, 374, 430, 384);
  });
}

// mouse click
function mousePressed() {
  catColor = randomColor();
}

// touch (telefon için)
function touchStarted() {
  catColor = randomColor();
}

function randomColor() {
  return color(random(255), random(255), random(255));
}
