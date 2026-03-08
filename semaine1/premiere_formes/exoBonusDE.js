function setup() {
  createCanvas(300, 200);
  noStroke();
}

function draw() {
  fill(0);            // Noir
  rect(0, 0, 300, 66);
  
  fill(255, 0, 0);    // Rouge
  rect(0, 66, 300, 67);
  
  fill(255, 204, 0);  // Jaune
  rect(0, 133, 300, 67);
}