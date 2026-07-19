const texto = "Entre millones de estrellas... volvería a encontrarte una y otra vez. Gracias por recorrer este pequeño universo que hice con todo mi cariño. Tal vez no sea perfecto, pero cada línea de este proyecto fue pensada para sacarte una sonrisa. ❤️";

let i = 0;

function mostrarMensaje(){

    document.getElementById("inicio").style.display = "none";

    document.getElementById("final").style.display = "block";

    escribir();

}

function escribir(){

    if(i < texto.length){

        document.getElementById("mensaje").innerHTML += texto.charAt(i);

        i++;

        setTimeout(escribir,35);

    }

}