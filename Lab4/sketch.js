// LMC 2700 Lab 4
// 1. Conditional statements
// Lab page: https://gatech.instructure.com/courses/485270/assignments/2238798
// Function: https://p5js.org/reference/p5/function/
// Conditional: https://p5js.org/reference/p5/if/


let x, y, scale, speed, vspeed, margin;


function setup() {
  createCanvas(400, 400);
  // Mario's variables
  x = 200;  // Horizontal position
  y = 300;  // Vertical position
  scale = 1.0;  //Scale
  speed = 2;
  vspeed = 0;
  margin = 60;
}


function draw() {
  background(220);
  drawMario(x, y, scale);
  x += speed;
  y += vspeed;
  if (x > width - margin) {
    speed = -speed;
  }
  else if(x < margin) {
    speed = -speed;
  }
  if (y > height - margin/2) {
    vspeed = -vspeed;
  }
  else if(y < margin) {
    vspeed = -vspeed;
  }
  
  for (let x = 0; x < 10; x++) {
    fill(random(255));
    rect(x * 40, 300, (x+1) * 40, height);
  }
  
  
  console.log(vspeed);
}


function keyPressed() {
  if (key === 'a') {
    speed += -1;
  }
  if (key === 'w') {
    vspeed += -1;
  }
  if (key === 's') {
    vspeed += 1;
  }
  if (key === 'd') {
    speed += 1;
  }
}



