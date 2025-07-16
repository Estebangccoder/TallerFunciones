import { PI, IVA, DESCUENTO } from "./constantes.js"

function sumar(a,b){
    return a+b
}
function restar(a,b){
    return a-b
}
function multiplicar(a,b){
    return a*b
}

function calcularAreaCirculo(radio){
    let area = radio*PI
    return area
}

function calcularTotal(precio, cantidad){
    return precio*cantidad
}

function aplicarImpuestos(total){
    return (1+IVA)*total
}

function aplicarDescuento(total){
    return (1+DESCUENTO)*total
}
export {sumar, restar, multiplicar, calcularAreaCirculo, calcularTotal, aplicarDescuento, aplicarImpuestos}