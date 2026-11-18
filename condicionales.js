// primer taller condicionales
const dia = 3;

switch (dia) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miércoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sábado");
    break;
  case 7:
    console.log("Domingo");
    break;
  default:
    console.log("inválido");
}
// segundo taller condicionales
const total = 120;
const tieneMembresia = false;

const precioFinal = (tieneMembresia || total >= 100) ? total * 0.85 : total;
console.log(`Total a pagar: ${precioFinal}`);
