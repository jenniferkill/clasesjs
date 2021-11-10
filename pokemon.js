/*class Pokemon {
    constructor(nombre,tipo,color,poder,vida){
        this.nombre = nombre;
        this.tipo = tipo;
        this.color = color;
        this.poder = poder;
        this.vida = vida;
        this.nivel =1
    }

    moverse(velocidad){
        console.log(`elpokemon ${this.nombre} se esta moviendo a ${velocidad} km/h`)
    }
    atacar(pokemonAtacado){
        console.log(`el pokemon ${pokemonAtacado.nombre} esta siendo atacado con un daño de ${this.poder}`)
        pokemonAtacado.recibirAtaque(this.poder)
        this.nivel += 2
    }
    recibirAtaque(dañoAtaque){
        this.vida-=dañoAtaque
        if (this.vida <= 0){
            console.log(`elpokemon ${this.nombre} ha sido derrotado`)
        }else{
            console.log(`elpokemon ${this.nombre} sigue vivo`)
        }
    }
}
*/
let parrafos = document.getElementsByClassName("parrafos")
let eqtiquetaParrafos = document.getElementsByTagNAme("p")
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
        <div id ="productos${producto.id}">
        <p> Nombre: ${producto.nombre} </p>
        <p> Precio: ${producto.precio} </p>
        <p> Stock: ${producto.stock} </p>
        
    `
}


