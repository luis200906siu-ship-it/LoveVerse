function abrirCarta(){

    document.querySelector(".sobre").style.display = "none";

    document.getElementById("carta").style.display = "block";

}

function continuar(){

    // Desbloquea el planeta ⭐
    localStorage.setItem("progreso", 2);

    // Va a la página de la estrella
    window.location.href = "estrella.html";

}