let logos = []; // store all dvd logos

let size = 50;
let moveX = 1.5;
let moveY = 1.5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  noStroke();
}

function draw() {
  background(0);

  // draw and update every logo
  for (let i = logos.length - 1; i >= 0; i--) {
    let logo = logos[i];

    // move left/right
    if (!logo.reverseX) logo.x += logo.moveX;
    else logo.x -= logo.moveX;

    if (logo.x >= width - logo.size / 2) {
      logo.reverseX = true;
      changecolor(logo);
    } else if (logo.x <= logo.size / 2) {
      logo.reverseX = false;
      changecolor(logo);
    }

    // move up/down
    if (!logo.reverseY) logo.y += logo.moveY;
    else logo.y -= logo.moveY;

    if (logo.y >= height - logo.size / 2) {
      logo.reverseY = true;
      changecolor(logo);
    } else if (logo.y <= logo.size / 2) {
      logo.reverseY = false;
      changecolor(logo);
    }

    // fade over 30 seconds (≈1800 frames at 60fps)
    logo.lifetime--;
    let alpha = map(logo.lifetime, 0, 1800, 0, 255);

    // draw DVD text
    fill(logo.r, logo.g, logo.b, alpha);
    textSize(60);
    textFont('franklin gothic medium');
    text("DVD", logo.x, logo.y);

    // ellipse under text
    fill(logo.r, logo.g, logo.b, alpha);
    ellipse(logo.x + 65, logo.y + 20, 126, 13);

    // “VIDEO” text on ellipse
    fill(0, 0, 0, alpha);
    textSize(10);
    textFont('arial bold');
    textStyle(BOLD);
    text("V I D E O", logo.x + 47, logo.y + 24);

    // “TM” text
    fill(logo.r, logo.g, logo.b, alpha);
    textSize(6);
    textFont('franklin gothic medium');
    text("TM", logo.x + 122, logo.y + 33);

    // remove logo if fully faded
    if (logo.lifetime <= 0) {
      logos.splice(i, 1);
    }
  }
}

function mousePressed() {
  let logo = {
    x: mouseX,
    y: mouseY,
    size: 50,
    moveX: random(1, 3),
    moveY: random(1, 3),
    reverseX: random([true, false]),
    reverseY: random([true, false]),
    r: 255,
    g: 255,
    b: 255,
    lifetime: 1800 // about 30 seconds
  };
  changecolor(logo);
  logos.push(logo);
}

function changecolor(logo) {
  // pick from bright, saturated DVD-style colours (no black)
  let colors = [
    [255, 0, 0],     // red
    [0, 255, 0],     // green
    [0, 0, 255],     // blue
    [255, 255, 0],   // yellow
    [255, 0, 255],   // magenta
    [0, 255, 255],   // cyan
    [255, 255, 255]  // white
  ];

  let c = random(colors);
  logo.r = c[0];
  logo.g = c[1];
  logo.b = c[2];
}
