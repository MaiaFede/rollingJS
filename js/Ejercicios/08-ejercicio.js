//Escribe un programa que pida un número y diga si es divisible por 2

const numeroPrueba = parseInt(prompt("Ingrese un número:"))

if ((numeroPrueba % 2) == 0){
    document.write(
        "<p>El " + numeroPrueba + " si es divisble por 2</p>"
      );
} else {
    document.write(
        "<p>El " + numeroPrueba + " no es divisble por 2</p>"
      );
}
