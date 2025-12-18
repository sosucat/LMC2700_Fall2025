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


## Lab 4: Keyboard inputs and image processing
## Lab 9: Machine learning for interaction design: pre-trained models and customized model training


## Reference:
- The Coding Train: https://thecodingtrain.com/tracks/code-programming-with-p5-js
- Patt Vira: https://www.youtube.com/@pattvira
- Official doc: https://p5js.org/
- ml5.js: https://ml5js.org/

TA: Sosuke Ichihashi
