// Escriba un script que muestre la tabla de multiplicar de un 
// número ingresado por pantalla, la creación de la tabla 
// debe ser realizada con una función y mostrar solo los 
// resultados del 1 al 10 del número elegido por el usuario.

// no termine de ver si funcona el codigo


function tablaMultiplicar (numero){   
 document.write(`<table border="1"><tbody>`);
  
 for(let i = 1; i <= 10; i++){
 document.write(`<tr><td>${numero} x ${i}</td><td>${numero * i}</td></tr>`);

        }
        document.write(`</tbody></table>`);
}
const numero = parseInt(prompt('Ingrese un numero para ver su tabla:'));

tablaMultiplicar (numero)
