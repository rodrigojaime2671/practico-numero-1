

//5 VARIABLES CON NOMBRES DISTINTOS//
let nombre = 'rodrigo'
let apellido = 'jaime'
var edad = 22
var sabeProgramar = false
const pueblo = 'escobar'


//VALORES NUMERICOS//
let num1 = 30
let num2 = 100
let num3 = 70
let num4 = 25

//  MAYOR //
console.log (num1 > num2);
console.log (num2 > num3);
console.log (num3 > num4);
// MENOR //
console.log (num4 < num2)
console.log (num3 < num4)
console.log (num2 < num1)
// MENOR O IGUAL //
console.log (num3 <= num2)
console.log (num3 <= num4)
console.log (num2 <= num4)
// MAYOR O IGUAL//
console.log (num1 >= num4)
console.log (num1 >= num2)
console.log (num4 >= num3)
// IGUAL //
console.log (num4 == num2)
console.log (num3 == num1)
console.log (num1 == num2)
// EQUIVALENTES//
console.log (num3 === num2)
console.log (num2 === num4)
console.log (num3 === num1)
// DIFERENTE //
console.log (num2 != num3)
console.log (num3 != num2)
console.log (num4 != num1)
// DISTINTOS // 
console.log (num1 !== num4)
console.log (num3 !== num4)
console.log (num2 !== num1)



//VALORES BOOLEANOS //

let numeroUno = true
let numeroDos = true
let numeroTres = false 
let numeroCuatro = false


// AND (&&) //
console.log (numeroUno && numeroDos)
console.log (numeroTres && numeroCuatro)
console.log (numeroUno && numeroTres)
console.log (numeroDos && numeroCuatro)

// OR (||) // 
console.log (numeroUno || numeroDos)
console.log (numeroDos || numero3)
console.log (numeroTres || numeroCuatro)

// NOT (!) //

console.log (!numeroUno)
console.log (!numeroDos)
console.log (!numeroTres)


// EJERCICIOS PRACTICOS // 


let edades = [ 10, 20, 30, 21]
let sumas = 0
let contador = 0

for (let i = 0; i < edades.length; i++) {
    if (edades[i] > 10) {
        sumas += edades[i]
        contador++;
    }
}

if (contador > 0) {
    let promedio = sumas / contador
    alert("El promedio de edades para alumnos mayores a 10 años es: " + promedio)
} else {
    alert("No hay alumnos mayores a 10 años en el grupo.")
}

// AEROPUESTO // 

let pasaporte = true
let pasajeAerolinea = true
let pcrNegativo = true

if ( pasaporte  && pasajeAerolinea  && pcrNegativo ) {
    console.log ('El pasajero puede viajar')
} else {
    console.log ('El pasajero no puede viajar')
}

// UN SITIO WEB // 

let usuario = 2010
let usuario2 = 2007
let usuario3 = 1983

let anioActual = new Date ().getFullYear ();

let aceptado = anioActual - usuario3

if (aceptado >= 18 ) {
    console.log ('El usuario es mayor de edad')
} else {
    console.log ('El usuario no es mayor de edad')
}

// CALCULADORA BASICA ENTRE 2 NUMEROS //

function suma(num1,num2) {
    return num1 + num2
}

function resta(num1,num2) {
    return num1 - num2
}

function multiplicacion(num1,num2) {
    return num1 * num2
}

function division(num1, num2) {
    if (num2 !==0) {
        return num1 / num2
    } else {
        return 'error'
    }
}

// SUMATORIA //

function sumatoria (array1, array2) {
    if (array1.length !== array2.length) {
        return 'error'
    } 

    let sumaTotal = 0

    for (let c = 0; c < array1.length; c++) {
        sumaTotal += array1[c] + array2[c]
    }
    return sumaTotal
}

let array1 = [20,23,44,21]
let array2 = [23,33,12,80]

let resultado = sumatoria (array1, array2)

if (typeof resultado === 'number') {
    console.log ('la sumatoria total es : ' + resultado)
} else {
    console.log (resultado)
}


// PRODUCTORIA //


function productoria (array3, array4) {
    if (array3.length !== array4.length) {
        return 'error'
    }

    let productoriaTotal = 1

    for (let d = 0; d < array3.length; d++) {
        productoriaTotal *= array3[d] * array4[d] 
    }

    return productoriaTotal
}

let array3 = [23,32,54,12]
let array4 = [32,43,12,64]

let resultadoFinal = productoria (array3, array4)

if (typeof resultadoFinal === 'number') {
    console.log ('resultado final es: ' + resultadoFinal)
} else {
    console.log (resultadoFinal)
}



