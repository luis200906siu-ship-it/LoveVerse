const mensaje="Gracias por aparecer en mi vida cuando menos lo esperaba. Gracias por cada conversación, por cada sonrisa, por cada momento compartido. Tal vez la distancia exista, pero nunca ha sido suficiente para hacer que deje de pensar en ti. 🌹❤️";

let i=0;

function escribir(){

    if(i<mensaje.length){

        document.getElementById("texto").innerHTML+=mensaje.charAt(i);

        i++;

        setTimeout(escribir,35);

    }

}

escribir();

function continuar(){

    localStorage.setItem("progreso",6);

    window.location.href="secreto.html";

} 