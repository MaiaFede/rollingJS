// Esto es un comentario de una sola linea
/* Este es un comentario 
de multiples 
lineas*/
// declarar variable (var - let - const)

let anioActual = 2023;
const universe = 'https://campus.rollingcodeschool.com/login/index.php';
//Mostrar mensaje
console.log (anioActual);
console.log ("anioActual");
console.log ("Año actual: " + anioActual);
console.log (universe);

//Modificar el contenido de una variable
anioActual = 2024;
console.log (anioActual);

document.write ('<p class="parrafoDestacado">Esta es una prueba de document write</p>');
//Ventana de alerta
alert ("Hello world");
//Solicitar a un usuario un nombre y mostrar saludo:
const nombreUsuario = prompt ('Ingrese su nombre');
console.log (nombreUsuario);

document.write ('<p>Bienvenido '+ nombreUsuario +'</p>');

//Solicitar a un usuario un precio de un producto

const precioSolicitado = parseFloat(prompt ('Ingrese un valor en dolares'));
console.log(precioSolicitado)
//parseInt ('50')
// parseFloat ('50.4')

alert (' El importe indicado corresponde a USD$' + (precioSolicitado + 2));


