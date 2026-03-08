function setup() {
    createCanvas(300, 200);
    noStroke();
}

function draw() {
    fill(0, 146, 70);   // Vert
    rect(0, 0, 100, 200);

    fill(255);          // Blanc
    rect(100, 0, 100, 200);

    fill(206, 43, 55);  // Rouge
    rect(200, 0, 100, 200);
}