
class producto{
    constructor(fruta, precio, productor){
        this.fruta = fruta;
        this.precio= precio;
        this.productor = productor;
       
    }
}

let productos =[]

productos.push (new producto("tomate", 100,"sweden"))
productos.push (new producto("frutilla", 150,"francia"))
productos.push (new producto("sandia", 300,"sweden"))
productos.push (new producto("melon", 50,"london"))
productos.push (new producto("banana", 80,"colombia"))

//console.log(productos)

productos.sort(function(a,b){
    return a.precio - b.precio
})
console.table(productos)
