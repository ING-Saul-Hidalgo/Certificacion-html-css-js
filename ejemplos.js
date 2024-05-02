// Declaración de variable usando var
var x = 10;

// Declaración de variable usando let (preferido en ES6)
let y = 20;

// Declaración de constante
const PI = 3.14;

// Declaración de múltiples variables en una línea
let a = 1, b = 2, c = 3;
Tipos de datos:
javascript
Copy code
// Números
let num = 10;

// Cadena de texto (String)
let texto = "Hola Mundo";

// Booleanos
let esVerdadero = true;
let esFalso = false;

// Arreglos
let arreglo = [1, 2, 3, 4, 5];

// Objetos
let objeto = { nombre: "Juan", edad: 25 };

// Funciones
function suma(a, b) {
    return a + b;
}
Declaración de funciones:
javascript
Copy code
// Declaración de función básica
function saludar() {
    console.log("¡Hola!");
}

// Declaración de función con parámetros
function sumar(a, b) {
    return a + b;
}

// Declaración de función anónima asignada a una variable
let resta = function(a, b) {
    return a - b;
};

// Funciones de flecha (Arrow functions) en ES6
let multiplicar = (a, b) => {
    return a * b;
};

// Si la función tiene una sola línea, se puede simplificar así:
let dividir = (a, b) => a / b;
Operadores básicos:
javascript
Copy code
let x = 10;
let y = 5;

// Operadores aritméticos
let suma = x + y;
let resta = x - y;
let multiplicacion = x * y;
let division = x / y;
let modulo = x % y;

// Operadores de comparación
let esIgual = x === y;
let noEsIgual = x !== y;
let esMayorQue = x > y;
let esMenorQue = x < y;
let esMayorOIgual = x >= y;
let esMenorOIgual = x <= y;

// Operadores lógicos
let and = true && false;
let or = true || false;
let not = !true;
Estructuras de control:
javascript
Copy code
// Condicionales (if-else)
let edad = 18;
if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}

// Bucles (for, while, do-while)
for (let i = 0; i < 5; i++) {
    console.log(i);
}

let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

let j = 0;
do {
    console.log(j);
    j++;
} while (j < 5);



/ Declaración de función básica
function saludar() {
    console.log("¡Hola!");
}

// Función con parámetros
function sumar(a, b) {
    return a + b;
}

// Función con valor de retorno
function esMayorDeEdad(edad) {
    if (edad >= 18) {
        return true;
    } else {
        return false;
    }
}

// Función anónima asignada a una variable
let resta = function(a, b) {
    return a - b;
};

// Funciones de flecha (Arrow functions) en ES6
let multiplicar = (a, b) => {
    return a * b;
};

// Si la función tiene una sola línea, se puede simplificar así:
let dividir = (a, b) => a / b;
Bucles:
javascript
Copy code
// Bucle for
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// Bucle while
let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}

// Bucle do-while
let k = 0;
do {
    console.log(k);
    k++;
} while (k < 5);

// Bucle forEach para recorrer arrays
let arreglo = [1, 2, 3, 4, 5];
arreglo.forEach(function(elemento) {
    console.log(elemento);
});

// Bucle for-in para recorrer propiedades de objetos
let objeto = { nombre: "Juan", edad: 25 };
for (let propiedad in objeto) {
    console.log(propiedad + ": " + objeto[propiedad]);
}

// Bucle for-of para recorrer elementos de un iterable (como arrays)
let iterable = [1, 2, 3];
for (let elemento of iterable) {
    console.log(elemento);
}



// Declaración de un arreglo
let numeros = [1, 2, 3, 4, 5];

// Acceder a elementos del arreglo
console.log(numeros[0]); // Salida: 1

// Modificar elementos del arreglo
numeros[1] = 10;
console.log(numeros); // Salida: [1, 10, 3, 4, 5]

// Añadir elementos al final del arreglo
numeros.push(6);
console.log(numeros); // Salida: [1, 10, 3, 4, 5, 6]

// Eliminar el último elemento del arreglo
numeros.pop();
console.log(numeros); // Salida: [1, 10, 3, 4, 5]

// Obtener la longitud del arreglo
console.log(numeros.length); // Salida: 5

// Declaración de una lista
let lista = ["manzana", "banana", "naranja"];
Funciones de búsqueda en arreglos:
javascript
Copy code
// Método indexOf: devuelve el índice de la primera coincidencia o -1 si no se encuentra
console.log(numeros.indexOf(3)); // Salida: 2

// Método includes: devuelve true si el elemento está en el arreglo, false de lo contrario
console.log(numeros.includes(5)); // Salida: true

// Método find: devuelve el primer elemento que cumple con la condición de la función dada
let encontrado = numeros.find(function(elemento) {
    return elemento > 3;
});
console.log(encontrado); // Salida: 4

// Método filter: devuelve un arreglo con todos los elementos que cumplan con la condición de la función dada
let mayoresQueTres = numeros.filter(function(elemento) {
    return elemento > 3;
});
console.log(mayoresQueTres); // Salida: [4, 5]
Funciones con arreglos y listas:
javascript
Copy code
// Función que suma todos los elementos de un arreglo
function sumaArreglo(arreglo) {
    let suma = 0;
    arreglo.forEach(function(elemento) {
        suma += elemento;
    });
    return suma;
}

console.log(sumaArreglo(numeros)); // Salida: 23

// Función que busca un elemento en una lista y devuelve su posición
function buscarElemento(lista, elemento) {
    return lista.indexOf(elemento);
}

console.log(buscarElemento(lista, "banana")); // Salida: 1