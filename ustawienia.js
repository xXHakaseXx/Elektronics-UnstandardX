function darktheme() {
//przyciski ustawień
outputDiv = document.getElementById('head');
if (outputDiv.querySelector('#jasny')) {


const usuwanie = document.getElementById('jasny');
usuwanie.remove();

const ciemny = document.createElement('link');
ciemny.id = 'ciemny';
ciemny.className = 'ciemny';
ciemny.setAttribute('rel','stylesheet');
ciemny.setAttribute('href','ciemny.css');
outputDiv.appendChild(ciemny);

lokustawienia= document.getElementById('ustawienia');
const zmianatextujajasny = document.getElementById('darktheme');
zmianatextujajasny.innerHTML = "Tryb jasny";
lokustawienia.appendChild(zmianatextujajasny);
}      
else{
    const usuwanie2 = document.getElementById('ciemny');
    usuwanie2.remove();
    
    const ciemny = document.createElement('link');
    ciemny.id = 'jasny';
    ciemny.className = 'jasny';
    ciemny.setAttribute('rel','stylesheet');
    ciemny.setAttribute('href','jasny.css');
    outputDiv.appendChild(ciemny);

    lokustawienia= document.getElementById('ustawienia');
const zmianatextujajasny = document.getElementById('darktheme');
zmianatextujajasny.innerHTML = "Tryb ciemny";
lokustawienia.appendChild(zmianatextujajasny);
}
}
