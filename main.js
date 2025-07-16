import { PI, IVA, DIAS_SEMANA } from './constantes.js';


import {sumar, restar, multiplicar, calcularAreaCirculo, calcularTotal, aplicarDescuento, aplicarImpuestos} from './operaciones_matematicas.js'

function precioConIva(precioSinIva){
    let precioTotal=(1+IVA)*precioSinIva
    return precioTotal
}

function diaSemana(numeroDia){
    return DIAS_SEMANA[numeroDia-1]
}

console.log(calcularAreaCirculo(5))
console.log(precioConIva(100))
console.log(diaSemana(3))

console.log(sumar(2,3))
console.log(restar(2,3))
console.log(multiplicar(2,3))
console.log(calcularAreaCirculo(2))

let producto1=calcularTotal(100,10)
let producto2=calcularTotal(120,50)
let producto3=calcularTotal(150,20)
console.log(producto1)
console.log(producto2)
console.log(producto3)
console.log("Impuestos")
console.log(aplicarImpuestos())
console.log(aplicarDescuento())

let producto1Iva=aplicarImpuestos(producto1)
let producto2Iva=aplicarImpuestos(producto2)
let producto3Iva=aplicarImpuestos(producto3)
console.log(producto1Iva)
console.log(producto2Iva)
console.log(producto3Iva)

let producto1Descuento=aplicarImpuestos(producto1Iva)
let producto2Descuento=aplicarImpuestos(producto2Iva)
let producto3Descuento=aplicarImpuestos(producto3Iva)

console.log(producto1Descuento)
console.log(producto2Descuento)
console.log(producto3Descuento)


console.log(`El precio total del producto 1 es ${producto1+producto1Iva-producto1Descuento}`)
console.log(`El precio total del producto 2 es ${producto2+producto2Iva-producto2Descuento}`)
console.log(`El precio total del producto 3 es ${producto3+producto3Iva-producto3Descuento}`)