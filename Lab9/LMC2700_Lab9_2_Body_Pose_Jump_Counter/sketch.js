// LMC 2700 Lab 9
// 2. Body Pose Jump Counter
// Jump counter based on the waist height.


let video, bodyPose, jumpCounter, isFirstLoop, groundLevel, inAir, threshold;
let poses = [];

async function setup() {
  bodyPose = await ml5.bodyPose();
  createCanvas(640, 480);
  video = createCapture({video: true, audio: false});
  video.size(width, height);
  video.hide();
  bodyPose.detectStart(video, gotPoses);
  
  // Initialize variables.
  jumpCounter = 0;
  isFirstLoop = true;
  inAir = false;
  threshold = 30;
}


function draw() {
  // Draw the webcam video
  image(video, 0, 0, width, height);

  // Draw the tracked landmark points
  for (let i = 0; i < poses.length; i++) {
    let pose = poses[i];
    for (let j = 0; j < pose.keypoints.length; j++) {
      let keypoint = pose.keypoints[j];
      // Only draw a circle if the keypoint's confidence is bigger than 0.1
      if (keypoint.confidence > 0.1) {
        fill(0, 255, 0);noStroke();
        circle(keypoint.x, keypoint.y, 10);
      }
    }
    // Get the waist height and detect jumps.
    waistHeight = (pose.keypoints[10].y + pose.keypoints[11].y) / 2;
    jumpCount();
  }
  background('#0000006D')
  fill(255);textSize(150);
  text(str(jumpCounter), width/2 - 50, height/2);
}


function jumpCount() {
  // If this is the first loop of draw(), set the current waist height as the ground level.
  if (isFirstLoop) {
    isFirstLoop = false;
    groundLevel = waistHeight;
    console.log('Ground level set:', groundLevel);
  }
  // If the ground leveling is done, detect jumps and increment the counter.
  else {
    // Do not increment the counter if the user has not fallen back to the ground.
    if (inAir) {
      if (waistHeight > groundLevel - threshold) {
        inAir = false;
      }
    }
    // After the user returns to the ground level, check if the user jumps.
    else {
      if (waistHeight <= groundLevel - threshold) {
        inAir = true;
        jumpCounter++;
      }
    }
  }
}


// Callback function for when bodyPose outputs data.
function gotPoses(results) {
  // Save the output to the poses variable.
  poses = results;
}