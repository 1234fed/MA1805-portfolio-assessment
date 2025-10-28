let img;

function preload() {
  img = loadImage('https://upload.wikimedia.org/wikipedia/commons/3/3c/Shaki_waterfall.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  image(img, 0, 0, windowWidth, windowHeight);
}