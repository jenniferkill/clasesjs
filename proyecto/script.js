let profesionales =[]
let turnos = []
let clientes = []

function ingresoCliente (){

    const dni = prompt(`ingresa tu DNI: `)
    const nombre = prompt(`ingresa tu nombre: `)
    const apellido = prompt(`ingresa tu apellido: `)
    const telefono = parseInt(prompt(`ingresa tu telefono: `))
    const email = prompt(`ingresa tu email:`)
   
    clientes.push(new cliente(dni,nombre,apellido,telefono,email))
}

function ingresoProfesional (){

    const dni = prompt(`ingresa tu DNI: `)
    const nombre = prompt(`ingresa tu nombre completo: `)
    const telefono = parseInt(prompt(`ingresa tu telefono: `))
    const email = prompt(`ingresa tu email:`)
    const dias = prompt(`ingresa par o impar (Par: martes, jueves, sabado  Impar: lunes, miercoles, viernes): `)
    const horarios = prompt(`ingrese el horario disponible (Mañana o Tarde): `)

    profesionales.push(new profesional(dni,nombre,telefono,email,dias,horarios))
}

function ingresoTurno(){
   
    const dni = prompt(`ingresa tu DNI: `)
    const horario = prompt(`ingresa el horario: `)
    const tratamiento = prompt(`ingresa el tratamiento: `)
    const profesional = parseInt(prompt(`ingresa el nombre del profesional: `))
    const dia = prompt(`ingresa ingresa el dia:`)
    turnos.push(new turno(dni,horario,tratamiento,profesional,dia))
}
function consultarNombre(array){
    for (obj of array){
        let nombre  = obj.nombre
        console.log(nombre)
    }

}

ingresoCliente()
ingresoProfesional ()
ingresoTurno()
consultarNombre(profesionales)

console.log (profesionales)
console.log (clientes)
console.log(turnos)
