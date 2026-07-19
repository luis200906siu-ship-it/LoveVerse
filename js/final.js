let numero = 0;

function mostrarContador(){

    document.getElementById("contador").style.display = "block";

    contar();

}

function contar(){

    numero += 5;

    document.getElementById("numero").innerHTML = numero;

    if(numero < 1000){

        setTimeout(contar,25);

    }else{

        document.getElementById("numero").innerHTML = "∞";

document.getElementById("fraseFinal").innerHTML += `
<br><br>

<button onclick="abrirMensaje()" class="btnInicio">
Abrir mi última sorpresa ❤️
</button>

`;
    }

}

function volverInicio(){

    window.location.href = "index.html";

}

function abrirMensaje(){

    window.location.href = "mensaje.html";

}
