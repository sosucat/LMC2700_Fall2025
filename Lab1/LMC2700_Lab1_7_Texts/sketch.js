// LMC 2700 Lab 1
// 7. Texts
// Lab page: https://gatech.instructure.com/courses/485270/assignments/2162834
// Refernce: https://p5js.org/reference/p5/text/

function setup() {
  createCanvas(600, 400);
  background(0);

  textSize(45); // Set text size to 45 pixels
  fill("yellow"); // Set fill color
  text("rainbows", 20, 50); // Draw text at x=20, y=50

  stroke("lightgray"); // Set stroke color (outline)
  strokeWeight(4); // Set stroke thickness
  fill("cornflowerblue");
  text("rainbows", 20, 120);

  stroke("pink");
  strokeWeight(12);
  fill("tomato");
  text("rainbows", 20, 190);

  noStroke(); // Remove stroke
  fill("limegreen");
  text("rainbows", 20, 260);

  text("🌈", 200, 260); // Draw rainbow emoji at x=200, y=260
}
