const paginas = [

`No sé cómo empezó todo...`,

`Pero un día llegaste a mi vida y todo comenzó a verse diferente. ❤️`,

`Aunque haya kilómetros entre nosotros, nunca he sentido que estés lejos de mi corazón.`,

`Cada mensaje tuyo alegra mi día.`,

`Cada llamada hace que la distancia duela un poquito menos.`,

`Y esto apenas es el comienzo... ❤️`

];

let pagina = 0;

function siguientePagina(){

    const libro=document.querySelector(".libro");

    libro.classList.add("pasar");

    setTimeout(()=>{

        pagina++;

        if(pagina<paginas.length){

            document.getElementById("mensaje").innerHTML=paginas[pagina];

            libro.classList.remove("pasar");

        }else{

           window.location.href="universo.html";

        }

    },300);

}