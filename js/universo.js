// ==============================
// LOVEVERSE 2.0
// Sistema del Universo
// ==============================

// Si es la primera vez que entra
if(localStorage.getItem("progreso")==null){

    localStorage.setItem("progreso",1);

}

let progreso = Number(localStorage.getItem("progreso"));

const barra = document.getElementById("barra");
const porcentaje = document.getElementById("porcentaje");

const planetas = [

    {
        id:"p1",
        emoji:"💌",
        pagina:"carta.html"
    },

    {
        id:"p2",
        emoji:"⭐",
        pagina:"estrella.html"
    },

    {
        id:"p3",
        emoji:"🌙",
        pagina:"luna.html"
    },

    {
        id:"p4",
        emoji:"❤️",
        pagina:"corazon.html"
    },

    {
        id:"p5",
        emoji:"🌹",
        pagina:"rosa.html"
    },

    {
        id:"p6",
        emoji:"✨",
        pagina:"secreto.html"
    }

];

actualizarUniverso();

function actualizarUniverso(){

    const porcentajeActual = Math.round((progreso/6)*100);

    barra.style.width = porcentajeActual + "%";

    porcentaje.innerHTML = porcentajeActual + "%";

    planetas.forEach((planeta,index)=>{

        const elemento = document.getElementById(planeta.id);

        if(index < progreso){

            elemento.innerHTML = planeta.emoji;

            elemento.classList.remove("bloqueado");

            elemento.classList.add("disponible");

            elemento.onclick = ()=>{

                location.href = planeta.pagina;

            };

        }else{

            elemento.innerHTML = "🔒";

            elemento.classList.remove("disponible");

            elemento.classList.add("bloqueado");

            elemento.onclick = ()=>{

                alert("Primero debes descubrir el planeta anterior ❤️");

            };

        }

    });

}

