let r, g, b;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(LEFT, CENTER);
  textFont('Franklin Gothic Medium');
}

function draw() {
  background(0);

  // Smooth color change
  r = sin(frameCount * 0.02) * 127 + 128;
  g = sin(frameCount * 0.02 + TWO_PI / 3) * 127 + 128;
  b = sin(frameCount * 0.02 + (2 * TWO_PI) / 3) * 127 + 128;

  let x = width / 2 - 80;
  let y = height / 2;

  fill(r, g, b);
  textSize(60);
  text("DVD", x, y);

  fill(r, g, b);
  ellipse(x + 65, y + 26, 126, 13);

  fill(0);
  textSize(10);
  textFont('Arial');
  textStyle(BOLD);
  text("V I D E O", x + 47, y + 27);

  fill(r, g, b);
  textSize(6);
  textFont('Franklin Gothic Medium');
  text("TM", x + 122, y + 33);
}
