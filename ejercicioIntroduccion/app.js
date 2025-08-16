/* Consignas

1- Dado el precio de un producto mostrar este junto con su precio + IVA
2- Dado el valor de un articulo de electronica mostrar este en pesos y euros
3- Dado: Base - Altura devolver el area de un triangulo
4- Lo mismo con cuadrado rectangulo y circulo
5- investiga sobre funciones matematicas en js pow sqrt
6- calcula x a la y y raiz cuadrada de x

*/ 

let precio=1000
console.log("Precio con IVA: ",precio * 0.22 )

let precioArticulo=44000
console.log("Valor del articulo en pesos: ", precioArticulo)
console.log("Valor del articulo en dolares: ", precioArticulo/44)

//Triangulo
let base = 10;
let altura = 5;
console.log("Área del triangulo:", (base * altura) / 2);

// Cuadrado
let lado = 4;
console.log("Área del cuadrado:",lado * lado);

// Rectángulo
let baseRect = 5;
let alturaRect = 3;
console.log("Área del rectangulo:", baseRect * alturaRect);

// Círculo
let radio = 3
console.log("Área del círculo:", Math.PI * radio * radio); 



// Potencia
let potencia = Math.pow(2, 3); // Sirve para elevar un numero  Math.pow(x, y) y es el num elevado
console.log("Potencia:", potencia);

// Raíz cuadrada de x
let raiz = Math.sqrt(5); // Raiz cuadrada de el numero ingresado
console.log("Raíz cuadrada:", raiz);
