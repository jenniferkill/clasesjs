/*const pokemon1 = new pokemon("pikachu", "electrico", "amarillo", 10, 15)
const pokemon2 = new pokemon("charmander", "Fuego", "Rojo", 8, 12)
const pokemon3 = new pokemon("Eevee", "Normal", "Marron", 7, 11)

pokemon1.moverse(20)
console.log(pokemon1.tipo)
//aqui le digo cual es el pokemon atacado y eso activa al tiempo el recibir ataque 
pokemon1.atacar(pokemon2)

let parrafos = document.getElementsByClassName("parrafos")
let etiquetaParrafos = document.getElementsByTagName("p")
let parrafo1 = document.getElementById("parrafo1")

console.log(parrafos[0].children[0])
console.log(parrafo1)
console.log(etiquetaParrafos[0])

let parrafos2 = document.getElementById("parrafos2")
let Parrafos2Clase = document.getElementsByClassName("parrafos2")
console.log(parrafos2)
console.log(Parrafos2Clase)

let etiquetaP = document.createElement("p")
etiquetaP.innerText = "hola coders!"
etiquetaP.id = "etiquetaP"
etiquetaP.className = "etiquetaClass"
parrafos2.appendChild(etiquetaP)
parrafos2.removeChild(etiquetaP)

parrafos2.innerHTML += `
    <p id="parrafos${5}" class="claseParrafo${5}">hola Gente</p>
`
*/
class Producto {
    constructor(id, nombre, precio, stock){
        this.id =id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}

const producto1 = new Producto(1,"yerba mate", 400, 20)
const producto2 = new Producto(2,"cafe", 500, 25)
const producto3 = new Producto(3,"te", 150, 10)
const producto4 = new Producto(4,"leche", 80, 30)

const productos = [producto1, producto2, producto3, producto4]

let divProductos = document.getElementById("divProductos")

for(let producto of productos){
    divProductos.innerHTML += `
        <div id ="producto${producto.id}">
        <p> Nombre: ${producto.nombre} </p>
        <p> Precio: ${producto.precio} </p>
        <p> Stock: ${producto.stock} </p>
        
    `
}

productos.forEach(producto =>{
     divProductos.innerHTML += `
        <div id ="producto${producto.id}">
        <p> Nombre: ${producto.nombre} </p>
        <p> Precio: ${producto.precio} </p>
        <p> Stock: ${producto.stock} </p>
        
    `
})
