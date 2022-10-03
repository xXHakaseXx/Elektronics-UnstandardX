

// obiekt


let object = [
    {
        polozeniex: [1,1,2,2],
        polozeniey: [1,2,1,2],
        czerwony:"",
        zielony:"",
        niebieski:""
    },
    {
        polozeniex: [-1,-1,-2,-2],
        polozeniey: [-1,-2,-1,-2],
        czerwony:"",
        zielony:"",
        niebieski:""
    },
    {
        polozeniex: [3,4,4,3],
        polozeniey: [0,5,0,5],
        czerwony:"",
        zielony:"",
        niebieski:""
    },
    {
        polozeniex: [-20,-21,-20,-21],
        polozeniey: [-21,-20,-20,-21],
        czerwony:"",
        zielony:"",
        niebieski:""
    }

    
]



console.log(object[0].polozeniex[1]);
let test = new Array;


var ys = -40; //start from rows 3
var xs = -40; //start from col 5
//tworzenie matrycy
var ye = 40;
var xe = 40;
    for(let i = ye; i >= ys; i--){
        test[i] = new Array;
        for (var j = xs; j <= xe; j++)
        {
            test[i][j] = new Array;
            var iloscobjectow = object.length;

            for(var s =0; s<iloscobjectow; s++){
                var wielkoscobjectow = object[s].polozeniex.length;
                if(test[i][j]!=1){
                    for(var s2=0; s2<wielkoscobjectow; s2++){
                        if(object[s].polozeniex[s2]==j && object[s].polozeniey[s2]==i)
                        {
                            
                            test[i][j].push(1);
                        }
                }
            
                }
             
                 
            }
                if(test[i][j]!=1)
            {
                test[i][j].push(0);
            }
              
            
           
        }
        
    }
console.log(test);





for(let i = ye; i > ys; i--){
    for (var j = xs; j < xe; j++)
    {
        document.write(test[i][j]);
    }
    document.write( "<br>");
 
}




var canvas = document.getElementById("stol");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF0000";
var skala =0 ;
//odczytywanie mapy do matrycy
for(let i = ys; i < ye; i++){
    for (var j = xs; j < xe; j++)
    {
        if(test[i][j]==1)
        {

            ctx.fillStyle = "#FF0000";
            ctx.beginPath();
            ctx.arc(j+100,i+100,1,0,2*Math.PI);
            ctx.stroke(); 
        }
    }
 
}




