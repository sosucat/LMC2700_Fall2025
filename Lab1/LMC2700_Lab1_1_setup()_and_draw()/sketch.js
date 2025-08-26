// LMC 2700 Lab 1
// 1. setup() and draw() functions
// Lab page: https://gatech.instructure.com/courses/485270/assignments/2162834

// No need to mind the code.


let step = 0;
let lastChange = 0;
let interval = 500;   // msec per highlight

function setup() {
  createCanvas(400, 400);
  textSize(24);
  textAlign(LEFT, TOP);
  noStroke();
  
  lastChange = millis();
}

function draw() {
  background(30);
  
  // --- Code text ---
  let codeLines = [
    "function setup() {",
    "  // runs once",
    "}",
    "",
    "function draw() {",
    "  // runs in a loop",
    "}"
  ];
  
  // --- Draw each line ---
  for (let i = 0; i < codeLines.length; i++) {
    let y = 50 + i * 30;
    
    // Highlight based on current step
    if ((step === 0 && i <= 2) || ((step === 1 || (step === 2 || step === 3)) && i >= 4)) {
      fill("#FFC107"); // highlight color
    } else {
      fill(130);
    }
    
    text(codeLines[i], 50, y);
  }
  
  // --- Update highlight step ---
  if (millis() - lastChange > interval) {
    lastChange = millis();
    step += 0.5;
    
    if (step > 3) { 
      step = -1;
    }
  }
}
