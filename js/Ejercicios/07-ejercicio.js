//7 ejercicio
const numeroPruebaPrimero = parseInt(prompt("Ingrese el primer numero:"));
const numeroPruebaSegundo = parseInt(prompt("Ingrese el segundo numero:"));
const numeroPruebaTercero = parseInt(prompt("Ingrese el tercer numero:"));

if (
  numeroPruebaPrimero > numeroPruebaSegundo &&
  numeroPruebaPrimero > numeroPruebaTercero
) {
  document.write(
    "<p>El " + numeroPruebaPrimero + " es el número más grande</p>"
  );
} else if (
  numeroPruebaSegundo > numeroPruebaTercero &&
  numeroPruebaSegundo > numeroPruebaPrimero
) {
  document.write(
    "<p>El " + numeroPruebaSegundo + " es el número más grande</p>"
  );
} else 
{
  document.write(
    "<p>El " + numeroPruebaTercero + " es el número más grande</p>"
  );
}
