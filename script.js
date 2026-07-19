
const texto = "Aunque la distancia nos separe por kilómetros, siempre encuentro una forma de llegar hasta ti. ❤️";

let i = 0;

function escribir(){

    if(i < texto.length){

        document.getElementById("typing").innerHTML += texto.charAt(i);

        i++;

        setTimeout(escribir,45);

    }

}

escribir();

const frases = [

"Hay personas...",

"que llegan a nuestra vida...",

"sin pedir permiso...",

"y terminan convirtiéndose...",

"en nuestro lugar favorito. ❤️"

];

let indice = 0;

const intro = document.getElementById("intro");

const introText = document.getElementById("introText");

document.getElementById("startBtn").onclick = ()=>{

    const musica = document.getElementById("musica");

    if(musica){
        musica.play();
    }

    intro.style.display="flex";

    mostrarFrase();

}

function mostrarFrase() {

    introText.innerHTML = frases[indice];

    indice++;

    if (indice < frases.length) {

        setTimeout(mostrarFrase, 2000);

    } else {

        setTimeout(() => {

            window.location.href = "historia.html";

        }, 2500);

    }

}

for(let i=0;i<80;i++){

    const estrella=document.createElement("div");

    estrella.className="estrella";

    estrella.style.left=Math.random()*100+"vw";

    estrella.style.top=Math.random()*100+"vh";

    estrella.style.animationDelay=Math.random()*5+"s";

    estrella.style.animationDuration=(3+Math.random()*4)+"s";

    document.body.appendChild(estrella);

}

function volverInicio(){
    window.location.href = "index.html";
}