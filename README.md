# Georgia Tech Fall 2025 LMC 2700 Intro to Computational Media
## Lab 1: Intro to p5.js and Mondorian art assignment
### 0. Introducing the p5.js web editor interface
Intro to [p5.js web editor](https://editor.p5js.org/)

Tutorial video:
https://youtu.be/MXs1cOlidWs?feature=shared

### 1. setup() and draw()
When you play codes, the setup() is called first, followed by repeated draw() calls.

### 2. Coordinates
Play the following code and see how X and Y values change as you move your mouse cursor over the canvas. You do not have to mind the code for now.

### 3. `createCanvas()` and `background()`

Docs:

* [`createCanvas()`](https://p5js.org/reference/#/p5/createCanvas)
* [`background()`](https://p5js.org/reference/#/p5/background)

`createCanvas()` creates a canvas with the specified width and height.

`background()` draws a background with the specified color.

Modify the parameter values in the following code to see how it changes the canvas dimensions and background colors:

[https://editor.p5js.org/sosucat/sketches/n_88rQCLU](https://editor.p5js.org/sosucat/sketches/n_88rQCLU)


### 4. Color

Docs:

* [Background color](https://p5js.org/reference/#/p5/background)

You can specify colors in various ways, including grayscale, RGB, RGBA, HSB, and named colors.

Play around with the following code to explore different color formats:

[https://editor.p5js.org/sosucat/sketches/kfXls3UMu](https://editor.p5js.org/sosucat/sketches/kfXls3UMu)


### 5. Shapes

Docs:

* [Shapes](https://p5js.org/reference/#group-Shape)

You can draw a variety of shapes in p5.js. The following example covers basic shapes and their parameters:

[https://editor.p5js.org/sosucat/sketches/YuZFE17Lb](https://editor.p5js.org/sosucat/sketches/YuZFE17Lb)

**Notes:**

* The default value for `fill()` is white. If `fill()` never appears in `draw()`, all shapes will be white by default.
* Since `draw()` executes repeatedly, shapes are drawn onto the canvas like layers.


### 6. In-class Exercise: Draw Your Initials with Basic Shapes and Lines

Let’s do an exercise to digest what we have learned so far: coordinates, colors, and shapes.

**Task:**
Draw your initials using only basic shapes and lines.

**Example:**
[https://editor.p5js.org/sosucat/sketches/L2_ncysPD](https://editor.p5js.org/sosucat/sketches/L2_ncysPD)


### 7. Text and Emoji

Docs:

* [Text](https://p5js.org/reference/#/p5/text)

Since drawing letters with shapes can be tedious, let’s try writing text directly instead:

[https://editor.p5js.org/sosucat/sketches/29TEC_vqP](https://editor.p5js.org/sosucat/sketches/29TEC_vqP)

### 8. Lab Assignment: Mondrian Art

In this assignment, you will recreate a famous static artwork by Piet Mondrian using p5.js.

You may creatively abstract or simplify elements of the original artwork, as long as the overall visual style is recognizable.

#### Tips

* Plan before you code.
* Find the right syntax (a set of rules that define how to write valid code in a programming language) by searching and consulting documentation.

#### Basic Version of the Assignment

* Recreate the artwork above using rectangles and lines.
* Adapt the composition into your own personal creation.

#### Options for Advanced Versions

* Use [arrays](https://p5js.org/reference/#/p5/Array) to define shapes, then use
  [for loops](https://p5js.org/reference/#/p5/for) to iterate over the array and draw all shapes.
* Draw a different random [Mondrian-like](https://en.wikipedia.org/wiki/Piet_Mondrian) visual artwork every time the sketch is regenerated.
  Consider which aspects you choose to randomize (e.g., color, size, position, line thickness) and explain why.


---

## Lab 4: Keyboard inputs and image processing

Here is the revised Markdown with the specified URLs applied:

### Review: Conditional Statements

Example:

* [Conditional statements example](https://editor.p5js.org/sosucat/sketches/27jBLYshn)

### Keyboard Input

Docs and examples:

* [`keyCode` documentation](https://p5js.org/reference/p5/keyCode/)
* [`keyCode` example](https://editor.p5js.org/sosucat/sketches/XL7I2rpSs)
* [`keyPressed()` documentation](https://p5js.org/reference/p5/keyPressed/)

### In-class Exercise: Mario

* [Mario template code](https://editor.p5js.org/sosucat/sketches/27jBLYshn)

### Array & Loop

* [YouTube video on arrays and loops](https://youtu.be/cnRD9o6odjk?feature=shared)

### In-class Exercise: Draw the Ground and Obstacles in Mario

* [Image demo example](https://editor.p5js.org/sosucat/sketches/lqFfCdMqc)

### Image Preparation

* [`loadImage()` documentation](https://p5js.org/reference/p5/loadImage/)

### Collage and Filters

Background information and references:

* [Background on collage art](https://artincontext.org/collage-art/)
* [`filter()` documentation](https://p5js.org/reference/p5/filter/)
* [`image()` documentation](https://p5js.org/reference/p5/image/)
* [Example](https://editor.p5js.org/jeffThompson/sketches/_tkU58VTe)


### Lab Assignment: Moving Images

Choose a set of images to create a digital collage.
For inspiration, see: [Collage Art Background](https://artincontext.org/collage-art/)

Your source images may include:

* Images you find online
* Images you draw (by hand or digitally)
* Photographs you take yourself

One of the defining qualities of collage is its ability to remix existing elements and break away from traditional or “high art” forms. Collage often expresses everyday, political, or playful messages. Keep in mind that the pre-existing meanings and cultural associations of your source images become part of your final work—choose your images thoughtfully.

**Note:**
If you use code from any external resource, you must cite the source. Use comments in your p5.js code to indicate:

* What you borrowed
* The source URL
* How you adapted it

You must also cite your source images in code comments.


### Requirements

* Cite sources of inspiration and images (in both p5.js comments and Canvas comments)
* Create a collage that uses multiple images
* Include at least one interaction (e.g., keyboard, mouse, or other input)
* Follow Canvas submission guidelines

### Submit on Canvas

Submit the following:

* The URL to your **p5.js sketch editor** (not the fullscreen link)
* Written comments including:

  * **What it is:** one sentence
  * **Interaction instructions:** how the viewer should interact with the work (2–3 sentences)
  * **Motivation:** why you made it and why you designed it this way (2–4 sentences)
  * **Citations:** code, images, and other resources used


### Optional Challenges

* Design a series of movements and interactions that form a narrative.
* Incorporate sound:
  [https://editor.p5js.org/p5/sketches/Sound:_Load_and_Play_Sound](https://editor.p5js.org/p5/sketches/Sound:_Load_and_Play_Sound)
* Incorporate live video capture:
  [https://p5js.org/examples/imported-media-video-capture/](https://p5js.org/examples/imported-media-video-capture/)
  

---

## Lab 9: Machine learning for interaction design: pre-trained models and customized model training

### Introduction to ml5 (Machine Learning Library for p5.js)

**Documentation & Sample Codes:**

* [ml5.js official documentation](https://ml5js.org/)

**Demos:**

#### Body Pose

* Tutorial: [Body Pose reference](https://docs.ml5js.org/#/reference/bodypose)
* Template: [p5.js Body Pose template](https://editor.p5js.org/sosucat/sketches/zMbiEBMhF)
* Jump counter demo: [Jump Counter](https://editor.p5js.org/sosucat/sketches/ZPsufSMJZ)

#### Face Mesh

* Tutorial: [Face Mesh reference](https://docs.ml5js.org/#/reference/facemesh)
* Template: [Face Mesh template](https://editor.p5js.org/sosucat/sketches/oXF4EXC0U)
* Live2D demo: [Live2D](https://editor.p5js.org/sosucat/sketches/yGHJTWndH)
* Dandelion demo: [Dandelion](https://editor.p5js.org/sosucat/sketches/HcG5tuSeT)

#### Hand Pose

* Tutorial: [Hand Pose reference](https://docs.ml5js.org/#/reference/handpose)
* Template: [Hand Pose template](https://editor.p5js.org/sosucat/sketches/zL1F1D1Rw)

#### Object Detection

* Tutorial: [Object Detection reference](https://docs.ml5js.org/#/reference/object-detection)
* Template: [Object Detection template](https://editor.p5js.org/sosucat/sketches/F-pljHSWa)

#### Teachable Machine

* Tutorial: [Image Classifier - Teachable Machine](https://docs.ml5js.org/#/reference/image-classifier-tm)
* Template: [p5.js template](https://editor.p5js.org/sosucat/sketches/xDo096uAn)
* Make your own model: [Teachable Machine](https://teachablemachine.withgoogle.com/train/image)

---

### Lab Assignment: More Practice!

**Goal:**
Use machine learning models to build something unique, interactive, cool, and visually appealing.

**Baseline Requirements:**

* Must use machine learning models (e.g., [ml5.js](https://ml5js.org/)) in your sketch.

  * If you train a model, ensure the training data comes from you or external sources that allow training.
* Must include real-time interactivity.
* Canvas comments must include:

  * How to interact with the sketch
  * Design intention / motivation
  * Data source (if you trained your own model)

**Other Resources:**

* How to train your own model: [ml5 Neural Network documentation](https://docs.ml5js.org/#/reference/neural-network)



## Reference:
- The Coding Train: https://thecodingtrain.com/tracks/code-programming-with-p5-js
- Patt Vira: https://www.youtube.com/@pattvira
- Official doc: https://p5js.org/
- ml5.js: https://ml5js.org/

TA: Sosuke Ichihashi
