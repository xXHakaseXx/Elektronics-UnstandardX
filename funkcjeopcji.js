



//nowy projekt
document.getElementById('dropbtnnowy projekt0').addEventListener('click', nowy);
function nowy(){
    outputDiv2 = document.getElementById('canvas-warp');
   
    if (!outputDiv2.querySelector('#feature-div')) {
     // If statement checks if the image already exists in the
    // output div. If not, it is appended:
    const usuwanie = document.getElementById('stol3');
    usuwanie.remove();

    const stolnowy2 = document.createElement('div');
    stolnowy2.id = 'stol3';
    stolnowy2.className = 'canvasstol3';
    outputDiv2.appendChild(stolnowy2);

    outputDiv = document.getElementById('stol3');
    const stolnowy = document.createElement('canvas');
    stolnowy.id = 'stol';
    stolnowy.className = 'canvasstol';
    stolnowy.setAttribute('height','200');
    stolnowy.setAttribute('width','200');
    outputDiv.appendChild(stolnowy);
    
    }
}


//ustawienia
document.getElementById('ustawienia4').addEventListener('click', ustawienia);
function ustawienia() {
 

    outputDiv = document.getElementById('stol3');
    if (!outputDiv.querySelector('#ustawienia')) {
    // If statement checks if the image already exists in the
    // output div. If not, it is appended:
    const div = document.createElement('div');
    div.id = 'ustawienia';
    div.className = 'ustawienia';
   // div.setAttribute('style','z-index:2; float:left; width:20px; height:20px; background-color:#000;position: absolute;top: 8px;left: 16px;');
    outputDiv.appendChild(div);

//przyciski ustawień
    ustawienialokacja = document.getElementById('ustawienia')
    const darktheme = document.createElement('button');
    darktheme.id = 'darktheme';
    darktheme.className = 'darktheme';
    darktheme.setAttribute('onclick','darktheme()')
    darktheme.innerHTML = 'Tryb jasny';
    ustawienialokacja.appendChild(darktheme);


//
    }      
    else{
        // If statement checks if the image already exists in the
        // output div. If not, it is appended:
        const usuwanie = document.getElementById('ustawienia');
        usuwanie.remove();
    }
   
}