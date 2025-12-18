// LMC 2700 Lab 9
// 4. Face Mesh Live2D?
// Controls facial expressions of the avatar. Basically Live2D used in Vtuber


let faceMesh;
let video;
let faces = [];

// Turn on refineLandmarks for more stable eyes/brows.
let options = { maxFaces: 1, refineLandmarks: true, flipHorizontal: false };

// Smoothed avatar state (to reduce jitter).
let smoothed = {
  x: 320,
  y: 240,
  w: 220,
  h: 260,
  roll: 0,
  mouthOpen: 0,
  smile: 0,
  leftEyeOpen: 1,
  rightEyeOpen: 1,
  leftBrow: 0.5,
  rightBrow: 0.5,
};



async function setup() {
  createCanvas(640, 360);
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();

  // Load FaceMesh with await in setup.
  faceMesh = await ml5.faceMesh(options);

  // Start detection once model is ready.
  faceMesh.detectStart(video, gotFaces);
}



function draw() {
  image(video, 0, 0, width, height);

  if (faces.length > 0) {
    const kp = faces[0].keypoints;

    // Helper to read a landmark safely (with fallback indices).
    const L = (i, fallbackIdx = null) =>
      kp[i] || (fallbackIdx !== null ? kp[fallbackIdx] : null);

    // Key landmarks (MediaPipe FaceMesh indices).
    const NOSE_TIP = L(1);
    const LEFT_CHEEK = L(234);
    const RIGHT_CHEEK = L(454);

    // Eyes (multiple candidates for stability across versions).
    const L_EYE_UP = L(159, 160); // Upper lid.
    const L_EYE_DN = L(145, 144); // Lower lid.
    const L_EYE_OUT = L(33);
    const L_EYE_IN = L(133);

    const R_EYE_UP = L(386, 385);
    const R_EYE_DN = L(374, 380);
    const R_EYE_OUT = L(263);
    const R_EYE_IN = L(362);

    // Mouth.
    const UPPER_LIP = L(13);
    const LOWER_LIP = L(14);
    const MOUTH_L = L(61);
    const MOUTH_R = L(291);

    // Brows (outer brow points + fallbacks).
    const L_BROW = L(70, 105);
    const R_BROW = L(300, 334);

    // If any essentials missing, bail gracefully.
    if (
      ![
        NOSE_TIP,
        LEFT_CHEEK,
        RIGHT_CHEEK,
        L_EYE_UP,
        L_EYE_DN,
        R_EYE_UP,
        R_EYE_DN,
        L_EYE_OUT,
        L_EYE_IN,
        R_EYE_OUT,
        R_EYE_IN,
        UPPER_LIP,
        LOWER_LIP,
        MOUTH_L,
        MOUTH_R,
      ].every((p) => p)
    ) {
      drawAvatar(smoothed); // Keep drawing the last smoothed state.
      return;
    }

    // Size & roll.
    const faceW = dist(
      LEFT_CHEEK.x,
      LEFT_CHEEK.y,
      RIGHT_CHEEK.x,
      RIGHT_CHEEK.y
    );
    const faceH = faceW * 1.2;

    const eyeCxL = (L_EYE_OUT.x + L_EYE_IN.x) * 0.5;
    const eyeCyL = (L_EYE_OUT.y + L_EYE_IN.y) * 0.5;
    const eyeCxR = (R_EYE_OUT.x + R_EYE_IN.x) * 0.5;
    const eyeCyR = (R_EYE_OUT.y + R_EYE_IN.y) * 0.5;
    const roll = atan2(eyeCyR - eyeCyL, eyeCxR - eyeCxL);

    // Normalized expression features.
    const clamp01 = (v) => max(0, min(1, v));
    const safeDiv = (a, b) => (b && abs(b) > 1e-6 ? a / b : 0);

    // Eye openness: vertical / horizontal (EAR-like).
    const lEyeV = dist(L_EYE_UP.x, L_EYE_UP.y, L_EYE_DN.x, L_EYE_DN.y);
    const lEyeH = dist(L_EYE_OUT.x, L_EYE_OUT.y, L_EYE_IN.x, L_EYE_IN.y);
    const rEyeV = dist(R_EYE_UP.x, R_EYE_UP.y, R_EYE_DN.x, R_EYE_DN.y);
    const rEyeH = dist(R_EYE_OUT.x, R_EYE_OUT.y, R_EYE_IN.x, R_EYE_IN.y);

    const lEyeRatio = safeDiv(lEyeV, lEyeH); // ~0.09 closed → ~0.28 open (varies).
    const rEyeRatio = safeDiv(rEyeV, rEyeH);

    // Map with forgiving bounds so it actually changes.
    const lEyeOpen = clamp01((lEyeRatio - 0.11) / (0.28 - 0.11));
    const rEyeOpen = clamp01((rEyeRatio - 0.11) / (0.28 - 0.11));

    // Mouth openness.
    const mouthOpenRaw = safeDiv(
      dist(UPPER_LIP.x, UPPER_LIP.y, LOWER_LIP.x, LOWER_LIP.y),
      faceW
    );
    const mouthOpen = clamp01((mouthOpenRaw - 0.01) / (0.14 - 0.01));

    // Smile width.
    const smileRaw = safeDiv(
      dist(MOUTH_L.x, MOUTH_L.y, MOUTH_R.x, MOUTH_R.y),
      faceW
    );
    const smile = clamp01((smileRaw - 0.3) / (0.44 - 0.3));

    // Brow raise relative to each eye center.
    const eyeCenterL = { x: eyeCxL, y: eyeCyL };
    const eyeCenterR = { x: eyeCxR, y: eyeCyR };

    let lBrow = 0.5,
      rBrow = 0.5; // Defaults.
    if (L_BROW) {
      const lBrowRaw = safeDiv(
        dist(L_BROW.x, L_BROW.y, eyeCenterL.x, eyeCenterL.y),
        faceW
      );
      lBrow = clamp01((lBrowRaw - 0.06) / (0.16 - 0.06));
    }
    if (R_BROW) {
      const rBrowRaw = safeDiv(
        dist(R_BROW.x, R_BROW.y, eyeCenterR.x, eyeCenterR.y),
        faceW
      );
      rBrow = clamp01((rBrowRaw - 0.06) / (0.16 - 0.06));
    }

    // Smooth (lerp) to avoid jitter.
    const a = 0.35; // Smoothing factor.
    smoothed.x = lerp(smoothed.x, NOSE_TIP.x, a);
    smoothed.y = lerp(smoothed.y, NOSE_TIP.y, a);
    smoothed.w = lerp(smoothed.w, faceW, a);
    smoothed.h = lerp(smoothed.h, faceH, a);
    smoothed.roll = lerp(smoothed.roll, roll, a);
    smoothed.leftEyeOpen = lerp(smoothed.leftEyeOpen, lEyeOpen, a);
    smoothed.rightEyeOpen = lerp(smoothed.rightEyeOpen, rEyeOpen, a);
    smoothed.mouthOpen = lerp(smoothed.mouthOpen, mouthOpen, a);
    smoothed.smile = lerp(smoothed.smile, smile, a);
    smoothed.leftBrow = lerp(smoothed.leftBrow, lBrow, a);
    smoothed.rightBrow = lerp(smoothed.rightBrow, rBrow, a);

    // Draw avatar.
    push();
    translate(smoothed.x, smoothed.y);
    rotate(smoothed.roll);
    drawAvatar(smoothed);
    pop();
  } else {
    fill(255);
    textSize(16);
    textAlign(CENTER);
    text("Face not detected", width / 2, height / 2);
  }
}



