const Like = document.getElementById('button-Like');
const cmptLike = document.getElementById('cmpt-Like');
const dislike = document.getElementById('button-Dislike');
const cmptDislike = document.getElementById('cmpt-Dislike');
// Initialiser les compteurs depuis le contenu HTML (valeur par défaut 0)
let compteurLike = Number(cmptLike.textContent) || 0;
let compteurDislike = Number(cmptDislike.textContent) || 0;

Like.addEventListener('click', () => {
    compteurLike += 1;
    cmptLike.textContent = compteurLike;
});

dislike.addEventListener('click', () => {
    compteurDislike += 1;
    cmptDislike.textContent = compteurDislike;
});
