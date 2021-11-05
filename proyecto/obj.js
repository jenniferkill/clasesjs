// altas 
class Profesional {
    constructor (dni,nombre,telefono,email,dias,horarios){
        this.dni = dni;
        this.nombre = nombre;
        this.telefono = telefono;
        this.email = email;
        this.tratamientos = "";
        this.dias = dias;
        this.horarios = horarios;
    }
    horas(){
        if (this.horarios == "tarde"){
            console.log(`se agregan para el profesional ${this.nombre} las horas de la tarde`)
        }else{
            console.log(`se agrega para el profesional ${this.nombre} los turnos de la mañana`)
        }
    }
}
class Turno{
    constructor(dniCliente, horario, tratamiento, dniprofesional,dia){
        this.dniCliente = dniCliente;
        this.horario = horario;
        this.tratamiento = tratamiento;
        this.dniprofesional = dniprofesional;
        this.dia = dia;
    }
    confirmacion(){
        console.log(`tu turno quedo asignado para el ${this.dia} con el profesional ${this.dniprofesional} en el horario ${this.horario}`)
    }
}
class Cliente {
    constructor(dni,nombre,apellido,telefono,email){
        this.dni = dni;
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.email = email;
        this.tratamiento = "";
    }
    verificacion(){
        console.log(`hola ${this.nombre} ${this.apellido} con el numero de telefono ${this.telefono} y el email ${this.email} nos contactaremos`)
    }
}