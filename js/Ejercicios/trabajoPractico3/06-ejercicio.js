// Solicitar por pantalla al usuario ingresar el valor de los lados 
// de un rectángulo, luego crear una función para calcular su perímetro y 
// mostrarlo por pantalla.

function perimetroRectangulo (lado1, lado2){
 const perimetro = 2* (lado1 + lado2);
 document.write(`<p>El perimetro del rectangulo es: ${perimetro}</p>`)
 return
 
}

const primerLado = parseInt(prompt('Ingrese un lado del rectangulo:'));
const segundoLado = parseInt(prompt('Ingrese el otro lado del rectangulo:'))
perimetroRectangulo (primerLado, segundoLado);