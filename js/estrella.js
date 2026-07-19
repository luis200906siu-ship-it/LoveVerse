const mensaje = "Me gusta tu forma de ser, tu sonrisa, cómo logras alegrar mis días incluso desde lejos y cómo haces que cada conversación contigo sea especial. Gracias por ser tú. ❤️";

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

    localStorage.setItem("progreso",3);

    window.location.href="luna.html";

}