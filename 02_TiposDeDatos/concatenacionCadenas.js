var nombre = "Teddy";
var apellido = "Summers";

var nombreCompleto = nombre + " " + apellido;
console.log(nombreCompleto);

var nombreCompleto2 = "Teddy" + " " + "Summers";
console.log(nombreCompleto2);

// TODO: si primero encuentra una cadena solo los concatena
var x = nombre + 2 + 4;
console.log(x);


x = nombre + (2 + 4); 
console.log(x);

// TODO: si se encuentra numeros a la izquiera los suma
x = 2+4+nombre; 
console.log(x);