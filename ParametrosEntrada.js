
//entregable pero con prompt-sync para que el usuario pueda ingresar los datos
const prompt = require('prompt-sync')();

// 1. Indica si es un número par o impar
function esParOImpar(numero) {
    if (numero % 2 === 0) {
        return "El número " + numero + " es par.";
    } else {
        return "El número " + numero + " es impar.";
    }
}

// 2. Indica si un número es positivo, negativo o cero
function esPositivoNegativoCero(numero) {
    if (numero > 0) {
        return "El número " + numero + " es positivo.";
    } else if (numero < 0) {
        return "El número " + numero + " es negativo.";
    } else {
        return "El número es cero.";
    }
}

// 3. Dada una edad, indica si es mayor de edad o menor de edad
function esMayorDeEdad(edad) {
    if (edad >= 18) {
        return "La persona es mayor de edad.";
    } else {
        return "La persona es menor de edad.";
    }
}

// 4. Dados dos números, indica cuál es mayor o si son iguales
function compararNumeros(num1, num2) {
    if (num1 > num2) {
        return "El número " + num1 + " es mayor que " + num2 + ".";
    } else if (num1 < num2) {
        return "El número " + num2 + " es mayor que " + num1 + ".";
    } else {
        return "Los números son iguales.";
    }
}

// 5. Dada una nota, indica si aprobó (>= 60) o reprobó 
function evaluarNota(nota) {
    if (nota >= 60) {
        return "El estudiante aprobó con una nota de " + nota + ".";
    } else {
        return "El estudiante reprobó con una nota de " + nota + ".";
    }
}

// 6. Indica si un número es múltiplo de 5
function esMultiploDeCinco(numero) {
    if (numero % 5 === 0) {
        return "El número " + numero + " es múltiplo de 5.";
    } else {
        return "El número " + numero + " no es múltiplo de 5.";
    }
}

// Menú para elegir la función
console.log("--- MENÚ DE FUNCIONES ---");
console.log("1. Número par o impar");
console.log("2. Positivo, negativo o cero");
console.log("3. Mayor o menor de edad");
console.log("4. Comparar dos números");
console.log("5. Evaluar nota");
console.log("6. Múltiplo de 5");

const opcion = prompt('Elige una operación (1-6): ');

switch (opcion) {
    case '1': {
        const numero = parseFloat(prompt('Ingresa un número: '));
        console.log(esParOImpar(numero));
        break;
    }
    case '2': {
        const numero = parseFloat(prompt('Ingresa un número: '));
        console.log(esPositivoNegativoCero(numero));
        break;
    }
    case '3': {
        const edad = parseFloat(prompt('Ingresa la edad: '));
        console.log(esMayorDeEdad(edad));
        break;
    }
    case '4': {
        const num1 = parseFloat(prompt('Ingresa el primer número: '));
        const num2 = parseFloat(prompt('Ingresa el segundo número: '));
        console.log(compararNumeros(num1, num2));
        break;
    }
    case '5': {
        const nota = parseFloat(prompt('Ingresa la nota: '));
        console.log(evaluarNota(nota));
        break;
    }
    case '6': {
        const numero = parseFloat(prompt('Ingresa un número: '));
        console.log(esMultiploDeCinco(numero));
        break;
    }
    default:
        console.log("Opción no válida. Por favor elige un número del 1 al 6.");
        break;
}



