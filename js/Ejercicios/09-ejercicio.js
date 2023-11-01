//Escribe un programa que pida una frase y escriba las vocales que aparecen
//Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)


const frase = prompt ('Ingrese una frase:');

console.log (frase.length);
console.log (frase.charAt(0));

let vocales = "";

for (let i = 0; i < frase.length; i++) {
  const caracter = frase.charAt(i);

  if (caracter == 'a' || caracter == 'e' || caracter == 'i' || caracter == 'o' || caracter == 'u') {

    vocales += caracter;
  }
}
document.write("Las vocales en la frase son: " + vocales);

