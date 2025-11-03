let logos = []; //store all dvd logos

let size = 50;
let x = size/2;
let y = 50; 
let moveX = 1.5; 
let moveY = 1.5; 
let reverseX = false; 

let r = 255;
let g = 100;
let b = 100;

// Can you use this variable to make the 
// ellipse go up or down? 
let reverseY = false; 

function changecolor() { // Changing the random color
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
  r = c[0];
  g = c[1];
  b = c[2];
} 
function setup(){
	createCanvas(windowWidth, windowHeight);
	background(255);
  noStroke();
}

function draw() {
  background(0);

  // draw and update every logo
  for (let i = logos.length - 1; i >= 0; i--) {
    let logo = logos[i];

    // move
    if (!logo.reverseX) logo.x += logo.moveX;
    else logo.x -= logo.moveX;

    if (logo.x >= width - logo.size / 2) {
      logo.reverseX = true;
      changecolor(logo);
    } else if (logo.x <= logo.size / 2) {
      logo.reverseX = false;
      changecolor(logo);
    }

    if (!logo.reverseY) logo.y += logo.moveY;
    else logo.y -= logo.moveY;

    if (logo.y >= height - logo.size / 2) {
      logo.reverseY = true;
      changecolor(logo);
    } else if (logo.y <= logo.size / 2) {
      logo.reverseY = false;
      changecolor(logo);
    }

    // calculate fade over 30 seconds (30 * 60 = 1800 frames at 60fps)
    logo.lifetime--;
    let alpha = map(logo.lifetime, 0, 1800, 0, 255);

    // draw the logo
    fill(logo.r, logo.g, logo.b, alpha);
    textSize(60);
    textFont('franklin gothic medium');
    text("DVD", logo.x, logo.y);

    fill(logo.r, logo.g, logo.b, alpha);
    ellipse(logo.x + 65, logo.y + 20, 126, 13);

    fill(0, 0, 0, alpha);
    textSize(10);
    textFont('arial bold');
    textStyle(BOLD);
    text("V I D E O", logo.x + 47, logo.y + 24);

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
    lifetime: 1800 // about 30 seconds at 60 FPS
  };
  changecolor(logo);
  logos.push(logo);
}


