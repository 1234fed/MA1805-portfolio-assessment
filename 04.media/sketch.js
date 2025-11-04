let img;
let pixelation = 15;
let clearRadius = 50;

function preload() {
  img = loadImage("GOLD-SQDN.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  noStroke();
}

function draw() {
  background(0);

  // --- Draw pixelated image ---
  img.loadPixels();
  for (let x = 0; x < width; x += pixelation) {
    for (let y = 0; y < height; y += pixelation) {
      // Map canvas coords to image coords so they align
      let imgX = int(map(x, 0, width, 0, img.width));
      let imgY = int(map(y, 0, height, 0, img.height));
      let i = (imgX + imgY * img.width) * 4;
      let r = img.pixels[i];
      let g = img.pixels[i + 1];
      let b = img.pixels[i + 2];
      fill(r, g, b);
      square(x, y, pixelation);
    }
  }

  // --- Draw clear area around cursor ---
  drawingContext.save();
  drawingContext.beginPath();
  drawingContext.arc(mouseX, mouseY, clearRadius, 0, TWO_PI);
  drawingContext.clip(); // only show inside circle
  image(img, 0, 0, width, height); // full-size image, aligned
  drawingContext.restore();
}
