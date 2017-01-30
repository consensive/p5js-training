var rSlider, gSlider, bSlider;

function setup() {
  // create canvas
  createCanvas(710, 400);
  textSize(15)
  noStroke();

  // create sliders
  rSlider = createSlider(0, 255, 100);
  rSlider.position(20, 20);
  gSlider = createSlider(0, 255, 0);
  gSlider.position(20, 50);
  bSlider = createSlider(0, 255, 255);
  bSlider.position(20, 80);
}

function draw() {
  var r = rSlider.value();
  var g = gSlider.value();
  var b = bSlider.value();
  background(r, g, b);
  text("red", 165, 35);
  text("green", 165, 65);
  text("blue", 165, 95);
}