function darSorpresa() {
    const boton = document.getElementById('miBoton');
    const botonParte2 = document.getElementById('secret-button');
    const emoji = document.getElementById('emoji-principal');
    const titulo = document.getElementById('titulo-principal');
    const parrafo = document.getElementById('parrafo-principal');
    const body = document.body;

    boton.style.display = "none"; 
    parrafo.innerText = "LGI6H-TID8J-WPK3H";
    emoji.innerText = "🎁"; 

    setTimeout(() => {
        titulo.innerText = "¡EL HUESASO!";
        parrafo.innerText = "¡NO VA A LLEVA' EL DIABLAZO!";
        
        emoji.classList.add('temblor-intenso');

        let contadorColores = 0;
        const coloresFiesta = ['#ff5f6d', '#ffc371', '#43cea2', '#185a9d', '#8e44ad'];
        

        const intervaloFiesta = setInterval(() => {
            body.style.backgroundColor = coloresFiesta[contadorColores % coloresFiesta.length];
            contadorColores++;
        }, 150);


        setTimeout(() => {
            clearInterval(intervaloFiesta); 
            emoji.classList.remove('temblor-intenso'); 
            
            body.style.backgroundColor = "#a8e6cf"; 

            emoji.innerHTML = "<img src='resources/klaus.png'>";
            titulo.innerText = "¡TOMA TU REGALO!";
            parrafo.innerHTML = "";
            botonParte2.classList.remove("ocultar");
            
        }, 3000); 

    }, 1000); 
}

let cantidadClics = 0;
function haciaFase2 () {
    cantidadClics++;
    const boton = document.getElementById('secret-button');
    switch (cantidadClics) {
        case 1:
            boton.setAttribute("title", "Ya dejame");
            boton.style.height = "20px";
            boton.style.width = "20px";
            boton.style.top = "0px";
            boton.style.right = "600px";
            boton.style.background = "#a8b5af";
            alert("¿Por qué me tocas el chilito?");
            break;
        
        case 2:
            boton.setAttribute("title", "Por Dios");
            boton.style.height = "10px";
            boton.style.width = "10px";
            boton.style.top = "600px";
            boton.style.right = "100px";
            boton.style.background = "#a8a5af";
            alert("?");
            break;

        case 3:
            boton.setAttribute("title", "Sueltame");   
            boton.style.height = "5px";
            boton.style.width = "5px";        
            boton.style.top = "100px";
            boton.style.right = "100px";
            boton.style.background = "#d8a5af";
            break;

        case 4:
            boton.setAttribute("title", "Coñazo");
            alert("Tu me tiene harto muchacho el diablo... mira el medio");
            document.getElementById('emoji-principal').style.display = "none";
            document.getElementById('titulo-principal').style.display = "none";
            document.getElementById('parrafo-principal').innerHTML = "Ahora si, preparate y...";
            document.getElementById('insulto').classList.remove("ocultar");
            document.getElementById('miBotonPase2').classList.remove("ocultar");
            setTimeout(() => {
                document.getElementById('insulto').classList.add("ocultar");
            }, 1000);
            break;

        case 5:
            boton.setAttribute("title", "?");
            alert("?");         
            break;
        
        case 6:
            boton.setAttribute("title", "i swear to god");
            alert("Para.");         
            break;
        
        case 7:
            boton.setAttribute("title", "????");
            alert("????????");         
            break;

        case 8:
            boton.style.background = "#9b77a4ff";
            break;
        
        case 9:
            boton.style.background = "#82316bff";
            break;
        
        case 10:
            boton.style.background = "#620d26ff";
            break;

        case 11:
            boton.style.background = "#ce1414ff";
            break;

        case 12:
            console.log("FAAAAA");
            
            document.getElementById("myAudio").play(); 
            setTimeout(() => {
                boton.style.display = "none";
                document.getElementsByClassName("tarjeta")[0].style.display = "none";
                document.body.style.backgroundColor = "white";
            }, 1000);
            
            setTimeout(() => {
                alert("Ahora por fuñir, vete desde el principio por sabio.");
            }, 4000);
            break;

        default:
            break;
    }
}