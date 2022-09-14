// Verficar si el valor de una variable es number

let miNumero = "18x";

let edad = Number(miNumero);
console.log(edad)

if (isNaN(edad)) {
  console.log("No es un nùmero")

} else {
  if (edad >= 18) {
    console.log("Puede votar")

  } else {
    console.log("Muy joven para votar")

  }
}


