function setup() {
  createCanvas(300, 200);
  noStroke();
}

function draw() {
  fill(0, 38, 84);    // Bleu
  rect(0, 0, 100, 200);
  
  fill(255);          // Blanc
  rect(100, 0, 100, 200);
  
  fill(239, 65, 53);  // Rouge
  rect(200, 0, 100, 200);
}