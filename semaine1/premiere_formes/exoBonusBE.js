function setup() {
    createCanvas(300, 200);
    noStroke();
}

function draw() {
    // 1. Bande NOIRE 
    fill(0); //noir
    rect(0, 0, 100, 200);

    // 2. Bande JAUNE 
    fill(255, 224, 0); // jaune vif
    rect(100, 0, 100, 200);

    // 3. Bande ROUGE 
    fill(255, 0, 0); // Rouge
    rect(200, 0, 100, 200);
}