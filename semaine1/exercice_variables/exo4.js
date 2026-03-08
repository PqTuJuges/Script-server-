function setup() {
    createCanvas(400, 300);
}

function draw() {
    background(255);

    
    let cote = 200;
    let demiCote = cote / 2;
    let x = width / 2 - demiCote;
    let y = height / 2 - demiCote;

    //Dessin du carré 
    noFill();
    stroke(0);
    strokeWeight(2);
    rect(x, y, cote, cote);

    //Médiane verticale (en vert)
    stroke(0, 255, 0, 150); // Le 4ème nombre est la transparence
    line(x + demiCote, y, x + demiCote, y + cote);

    //Médiane horizontale (en vert)
    line(x, y + demiCote, x + cote, y + demiCote);

    //Diagonales (en rouge)
    stroke(255, 0, 0, 150);
    // Diagonale haut-gauche vers bas-droit
    line(x, y, x + cote, y + cote);
    // Diagonale haut-droit vers bas-gauche
    line(x + cote, y, x, y + cote);
}