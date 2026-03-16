const button = document.getElementById('button');
const body = document.body;

// Ajout de l'événement clic
button.addEventListener('click', () => {
    if (body.classList.contains('bleu')) {
        body.classList.remove('bleu');
        body.classList.add('rouge');
    } else {
        body.classList.remove('rouge');
        body.classList.add('bleu');
    }
});
