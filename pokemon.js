class Pokemon {
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

