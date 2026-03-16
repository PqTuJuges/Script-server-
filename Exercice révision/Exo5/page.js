const number = document.getElementById('number');
const start = document.getElementById('start');
const stop1 = document.getElementById('stop');
const minute = document.getElementById('minute');
const limite = document.getElementById('limite');
let intervalId = null;
let chiffre = 0;

const incrementer = () => {
    let compteur = Number(minute.textContent);
    compteur++;
    if(isNaN(chiffre) || compteur > chiffre){
        arreterCompteur();
        return;
    }
    minute.textContent = compteur;
}

const gereBoutonDemarrer = () => {
    if (intervalId === null) {
        intervalId = setInterval(incrementer, 1000);
    }
}
const arreterCompteur = () => {
    clearInterval(intervalId)
    intervalId = null;
}
const gereNombreEntree = () =>{
    chiffre = limite.valueAsNumber;
}
start.addEventListener('click', gereBoutonDemarrer);
stop1.addEventListener('click', arreterCompteur);
limite.addEventListener('change',gereNombreEntree);