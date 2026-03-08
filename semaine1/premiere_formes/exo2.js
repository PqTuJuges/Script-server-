function setup() {
    createCanvas(400, 300);
}

function draw() {
    background(220);
    stroke(0);
    strokeWeight(2);
    fill(0, 0, 255);
    rect(40, 40, 80, 80);

    fill(255,0,0);
    triangle(150, 150, 210, 150, 180, 210);

    stroke(0, 255, 0);
    strokeWeight(4);
    line(280, 150, 300, 250);
}
