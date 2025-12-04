function darSorpresa() {
    // 1. Obtener los elementos que vamos a manipular
    const boton = document.getElementById('miBoton');
    const botonParte2 = document.getElementById('secret-button');
    const emoji = document.getElementById('emoji-principal');
    const titulo = document.getElementById('titulo-principal');
    const parrafo = document.getElementById('parrafo-principal');
    const body = document.body;

    // 2. Fase 1: Anticipación (Ocultar botón y cambiar texto)
    boton.style.display = "none"; // Desaparece el botón
    parrafo.innerText = "[CODIGO PARA STEAM 1]";
    emoji.innerText = "🎁"; // Cambia el plátano por un regalo

    // Pequeña pausa de 1 segundo antes del caos
    setTimeout(() => {
        titulo.innerText = "¡EL HUESASO!";
        parrafo.innerText = "¡NO VA A LLEVA' EL DIABLAZO!";
        
        // 3. Fase 2: El Caos (Temblor y luces de fiesta)
        emoji.classList.add('temblor-intenso'); // Activar animación de temblor CSS

        let contadorColores = 0;
        const coloresFiesta = ['#ff5f6d', '#ffc371', '#43cea2', '#185a9d', '#8e44ad'];
        
        // Iniciar el parpadeo del fondo cada 150ms
        const intervaloFiesta = setInterval(() => {
            body.style.backgroundColor = coloresFiesta[contadorColores % coloresFiesta.length];
            contadorColores++;
        }, 150);

        // 4. Fase 3: La Gran Revelación (después de 3 segundos de caos)
        setTimeout(() => {
            clearInterval(intervaloFiesta); // Detener las luces
            emoji.classList.remove('temblor-intenso'); // Detener el temblor
            
            // Color de fondo final de celebración (verde menta suave)
            body.style.backgroundColor = "#a8e6cf"; 

            // --- AQUÍ PONES EL MENSAJE REAL DEL REGALO ---
            emoji.innerHTML = "<img src='resources/klaus.png'>";
            titulo.innerText = "¡TOMA TU REGALO!";
            parrafo.innerHTML = "";
            botonParte2.classList.remove("ocultar");
            
        }, 3000); // 3000ms = 3 segundos de espera

    }, 1000); // Espera inicial de 1 segundo
}

let cantidadClics = 0;
function haciaFase2 () {
    cantidadClics++;
    const boton = document.getElementById('secret-button');
    switch (cantidadClics) {
        case 1:
            boton.setAttribute("title", "Ya dejame");
            boton.style.height = "50px";
            boton.style.width = "50px";
            boton.style.top = "0px";
            boton.style.right = "600px";
            alert("¿Por qué me tocas el chilito?");
            break;
        
        case 2:
            boton.setAttribute("title", "Por Dios");
            boton.style.height = "10px";
            boton.style.width = "10px";
            boton.style.top = "600px";
            boton.style.right = "100px";
            boton.style.background = "#a8e5af";
            alert("?");
            break;

        case 3:
            boton.setAttribute("title", "Sueltame");   
            boton.style.height = "5px";
            boton.style.width = "5px";        
            boton.style.top = "100px";
            boton.style.right = "100px";
            boton.style.background = "#a8a5af";
            break;

        case 4:
            boton.setAttribute("title", "Coñazo");
            alert("Tu me tiene harto muchacho el diablo... mira el medio");
            document.getElementById('emoji-principal').style.display = "none";
            document.getElementById('titulo-principal').style.display = "none";
            document.getElementById('parrafo-principal').style.display = "none";
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