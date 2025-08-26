// LMC 2700 Lab 1
// 6. In-class exercise: Draw your initials with basic shapes and lines
// Lab page: https://gatech.instructure.com/courses/485270/assignments/2162834
// Refernce: https://p5js.org/reference/#Shape

function setup() {
  createCanvas(600, 400);
  background(color("#607D8BD6"));
  // ----- STYLING -----
  stroke("#FFC107"); // Set line (stroke) color
  strokeWeight(30); // Line thickness
  noFill(); // Shapes are outlines only (no inside color)
}

function draw() {
  // ----- DRAW THE LETTER "S" -----
  // arc(x, y, width, height, start, stop, mode)
  angleMode(DEGREES);
  // Top part of S
  arc(200, 160, 200, 120, 90, 340);
  // Bottom part of S
  arc(200, 280, 200, 120, -90, 170);

  // ----- DRAW THE LETTER "I" -----
  // line(x1, y1, x2, y2)
  line(400, 160 - 90 / 2, 400, 280 + 90 / 2);
}
