//juagar ajedrez en la consola
let chessboard = [
    ["R", "N", "B", "Q", "K", "B", "N", "R"],
    ["P", "P", "P", "P", "P", "P", "P", "P"],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    ["p", "p", "p", "p", "p", "p", "p", "p"],
    ["r", "n", "b", "q", "k", "b", "n", "r"]
];

// Función para mostrar el tablero de ajedrez en la consola
function mostrarTablero(tablero) {
    for (let i = 0; i < tablero.length; i++) {
        console.log(tablero[i].join(" "));
    }
}

// Mostrar el tablero inicial
console.log("Tablero de ajedrez inicial:");
mostrarTablero(chessboard);

// Función para mover una pieza en el tablero con prompt
const prompt = require('prompt-sync')();

function moverPieza(tablero) {
    const filaOrigen = parseInt(prompt("Ingresa la fila de origen (0-7):"));
    const columnaOrigen = parseInt(prompt("Ingresa la columna de origen (0-7):"));
    const filaDestino = parseInt(prompt("Ingresa la fila de destino (0-7):"));
    const columnaDestino = parseInt(prompt("Ingresa la columna de destino (0-7):"));

    // Validar que las posiciones estén dentro del rango del tablero
    if (
        filaOrigen >= 0 && filaOrigen < 8 &&
        columnaOrigen >= 0 && columnaOrigen < 8 &&
        filaDestino >= 0 && filaDestino < 8 &&
        columnaDestino >= 0 && columnaDestino < 8
    ) {
        // Mover la pieza
        tablero[filaDestino][columnaDestino] = tablero[filaOrigen][columnaOrigen];
        tablero[filaOrigen][columnaOrigen] = " ";
        console.log("Después del movimiento:");
        mostrarTablero(tablero);
    } else {
        console.log("Posiciones inválidas. Por favor ingresa números entre 0 y 7.");
    }
}

// Llamar a la función para mover una pieza
moverPieza(chessboard);