// LMC 2700 Lab 1
// 5. Shapes
// Lab page: https://gatech.instructure.com/courses/485270/assignments/2162834
// Reference: https://p5js.org/reference/#Shape

function setup() {
  createCanvas(600, 400);
  background(220);
}

function draw() {
  // 1. A rectangle
  // rect(x, y, width, height)
  // Reference: https://p5js.org/reference/#/p5/rect
  fill("#4CAF50");
  noStroke(); // no outline
  rect(50, 50, 100, 80); // starts at (50,50)

  // 2. An ellipse (circle/oval)
  // ellipse(x, y, width, height)
  // Reference: https://p5js.org/reference/#/p5/ellipse
  // fill("#2196F3");
  // ellipse(300, 90, 120, 120); // centered at (300,90)

  // 3. A line
  // line(x1, y1, x2, y2)
  // Reference: https://p5js.org/reference/#/p5/line
  // stroke("#E91E63");
  // strokeWeight(4); // thickness
  // line(450, 50, 550, 130);

  // 4. A triangle
  // triangle(x1, y1, x2, y2, x3, y3)
  // Reference: https://p5js.org/reference/#/p5/triangle
  // noStroke();
  // fill("#FF9800");
  // triangle(100, 200, 50, 300, 150, 300);

  // 5. An arc (part of an ellipse)
  // arc(x, y, width, height, start, stop, mode)
  // Reference: https://p5js.org/reference/#/p5/arc
  // angleMode(DEGREES); // set the angle unit to degrees
  // fill("#9C27B0");
  // arc(300, 250, 150, 150, 0, 180, PIE); // half-circle
}
