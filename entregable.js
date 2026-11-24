//entregable
//1. indica si es un número par o impar
function esParOImpar(numero) {
    if (numero % 2 === 0) {
        return "El número " + numero + " es par.";
    } else {
        return "El número " + numero + " es impar.";
    }
}

// Ejemplo de uso
console.log(esParOImpar(8));
console.log(esParOImpar(7)); 

// 2. indica si un numero es positivo, negativo o cero
function esPositivoNegativoCero(numero) {
    if (numero > 0) {
        return "El número " + numero + " es positivo.";
    } else if (numero < 0) {
        return "El número " + numero + " es negativo.";
    } else {
        return "El número es cero.";
    }
}

// Ejemplo de uso
console.log(esPositivoNegativoCero(-2));
console.log(esPositivoNegativoCero(5));
console.log(esPositivoNegativoCero(0));

//3. dada una edad, indica si es mayor de edad o menor de edad
function esMayorDeEdad(edad) {
    if (edad >= 18) {
        return "La persona es mayor de edad.";
    }   else {
        return "La persona es menor de edad.";
    }
}

// Ejemplo de uso
console.log(esMayorDeEdad(23));
console.log(esMayorDeEdad(16));

// 4. dados dos números, indica cuál es mayor o si son iguales
function compararNumeros(num1, num2) {
    if (num1 > num2) {
        return "El número " + num1 + " es mayor que " + num2 + ".";
    } else if (num1 < num2) {
        return "El número " + num2 + " es mayor que " + num1 + ".";
    } else {
        return "Los números son iguales.";
    }
}

// Ejemplo de uso
console.log(compararNumeros(4, 9));
console.log(compararNumeros(5, 5));

//5. dada una nota, indica si aprobó (>= 60) o reprobó 
function evaluarNota(nota) {
    if (nota >= 60) {
        return "El estudiante aprobó con una nota de " + nota + ".";
    } else {
        return "El estudiante reprobó con una nota de " + nota + ".";
    }
}

// Ejemplo de uso
console.log(evaluarNota(75));
console.log(evaluarNota(40));

//6. indica un numero es multiplo de 5
function esMultiploDeCinco(numero) {
    if (numero % 5 === 0) {
        return "El número " + numero + " es múltiplo de 5.";
    } else {
        return "El número " + numero + " no es múltiplo de 5.";
    }
}

// Ejemplo de uso
console.log(esMultiploDeCinco(25));
console.log(esMultiploDeCinco(12));  