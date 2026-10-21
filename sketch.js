let webcam;
let mic;
function setup() {
  createCanvas(400,400);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(220);
  let vol = mic.getLevel();
  let size = map(vol, 0, 1, 10, 300);
  ellipse(width/2, height/2, size);
}

function mousePressed(){
  mic.start();// start microphone
  userStartAudio();
}