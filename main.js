let immagine = document.querySelector('#imgAttiva');
let bottone = document.querySelector('#btnAccendi');
let accesa = false;

bottone.addEventListener('click', () => {
    if (!accesa) {
         immagine.src = 'img/yellow_lamp.png';
        bottone.textContent = 'Spegni';
        accesa = true;
         } 
         
    else {
        immagine.src = 'img/white_lamp.png';
        bottone.textContent = 'Accendi';
        accesa = false;
    }
});

