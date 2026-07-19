const express = require("express");
const fs = require("fs");

const app = express();

console.log("ESTE ES MI SERVER NUEVO 🔥");

app.use(express.json());

app.use(express.static("."));


const CLAVE = "Luis2026";


app.post("/respuesta", (req, res) => {

    const respuesta = req.body.mensaje;

    let datos = [];

    if (fs.existsSync("respuestas.json")) {

        const archivo = fs.readFileSync("respuestas.json", "utf8");

        if (archivo.trim() !== "") {
            datos = JSON.parse(archivo);
        }

    }


    datos.push({

        mensaje: respuesta,

        fecha: new Date()

    });


    fs.writeFileSync(
        "respuestas.json",
        JSON.stringify(datos, null, 2)
    );


    res.json({
        estado:"guardado"
    });

});



// 🔐 comprobar contraseña

app.post("/login",(req,res)=>{

console.log("Intento de login:");
console.log(req.body);


const clave = req.body.clave;


if(clave === CLAVE){

console.log("Clave correcta");

res.json({

acceso:true

});


}else{

console.log("Clave incorrecta");

res.json({

acceso:false

});

}


});



app.listen(3000,"0.0.0.0",()=>{

console.log("Servidor funcionando en http://localhost:3000");

});