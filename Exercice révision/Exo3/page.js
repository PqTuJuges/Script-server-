const button = document.getElementById('button');
const cmpt = document.getElementById('cmpt');

let compteur = Number(cmpt.textContent);
button.addEventListener('click', () => {
    compteur += 1;
    cmpt.textContent = compteur;
});