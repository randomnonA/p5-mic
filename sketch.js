let webcam;
let mic;
function setup() {
  createCanvas(400,400);
  mic = new p5.AudioIn();
  //mic.start();
  fft = new p5.FFT();
  webcam = createCapture(VIDEO, {flipped:true});
  webcam.size(640, 480);
  webcam.hide();
}

function draw() {
  background(220);
  //let vol = mic.getLevel();
  //let size = map(vol, 0, 1, 10, 300);
  //ellipse(width/2, height/2, size);
  let waveformD = fft.waveform(); // get waveform data
  strokeWeight(4);
  noFill();
  beginShape();
  for (let i = 0; i < waveformD.length; i++) {
    let x = map(i, 0, wavefromD.length, 0, width);
    let y = map(waveformD[i], -1, 1, 0, height);
    vertex(x, y);
  }
  let vol = mic.getLevel();
  tint(255, 255 * vol + 50);
  image(webcam, 0, 0);
}

function mousePressed(){
  mic.start();// start microphone
  userStartAudio();
}