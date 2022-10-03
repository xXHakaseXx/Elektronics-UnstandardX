//ojekty "listy opcji"
var opcja = [
{
    nazwa: "nowy projekt",
    lista: "",
    zdjecie: "https://www.nicepng.com/png/detail/335-3350672_duplicate-projects-icon-new-project-icon.png"
},
{
    nazwa: "element",
    lista: [{
        nazwa: "bramka logiczna",
        element:['not','and','or','nand','nor','xor','xnor'],
        zdjecie: ""
        },
        {
        nazwa: "element elektroniczny",
        element:['rezystor','kondensator','tranzystor'] ,
        zdjecie: ""
        },
        {
        nazwa: "układy scalone",
        element:"",
        zdjecie: ""
        },
        {
        nazwa: "uulubione",
        element:"",
        zdjecie: ""
        },
        {
        nazwa: "biblioteka",
        element:"",
        zdjecie: ""
        }

    
    ],
    zdjecie: "https://joblife.pl/wp-content/uploads/2020/12/resistor_usa-300x113.jpg"
},
{
    nazwa: "opcja3",
    lista: [
        {
        nazwa: "1",
        element:['jeden','dwa'] ,
        zdjecie: ""
        },
        {
        nazwa: "2",
        element:['jeden','dwa'] ,
        zdjecie: ""
        },
        {
        nazwa: "3",
        element:['jeden','dwa',''],
        zdjecie: "" 
        }
    ],
    zdjecie: ""
},
{
    nazwa: "opcja4",
    lista: [
        {
        nazwa: "1",
        element:['jeden','dwa','trzy','cztery'] ,
        zdjecie: ""
        },
        {
        nazwa: "2",
        element:['jeden','dwa'] ,
        zdjecie: ""
        },
        {
        nazwa: "3",
        element:['jeden','dwa'] ,
        zdjecie: ""
        }
    ],
    zdjecie: ""
},
{
    nazwa: "ustawienia",
    lista: "",
    zdjecie: ""
}


];
  console.log(opcja[0].lista[0]);
  console.log(opcja[0].lista.length);
  let opcjadlugosc = opcja.length;
 
  
  for(let n=0; n<opcjadlugosc; n++)
  {
      console.log('opcja: '+opcja[n].nazwa);
      let nazwaopcja = opcja[n].nazwa;
      
      opcjam = document.getElementById('menu');
      if (!opcjam.querySelector('#feature-div')) {
      // If statement checks if the image already exists in the
      // output div. If not, it is appended:
      const div = document.createElement('div');
      div.className = 'przyciskmenudropdown';
      div.setAttribute("id",opcja[n].nazwa+n)
      div.innerHTML = '<button  class="przyciskmenudropbtn" id="dropbtn'+opcja[n].nazwa+n+'" ><img class="icon" src="'+opcja[n].zdjecie+'"><div class="nazwaprzycisku">'+opcja[n].nazwa+'</div></button>';
      opcjam.appendChild(div);
      }
      opcjam2 = document.getElementById(opcja[n].nazwa+n);
      const div2 = document.createElement('div');
      div2.className = 'przyciskmenudropdown-content';
      div2.setAttribute("id",'przyciskmenudropdown-content'+opcja[n].nazwa+n)
      opcjam2.appendChild(div2);
      
      

        
      let listadlugosc = opcja[n].lista.length;
      
      for(let n2=0; n2<listadlugosc;n2++ )
      {
        let nazwalista = opcja[n].lista[n2].nazwa;
          console.log('lista: '+opcja[n].lista[n2].nazwa);


          listam = document.getElementById('przyciskmenudropdown-content'+opcja[n].nazwa+n);
          if (!listam.querySelector('#feature-div')) {
          const div3 = document.createElement('div');
          div3.className = 'przyciskopcjalistadropdown';
          div3.setAttribute("id",'przyciskopcjalistadropdown'+opcja[n].lista[n2].nazwa+n)
          div3.innerHTML = '<button  class="lista2" id="listadropbtn'+opcja[n].lista[n2].nazwa+n+n2+'" >'+opcja[n].lista[n2].nazwa+'</button>';
          listam.appendChild(div3);
          }
          listam2 = document.getElementById('przyciskopcjalistadropdown'+opcja[n].lista[n2].nazwa+n);
          const div4 = document.createElement('div');
          div4.className = 'przyciskopcjalistadropdown-content';
          div4.setAttribute("id",'przyciskopcjalistadropdown-content'+opcja[n].lista[n2].nazwa+n)
          listam2.appendChild(div4);
        
         
        let elementdlugosc = opcja[n].lista[n2].element.length;
        console.log('elementdlugosc  '+opcja[n].lista[n2].element.length);

        for(let n3=0; n3<elementdlugosc;n3++ )
          {
            elementam = document.getElementById('przyciskopcjalistadropdown-content'+opcja[n].lista[n2].nazwa+n);
            if (!listam.querySelector('#feature-div')) {
            const div5 = document.createElement('div');
            div5.className = 'elementdropdown';
            div5.setAttribute("id",'elementdropdown'+opcja[n].lista[n2].nazwa+n2)
            div5.innerHTML = '<button  class="element3" id="elementdropbtn'+opcja[n].lista[n2].element[n3]+n+'">'+opcja[n].lista[n2].element[n3]+'</button>';
            elementam.appendChild(div5);
            }




            console.log('element: '+opcja[n].lista[n2].element[n3]);
          }
        }


    
}


