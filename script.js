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
let numero= parseInt(prompt("ingrese un numero de 1 a 9"));
let primeros = []
for(let i = 1; i < 10; i++){
    primeros[i]=numero * i
}
console.log(`estos ${primeros} es la tabla de multiplicar de ${numero}`)