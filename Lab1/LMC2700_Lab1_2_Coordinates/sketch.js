// LMC 2700 Lab 1
// 2. Coordinates
// Lab page: https://gatech.instructure.com/courses/485270/assignments/2162834
// Reference: https://p5js.org/tutorials/get-started/#p5js-canvas-coordinates

// The top-left corner of the canvas is (0, 0)
// x increases to the RIGHT, y increases DOWN.
// No need to mind the code for now.

function setup() {
  createCanvas(600, 300);
  textSize(24);
}

function draw() {
  clear();
  background(0);

  // --- Colors for X and Y ---
  let xColor = color("#FFFFFF"); // orange for X
  let yColor = color("#BDA356"); // blue for Y

  // --- Vertical line at mouseX ---
  stroke(xColor);
  strokeWeight(2);
  line(mouseX, 0, mouseX, height);

  // --- Horizontal line at mouseY ---
  stroke(yColor);
  strokeWeight(2);
  line(0, mouseY, width, mouseY);

  // --- Show coordinates ---
  noStroke();
  fill(xColor);
  text("X: " + mouseX, 20, 40);

  fill(yColor);
  text("Y: " + mouseY, 110, 40);
}
