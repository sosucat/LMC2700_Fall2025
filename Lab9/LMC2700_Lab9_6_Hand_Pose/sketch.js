// LMC 2700 Lab 9
// 6. Hand Pose
// Document: https://docs.ml5js.org/#/reference/handpose



let handPose;
let video;
let hands = [];



async function setup() {
  createCanvas(640, 360);

  // Create the webcam video and hide it.
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();

  // Load the handPose model asynchronously.
  handPose = await ml5.handPose();

  // Start detecting hands from the webcam video.
  handPose.detectStart(video, gotHands);
}



function draw() {
  // Draw the webcam video.
  image(video, 0, 0, width, height);

  // Draw all the tracked hand points.
  for (let i = 0; i < hands.length; i++) {
    let hand = hands[i];
    for (let j = 0; j < hand.keypoints.length; j++) {
      let keypoint = hand.keypoints[j];
      fill(0, 255, 0);
      noStroke();
      circle(keypoint.x, keypoint.y, 10);
    }
  }
}



function gotHands(results) {
  // Save the output to the hands variable.
  hands = results;
}
