/*
let edad = parseInt(prompt("ingrese la edad: "))

if( edad <= 17){
    alert ("eres menor de edad en argentina");
}else if(edad  >=  18  && edad <= 21){
    alert("eres menor de edad en estados unidos");
}else{
    alert("eres mayor de edad en el mundo");
}

let nombre = prompt("ingresar su Nombre:")
let apellido = prompt("ingresar su Apellido:")
let edad = prompt("ingresar su edad:")

alert(`su nombre completo es  ${nombre}  ${apellido} y su edad es ${edad}.`);

let nombre = prompt("ingresar su Nombre:");
let apellido = prompt("ingresar su Apellido:");
let edad = parseInt(prompt("ingresar su edad:"));
let direccion = prompt("ingresar su direccion:");
let birthday = parseInt(prompt("ingresar su dia de cumpleaños (dos digitos):"));
let birthmont = parseInt(prompt("ingresar su mes de cumpleaños (dos digitos):"));


alert(`datos de carnet \n  ${edad}${birthday}${birthmont}  \n nombre completo: ${nombre} ${apellido} \n fecha de nacimiento ${birthday}-${birthmont} \n direccion ${direccion}`);


let producto = prompt("ingrese el nombre de una fruta");
let pro1 = "tomate"
let pro2 = "frutilla"
let pro3 = "uva"

if (producto == pro1){
    alert (`el kilo de ${producto} es 100 pesos`);
}else if (producto == pro2){
    alert(`el kilo de ${producto} es de 50 pesos`);
}else if (producto == pro3){
    alert(`el kilo de ${producto}es de 70 pesos`);
}else{
    alert(`no hay stock`)
}

let numero = prompt("ingrese el numero de dias que tiene de vacaiones:");

for(let i = 1; i<=numero; i++){
    console.log(`dia de vacaciones ${i}`);
}

let numero = prompt("ingrese el numero de dias que tiene de vacaiones:");

for(let i = 1; i<=numero; i++){
    console.log(`dia de vacaciones ${i}`);
    if(i==4){
        console.log(`terminaron las vacaciones`)
        break;
    }
}

let aula =[]

for(let i =0; i< 3; i++){
    let alumnos = prompt(" ingrese el nombre del alumno: ")
    aula[i] = alumnos
}
console.log(aula)
*/
/*
let numero= parseInt(prompt("ingrese un numero de 1 a 9"));
let primeros = []

for(let i = 1; i < 10; i++){
    primeros[i]=numero * i
}
console.log(`estos ${primeros} es la tabla de multiplicar de ${numero}`)

function tablamul(param){

    for(let i = 0; i < 11; i++){
        primeros[i]=param * i
    } 
    console.log(`estos ${primeros} es la tabla de multiplicar de ${param}`)
}

tablamul(numero)
tablamul(num2)*/
/*
let cantidad = parseInt(prompt("ingrese cantidad de materias: ")) 
let materias = []
let suma = 0

function calculoPromedio(cantidad,materias,suma){
    for (let i = 0; i < cantidad; i++){
        materias[i] = parseInt(prompt(`ingrese la nota de la materia  ${i+1} :`))
    }

    for (let i= 0; i < materias.length; i++){
        suma= materias[i] + suma
    }
return(suma / cantidad)
}

let promedio = calculoPromedio(cantidad,materias,suma)
let redondeo = promedio.toFixed(1)
if (promedio <= 4){
    alert(`el promedio de tus notas es ${redondeo} y tus notas son muy bajas`)
}else if (promedio >= 5 && promedio <= 8){
    alert(`el promedio de tus notas es ${redondeo} y tus notas van bien pero no eres el mejor`)
}else {
    alert(`el promedio de tus notas es ${redondeo} y tus notas son perfectas`)
}
*/

