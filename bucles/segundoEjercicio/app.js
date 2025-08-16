//Un algoritmo que dado un rango se nos diga cuantos son divisibles entre 5 pero no entre 3

/*
let inicio = Number(prompt("Ingrese el numero inicial del rango:"));
let fin = Number(prompt("Ingrese el numero final del rango:"));
let contador = 0;

for (let num = inicio; num <= fin; num++) {
  if (num % 5 == 0 && num % 3 !== 0) {
    contador++;
  }
}


console.log("Cantidad de numeros divisibles entre 5 pero no entre 3:");
console.log(contador)
  */

//Mostrar los impares comprendidos entre 20 y 80 ¿Cuantos son?

/*
let numeros = 0;

for (let num = 21; num < 80; num += 2) {
  console.log(num);
  numeros++;
}

console.log("Cantidad de números impares entre 20 y 80:");
console.log(numeros)

*/
//Decir cuantos intentos le toma el usuario recibir un numero negativo
/*
let intentos = 0;
let numero;

do {
  numero = Number(prompt("Ingrese un numero:"));
  intentos++;
} while (numero >= 0);

console.log("Numero de intentos hasta recibir un numero negativo:");
console.log(intentos)
*/

//Calcula la sumatoria de x a y 
// ej x=5 y y=8   5+6+7+8  RESULTADO DE ESTO

let x = Number(prompt("Ingrese el valor de X:"));
let y = Number(prompt("Ingrese el valor de Y:"));
let suma = 0;

for (let num = x; num <= y; num++) {
  suma += num;
}

console.log("El resultado de la suma es:");
console.log(num)


// Hacer lo mismo que lo de arriba pero multiplicando

//Crea un algoritmo que muestre las tablas de multiplicar segun el numero insertado.
//tendria que imprimir 1*6=6 ...
