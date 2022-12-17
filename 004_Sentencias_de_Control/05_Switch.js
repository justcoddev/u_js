let numero = 3;
let numeroTexto = 'Valor desconocido';
switch (numero) {
  case 1:
    numeroTexto = 'Número uno';
    break;
  case 2:
    numeroTexto = 'Número 2';
    break;
  case 3:
    numeroTexto = 'Número tres';
    break;
  case 4:
    numeroTexto = 'Núero cuatro';
    break;
  default:
    numeroTexto = 'Caso no encontrado';
}
console.log(numeroTexto);