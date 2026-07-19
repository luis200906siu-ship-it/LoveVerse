const mensaje = "Cada noche, antes de dormir, pienso en ti. Me pregunto cómo estuvo tu día, si sonreíste mucho y si también, por un momento, pensaste en mí. Aunque la distancia exista, siempre encuentro una forma de sentirte cerca. 🌙❤️";

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

    localStorage.setItem("progreso",4);

    window.location.href="corazon.html";

}