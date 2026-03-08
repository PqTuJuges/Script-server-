function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(255);

  // 1. Déclaration des variables
  let cote = 100; // On réduit un peu la taille pour mieux voir le mouvement
  let demiCote = cote / 2;

  // On utilise les variables système de la souris
  let x = mouseX; 
  let y = mouseY;

  // 2. On centre le dessin sur la souris
  rectMode(CENTER);
  noFill();
  stroke(0);
  strokeWeight(2);
  rect(x, y, cote, cote);

  // 3. Médiane verticale (en vert avec transparence)
  stroke(0, 255, 0, 150); 
  line(x, y - demiCote, x, y + demiCote);

  // 4. Médiane horizontale (en vert)
  line(x - demiCote, y, x + demiCote, y);

  // 5. Diagonales (en rouge avec transparence)
  stroke(255, 0, 0, 150);
  // Haut-gauche vers bas-droit
  line(x - demiCote, y - demiCote, x + demiCote, y + demiCote);
  // Haut-droit vers bas-gauche
  line(x + demiCote, y - demiCote, x - demiCote, y + demiCote);
}