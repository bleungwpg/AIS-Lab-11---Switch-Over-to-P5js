// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 1-1: stroke and fill

function preload() {

}


function setup() {
  createCanvas(480, 270);
  stroke(0); 
  fill(150);
  
 bgSound = loadSound('audio/GuileTheme.mp3');

}

function draw() {


  background(255);
  rect(50,50,75,100);
  text("Hello World!",10,10);
  
  text(bgSound.isPlaying(),10,50);
  
  
  if (!bgSound.isPlaying())
  {
 	bgSound.loop();
  }

}