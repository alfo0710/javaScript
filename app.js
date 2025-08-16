// Escribe usando los 3 bucles un algoritmo que muestre numeros del 1 al 100


/*
for(let a=0;a<100;a++){
    console.log(a)
}


let a=0;

while(a<100){
    console.log(a);
    a++;}

 let a=0;

do{
    console.log(a);
    a++;
} while (a<100);

*/


// Escribe los numeros comprendidos entre x e y (evaluar x que no se mayor que y)
/*
let x = Number(prompt("Ingresa x:"));
let y = Number(prompt("Ingresa y:"));

if (y < x) {
  let cambio= x;
  x = y;
  y = cambio;
}

for (let a = x + 1; a < y; a++) {
  console.log(a);
}
  */


// Un algoritmo que solcite numeros mientras que sean menores que 50 
// y sino que diga que no esta en el rango
/*
let num = Number(prompt("Ingresa un número menor que 50:"));

if (num < 50) {
  while (num < 50) {
    console.log("Número aceptado:", num);
    num = Number(prompt("Ingresa otro número:"));
  }
  console.log("El número ingresado no está en el rango.");
} else {
  console.log("El número ingresado no está en el rango.");
}
*/


//Que muestre los numeros de dos en dos comprendidos entre 20 y 80
/*
for (let num = 20; num <= 80; num++) {
  if (num % 2 == 0) {
    console.log(num);
  }
}
  */


//Pares o multiplos de tres comprendidos entre 50 y 172
/*
for (let num = 50; num <= 172; num++) {
  if (num % 2 == 0 && num % 3 == 0) {
    console.log(num);
  }
}
*/

//Los no multiplos de 5 comprendidos entre x e y 

/*
let x = Number(prompt("Ingresa el número inicial:"));
let y = Number(prompt("Ingresa el número final:"));

for (let num = x; num <= y; num++) {
  if (num % 5 !== 0) {
    console.log(num);
  }
}
  */

// Los numeros de 5 en 5 de 1 a 100

/*
for (let num = 1; num <= 100; num++) {
  if (num % 5 == 0) {
    console.log(num);
  }
}
  */


// Saludar al usuario por su nombre si este ingresa un numero comprendido entre 12 y 920

let nombre = prompt("¿Cuál es tu nombre?");
let numero = Number(prompt("Ingresa un número entre 12 y 920:"));

if (numero >= 12 && numero <= 920) {
  alert("¡Hola " + nombre + " gracias por ingresar un número válido.");
} else {
  alert("El número no está en el rango permitido.");
}
