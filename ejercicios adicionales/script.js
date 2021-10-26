let prestamo = parseInt(prompt("ingrese el monto del prestamo:"));
let iva1 =parseInt(prompt("ingrese el porcentaje de interes por años: "));
let alos =parseInt(prompt("ingrese la cantidad de años: "));
const interes = 3
let meses =alos * 12

let intAnual = (alos,interes,iva1) => (interes + iva1)*alos
let intDinero = (prestamo,intAnual) => (prestamo * intAnual)/100
let pagoTotal = (intDinero,prestamo) => intDinero+prestamo
let pagoMes = (pagoTotal, meses) => pagoTotal/meses

let porcenAnual = intAnual(alos,interes,iva1)
let intereses = intDinero(prestamo,porcenAnual)
let total = pagoTotal(intereses,prestamo)
let mes = pagoMes(total,meses)

alert (`vas a pagar por ${meses} meses ${mes} y al terminar los ${alos} años vas a pagar ${total} `);



