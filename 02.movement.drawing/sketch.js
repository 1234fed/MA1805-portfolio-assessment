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

function setup(){
	createCanvas(windowWidth, windowHeight);
	background(255);
  noStroke();
}

function draw(){
  background(0); 

  fill(r, g, b);
  textSize(60);
  textFont('franklin gothic medium');
  text("DVD", x, y);

  fill(r, g, b);        // same colour as text
  ellipse(x + 65, y + 20, 126, 13);  // small ellipse just under the text

  fill(0, 0, 0);
  textSize(10);
  textFont('arial bold');
  textStyle(BOLD);
  text("V I D E O", x + 47, y + 24);  // wording on the ellipse
  
  fill(r, g, b);
  textSize(6);
  textFont('franklin gothic medium');
  text("TM", x + 122, y + 33);  // trademark text


  // Determine if we should add or subtract
  // to add or subtract from the x position
  if(reverseX == false){
    x += moveX;
  }else{
    x -= moveX;
  }

  // Detect if we hit the side
  if(x >= width-(size/2)){
    reverseX = true;  
    changecolor();
  }else if(x <= 0+(size/2)){
    reverseX = false; 
    changecolor();
  }

    // Determine if we should add or subtract
  // to add or subtract from the x position
  if(reverseY == false){
    y += moveY;
  }else{
    y -= moveY;
  }

  // Detect if we hit the side
  if(y >= height-(size/2)){
    reverseY = true; 
    changecolor();
  }else if(y <= 0+(size/2)){
    reverseY = false; 
    changecolor();
  }

  // Changing the random color
function changecolor() {
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
}