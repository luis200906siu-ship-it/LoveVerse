const mensaje = "Sueño con el día en que la distancia sea solo un recuerdo. Poder caminar contigo, abrazarte sin mirar el reloj, reírnos por cualquier cosa y crear muchísimos recuerdos juntos. No sé cuándo será, pero tengo la ilusión de que algún día podremos vivir todo eso. ❤️";

let i = 0;

function escribir(){

    if(i < mensaje.length){

        document.getElementById("texto").innerHTML += mensaje.charAt(i);

        i++;

        setTimeout(escribir,35);

    }

}

escribir();

function continuar(){

    localStorage.setItem("progreso",5);

    window.location.href="rosa.html";

}
