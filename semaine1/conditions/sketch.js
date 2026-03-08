function setup() {
  createCanvas(400, 400); 
  background(240);       

  //les lignes de séparation des 4 zones
  stroke(180);
  line(width / 2, 0, width / 2, height); // Ligne verticale au milieu
  line(0, height / 2, width, height / 2); // Ligne horizontale au milieu
}

function draw() {
  
  if (mouseIsPressed && mouseButton === LEFT) {
    noStroke();

    //ZONE SECRÈTE
    
    let d = dist(mouseX, mouseY, width / 2, height / 2);

    if (d < 50) { 
      fill(255); // Blanc pour la zone secrète
    } 
    else if (mouseX < width / 2 && mouseY < height / 2) {
      fill(255, 0, 0); // Haut-gauche : Rouge
    } 
    else if (mouseX >= width / 2 && mouseY < height / 2) {
      fill(0, 0, 255); // Haut-droite : Bleu
    } 
    else if (mouseX < width / 2 && mouseY >= height / 2) {
      fill(0, 255, 0); // Bas-gauche : Vert
    } 
    else {
      fill(255, 255, 0); // Bas-droite : Jaune
    }

    //DESSIN DU PINCEAU
    ellipse(mouseX, mouseY, 30, 30); // Chaque cercle fait 30px de diamètre
  }
}