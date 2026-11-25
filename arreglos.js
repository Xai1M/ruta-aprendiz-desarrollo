// ejercicio 1 de la sección de arreglos
const fruits = ["manzana", "banana", "naranja", "pera", "uva"];
// Recorrer el arreglo y mostrar cada fruta en la consola
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
//añadiendo al ejercicio 1, cambiando fruta pera por fruta kiwi
fruits[3] = "kiwi";
console.log("Después de cambiar la fruta en la posición 3:");
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//añadiendo opcion de prompt para cambiar fruta en la cualquier posición del arreglo
const prompt = require('prompt-sync')();




const posicion = parseInt(prompt("Ingresa la posición de la fruta que deseas cambiar (0-4):"));
const nuevaFruta = prompt("Ingresa el nombre de la nueva fruta:");
if (posicion >= 0 && posicion < fruits.length) {
    fruits[posicion] = nuevaFruta;
    console.log("Después de cambiar la fruta en la posición " + posicion + ":");
    for (let i = 0; i < fruits.length; i++) {
        console.log(fruits[i]);
    }
} else {
    console.log("Posición inválida. Por favor ingresa un número entre 0 y 4.");
}   
// mini ejercicio matrices invertir cadena
let str = "ejemplo";
let reversed = str.split("").reverse().join("");
console.log(reversed);