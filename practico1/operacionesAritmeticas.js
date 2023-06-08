let num1 = 12;
let num2 = 10;
let num3 = 4;
let num4 = 6;

let suma = num1 + num2;

let resta = num4 - num3;

let resultadoFinal = suma * resta;

let esPar = (resultadoFinal % 2) == 0;

let mensaje = "mis variables de entrada fueron: " + num1 + ", " + num2 + ", " + num3 + ", " + num4 + ". La respuesta a verificar si el resultado final es par es: " + esPar;

console.log(mensaje)