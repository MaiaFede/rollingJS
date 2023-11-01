//Añadir al ejercicio anterior que nos diga por cuál  
//de los cuatro es divisible(hay que decir todos por los que es divisible)


const numeroPrueba = parseInt(prompt("Ingrese un numero:"));

let divisores = [2, 3, 5, 7];

for (let i = 0; i < divisores.length; i++) {
  if (numeroPrueba % divisores[i] == 0) {
    document.write(
      ` <p>El ${numeroPrueba} es divisible por ${divisores[i]}</p>`
    );
  }else {
    document.write(
      ` <p> El ${numeroPrueba} no es divisible por ${divisores[i]} </p>`
    );
  }
}