// Simple deformable avatar.
function drawAvatar(s) {
  noStroke();

  // Head.
  fill(255, 230, 180);
  const headW = s.w * (1.0 + 0.04 * s.smile);
  const headH = s.h * (1.0 + 0.08 * s.mouthOpen);
  ellipse(0, 0, headW, headH);

  // Brows.
  stroke(60, 40, 30);
  strokeWeight(max(2, s.w * 0.01));
  noFill();
  const browY = -headH * 0.22;
  const browSpan = headW * 0.32;

  const lRaise = map(s.leftBrow, 0, 1, 0, -headH * 0.06);
  const rRaise = map(s.rightBrow, 0, 1, 0, -headH * 0.06);

  // Left brow.
  bezier(
    -browSpan,
    browY + lRaise,
    -browSpan * 0.66,
    browY + lRaise - 6,
    -headW * 0.18,
    browY + lRaise - 6,
    -headW * 0.12,
    browY + lRaise
  );
  // Right brow.
  bezier(
    headW * 0.12,
    browY + rRaise,
    headW * 0.18,
    browY + rRaise - 6,
    browSpan * 0.66,
    browY + rRaise - 6,
    browSpan,
    browY + rRaise
  );
  noStroke();

  // Eyes.
  const eyeY = -headH * 0.12;
  const eyeX = headW * 0.18;
  const baseEyeW = headW * 0.24;

  // Left.
  const lEyeH = max(2, baseEyeW * 0.75 * s.leftEyeOpen);
  fill(255);
  ellipse(-eyeX, eyeY, baseEyeW, lEyeH);
  fill(0);
  ellipse(-eyeX, eyeY, baseEyeW * 0.3, lEyeH * 0.7);
  // Right.
  const rEyeH = max(2, baseEyeW * 0.75 * s.rightEyeOpen);
  fill(255);
  ellipse(eyeX, eyeY, baseEyeW, rEyeH);
  fill(0);
  ellipse(eyeX, eyeY, baseEyeW * 0.3, rEyeH * 0.7);

  // Mouth.
  const mouthY = headH * 0.16;
  const mouthW = headW * (0.25 + 0.25 * s.smile);
  const mouthH = headH * (0.04 + 0.1 * s.mouthOpen);
  const r = mouthH * 0.6;

  fill(255, 120, 120);
  rectMode(CENTER);
  rect(0, mouthY, mouthW, mouthH, r);
  if (s.mouthOpen > 0.1) {
    fill(120, 40, 40);
    rect(0, mouthY, mouthW * 0.85, mouthH * (0.6 + 0.6 * s.mouthOpen), r * 0.7);
    fill(220, 100, 120);
    ellipse(0, mouthY + mouthH * 0.15, mouthW * 0.5, mouthH * 0.35);
  }

  // Simple nose.
  fill(230, 180, 150);
  ellipse(0, headH * 0.02, headW * 0.08, headH * 0.08);
}



// FaceMesh callback.
function gotFaces(results) {
  faces = results;
}
