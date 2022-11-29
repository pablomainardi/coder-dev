const boton = document.getElementById("boton")
boton.addEventListener("click", preguntarNombre)

const h1 = document.getElementById("h1")

function preguntarNombre() {
    const nombre = prompt("introduce tu nombre")
    mostrarNombre(nombre)
    console.log(nombre)
}

function mostrarNombre(nombre) {
    h1.textContent = nombre
}

var plataBilletera = 500;


   /*     console.log("hola desde la consola");
        document.write("<img src='https://placekitten.com/g/200/300'>");
        const h1 = document.getElementById("h1");
        console.log("h1");

        */