//objeto para el proyecto integrador 
/*

const nombre = prompt(`ingresa tu nombre:`)
const apellido = prompt(`ingresa tu apellido:`)
const telefono = parseInt(prompt(`ingresa tu telefono:`))
const email = prompt(`ingresa tu email:`)
const piel = prompt(`ingresa tu tipo de piel:`)
const afeccion= prompt(`tienes alguna condiccion especial en la piel`)
const tratamiento= prompt(`que tipo de tratamiento buscas`)
const fecha = prompt(`selecciona una fecha`)




let persona1 = new datos(nombre,apellido,telefono,email,piel,afeccion,tratamiento,fecha)
persona1.verificacion();


//objetos
class Profesional {
    constructor (dni,nombre){
        this.dni = dni;
        this.nombre = nombre;
        
    }
}
class Cliente {
    constructor(dni,nombre){
        this.dni = dni;
        this.nombre = nombre;
    }
} 
// arrays
let profesionales =[]
let clientes = []

function ingresoCliente (){

    const dni = prompt(`Cliente nuevo ingresa tu DNI: `)
    const nombre = prompt(`Cliente nuevo ingresa tu nombre: `)
    
   
    clientes.push(new Cliente(dni,nombre))
}

function ingresoProfesional (){

    const dni = prompt(`Profesional nuevo ingresa tu DNI: `)
    const nombre = prompt(`Profesional nuevo ingresa tu nombre completo: `)
    

    profesionales.push(new Profesional(dni,nombre))
}

//funciones para crear el array
for (let i= 0; i<=2; i++){
    ingresoProfesional()
}

for (let i= 0; i<=2; i++){
    ingresoCliente()
}

//ingreso de html 
let altaClientes = document.getElementById("altaClientes")


clientes.forEach(cliente =>{
    altaClientes.innerHTML += `
    <div id ="cliente${cliente.id}">
    <p> DNI del Cliente: ${cliente.dni} </p>
    <p> Nombre del Cliente: ${cliente.nombre} </p>
`
})

let altaProfesionales = document.getElementById("altaProfesionales")

profesionales.forEach(profesional =>{
    altaProfesionales.innerHTML += `
    <div id ="profesional${profesional.id}">
    <p> DNI del Profesional: ${profesional.dni} </p>
    <p> Nombre del Profesional: ${profesional.nombre} </p>
`
})
let clientes = []
*/

/*
function ingresoCliente (){

  
    
   
    clientes.push(new Cliente(dni,nombre))
}
clientes.forEach(cliente =>{
    altaClientes.innerHTML += `
    <div id ="cliente${cliente.id}">
    <p> DNI del Cliente: ${cliente.dni} </p>
    <p> Nombre del Cliente: ${cliente.nombre} </p>
`
})

for (let i= 0; i<=2; i++){
    ingresoCliente()
}*/
class Cliente {
    constructor(id,dni,nombre,apellido,telefono,email){
        this.id =id;
        this.dni = dni;
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.email = email;
    }
}
let id = 1;
let clientes = []
let formCliente = document.getElementById("cliente")
let altaClientes = document.getElementById("altaClientes")


function clear() {
    document.getElementById("cliente").reset();
  }
formCliente.addEventListener("submit",(e) => {
    e.preventDefault()
    let datosCliente = new FormData(e.target)
    let cliente = new Cliente(id,datosCliente.get("dni"),datosCliente.get("nombre"),datosCliente.get("apellido"),datosCliente.get("telefono"),datosCliente.get("email"))
    id++
    clientes.push(cliente)
    //no lo sume 
    altaClientes.innerHTML =""
    clear(formCliente)
    clientes.forEach(cliente =>{

        altaClientes.innerHTML += `
        <div ${cliente.id}">
        <p> finalizaste tu suscripcion como cliente con Dni ${cliente.dni} y tu nombre ${cliente.nombre} ${cliente.apellido} telefono ${cliente.telefono} y tu email ${cliente.email}</p>
        

    `
    })
} )

