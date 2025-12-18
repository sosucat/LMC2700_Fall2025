// LMC 2700 Lab 9
// 1. Body Pose Template
// Learn more about the ml5.js project: https://ml5js.org/
// ml5.js license and Code of Conduct: https://github.com/ml5js/ml5-next-gen/blob/main/LICENSE.md
// Document: https://docs.ml5js.org/#/reference/bodypose


let video, bodyPose;//Make an empty video and body pose objects.
let poses = [];//Make an empty array to store the tracked people's poses.


async function setup() {
  // Load the bodyPose model from the ml5 API
  bodyPose = await ml5.bodyPose();
  
  createCanvas(640, 480);
  // Create the video and hide it
  video = createCapture({video: true, audio: false});
  video.size(width, height);
  video.hide();

  // Start detecting poses in the webcam video
  bodyPose.detectStart(video, gotPoses);
}


// If you are on p5.js v1, use the following preload() and setup() functions instead of async setup:
// function preload() {
//   bodyPose = ml5.bodyPose();
// }
// function setup() {
//   createCanvas(640, 480);
//   // Create the video and hide it
//   video = createCapture(VIDEO);
//   video.size(640, 480);
//   video.hide();
//   // Start detecting poses in the webcam video
//   bodyPose.detectStart(video, gotPoses);
// }


function draw() {
  // Draw the webcam video.
  image(video, 0, 0, width, height);

  // Draw the tracked landmark points.
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
  }
}


// Callback function for when bodyPose outputs data.
function gotPoses(results) {
  // Save the output to the poses variable.
  poses = results;
}