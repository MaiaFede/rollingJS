//10.- Escribe un programa que pida un número y nos diga si es divisible
//por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)

const numeroPrueba = parseInt(prompt("Ingrese un numero:"));

let divisores = [2, 3, 5, 7];

for (let i = 0; i < divisores.length; i++) {
  if (numeroPrueba % divisores[i] == 0) {
    document.write(
      ` <p>El ${numeroPrueba} es divisible por ${divisores[i]}</p>`
    );
  }
}
