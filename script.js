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
class datos{
    constructor(nombre,apellido,telefono,email,piel,afeccion,tratamiento,fecha){
        this.nombre = nombre
        this.apellido = apellido
        this.telefon = telefono
        this.email = email
        this.piel = piel
        this.afeccion = afeccion
        this.tratamiento = tratamiento
        this.fecha = fecha
    }
    verificacion(){
        alert(`hola ${nombre} ${apellido} con el numero de telefono ${telefono} y el email ${email} nos contactaremos`)
    }
}

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
