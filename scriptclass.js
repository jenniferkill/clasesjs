const pokemon1 = new pokemon("pikachu", "electrico", "amarillo", 10, 15)
const pokemon2 = new pokemon("charmander", "Fuego", "Rojo", 8, 12)
const pokemon3 = new pokemon("Eevee", "Normal", "Marron", 7, 11)

pokemon1.moverse(20)
console.log(pokemon1.tipo)
//aqui le digo cual es el pokemon atacado y eso activa al tiempo el recibir ataque 
pokemon1.atacar(pokemon2)