//  drawMario(x, y, scale)
//  x,y = center-bottom point where Mario appears.
function drawMario(x, y, s) {
  push();
  translate(x, y);

  // base measurements (all relative to s)
  let h = 120 * s;           // total approx height
  let headH = 58 * s;
  let bodyH = 54 * s;
  let bodyW = 52 * s;
  let hatH = 30 * s;
  let legH = 28 * s;
  let footW = 26 * s;
  let armW = 14 * s;

  // vertical offsets (y positive is down). We placed origin at feet center.
  let feetY = 0;
  let legTop = feetY - legH;
  let bodyTop = legTop - bodyH;
  let headTop = bodyTop - headH;
  let hatTop = headTop - hatH;

  // ---------- legs & boots ----------
  // left boot
  fill(60, 25, 20); // brown boot
  noStroke();
  rect(- (bodyW/2 - 8*s) - footW/2, legTop, footW, legH, 6*s);
  // right boot
  rect((bodyW/2 - 8*s) - footW/2, legTop, footW, legH, 6*s);

  // legs (pants)
  fill(40, 90, 180); // blue overalls (pants)
  rect(- (bodyW/2 - 8*s) - (footW/2 - 4*s), legTop - legH*0.05, footW - 8*s, legH*0.9, 4*s);
  rect((bodyW/2 - 8*s) - (footW/2 - 4*s), legTop - legH*0.05, footW - 8*s, legH*0.9, 4*s);

  // ---------- body ----------
  // shirt (red) - under overalls
  fill(200, 20, 20);
  rect(-bodyW/2, bodyTop, bodyW, bodyH, 8*s);

  // overalls bib
  fill(30, 75, 165);
  rect(-bodyW/2, bodyTop + 6*s, bodyW, bodyH*0.65, 6*s);

  // straps
  rect(-bodyW/2 - 2*s, bodyTop + 6*s, 12*s, 22*s, 4*s);
  rect(bodyW/2 - 10*s, bodyTop + 6*s, 12*s, 22*s, 4*s);

  // buttons (simple circles)
  fill(240, 200, 40);
  ellipse(-bodyW/2 + 10*s, bodyTop + 14*s, 8*s, 8*s);
  ellipse(bodyW/2 - 10*s, bodyTop + 14*s, 8*s, 8*s);

  // pocket line/shape (quad)
  fill(25,65,150);
  quad(-14*s, bodyTop + bodyH*0.2, 14*s, bodyTop + bodyH*0.2, 18*s, bodyTop + bodyH*0.45, -18*s, bodyTop + bodyH*0.45);

  // ---------- arms & gloves ----------
  // left upper arm (red)
  fill(200, 20, 20);
  ellipse(-bodyW/2 - 10*s, bodyTop + 18*s, 28*s, 20*s);
  // right upper arm
  ellipse(bodyW/2 + 10*s, bodyTop + 18*s, 28*s, 20*s);

  // left glove
  fill(255);
  ellipse(-bodyW/2 - 26*s, bodyTop + 20*s, 16*s, 18*s);
  // right glove
  ellipse(bodyW/2 + 26*s, bodyTop + 20*s, 16*s, 18*s);

  // small glove thumb shapes (ellipses)
  ellipse(-bodyW/2 - 32*s, bodyTop + 18*s, 6*s, 8*s);
  ellipse(bodyW/2 + 32*s, bodyTop + 18*s, 6*s, 8*s);

  // ---------- head ----------
  // neck (small)
  fill(240, 200, 160);
  rect(-8*s, bodyTop - 6*s, 16*s, 6*s, 3*s);

  // face (main head ellipse)
  fill(140, 60, 20);
  rect(-30*s, headTop, 60*s, headH/2);
  fill(250, 200, 190); // skin
  ellipse(0, headTop + headH*0.6, 59*s, headH);

  // hair behind ear and around head (dark brown)
  fill(50, 30, 10);
  arc(0, headTop + headH*0.6, 74*s, headH + 8*s, PI + QUARTER_PI, -QUARTER_PI, CHORD);
  
  stroke(0);
  strokeWeight(3*s);
  fill(185, 0, 0)
  ellipse(0, headTop + headH*0.97, 14, 12);
  noStroke();
  
  // mouth line
  stroke(255);
  strokeWeight(3*s);
  noFill();
  arc(0, headTop + headH*0.83, 28*s, 10*s, PI*0.25, PI*0.75);
  noStroke();

  // mustache (three overlapping arcs/ellipses)
  fill(30, 20, 10);
  ellipse(0, headTop + headH*0.8, 36*s, 12*s);
  ellipse(-14*s, headTop + headH*0.75, 18*s, 10*s);
  ellipse(14*s, headTop + headH*0.75, 18*s, 10*s);

  // eyes
  fill(255);
  ellipse(-10*s, headTop + headH*0.45, 12*s, 17*s);
  ellipse(8*s, headTop + headH*0.45, 12*s, 17*s);
  fill(110,190,255);
  ellipse(-9*s, headTop + headH*0.45, 9*s, 11*s);
  ellipse(7*s, headTop + headH*0.45, 9*s, 11*s);
  fill(30,30,60);
  ellipse(-8*s, headTop + headH*0.45, 6*s, 7*s);
  ellipse(6*s, headTop + headH*0.45, 6*s, 7*s);
  
  // nose (big round)
  fill(250, 190, 190);
  ellipse(0, headTop + headH*0.6, 18*s, 14*s);


  // eyebrows (simple lines)
  stroke(60,30,20);
  strokeWeight(2*s);
  line(-16*s, headTop + headH*0.28, -6*s, headTop + headH*0.29);
  line(2*s, headTop + headH*0.29, 12*s, headTop + headH*0.28);
  noStroke();

  // ears
  fill(240, 191, 182);
  ellipse(-33*s, headTop + headH*0.52, 12*s, 22*s);
  ellipse(33*s, headTop + headH*0.52, 12*s, 22*s);

  // ---------- hat ----------
  // hat brim
  fill(200, 20, 20);
  arc(0, hatTop + hatH*1.5, 70*s, 65*s, PI, 0, CHORD);
  
  // emblem (simple white circle with M)
  fill(255);
  ellipse(0, hatTop + hatH*0.95, 22*s, 20*s);
  fill(200, 20, 20);
  textAlign(CENTER, CENTER);
  textSize(12*s);
  textStyle(BOLD);
  fill(200, 20, 20);
  // draw M manually with triangle shapes (to avoid text dependency)
  fill(200,20,20);
  // left stroke of M
  triangle(-7.5*s, hatTop + hatH*1.15, -3*s, hatTop + hatH*0.65, 0*s, hatTop + hatH*0.85);
  // right stroke
  triangle(7.5*s, hatTop + hatH*1.15, 3*s, hatTop + hatH*0.65, 0*s, hatTop + hatH*0.85);

  // hat rim darker shadow
  fill(170, 10, 10);
  arc(0, hatTop + hatH*1.5, 70*s, 20*s, PI, 0, CHORD);

  // small shine on hat (ellipse)
  fill(255, 255, 255, 80);
  ellipse(-20*s, hatTop + hatH*0.77, 12*s, 6*s);

  pop();
}