// Crear un script que solicite al usuario mediante un prompt el nombre
// de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona
// cancelar se debe mostrar el arreglo generado, luego realizar las
// siguientes acciones:

// Mostrar la longitud del arreglo.
// Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
// Añade en última posición la ciudad de París.
// Escribe por pantalla el elemento que ocupa la segunda posición.
// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
let listaCiudades = [];
do {
  const ciudades = prompt("Ingrese nombre de ciudades:");
  listaCiudades.push(ciudades);
} while (confirm("Desea realizar de vuelta la operacion?"));

if (isNaN(listaCiudades)){
    document.write(listaCiudades);  
    document.write(`<br><p>El arreglo de ciudades tiene ${listaCiudades.length} elementos</p>`);
    document.write(`<ul><li><p>Elemento 1er posición : ${listaCiudades[0]}</p></li><li><p>Elemento 3er posición : ${listaCiudades[2]}</p></li><li><p>Elemento ultima posición : ${listaCiudades[listaCiudades.length - 1]}</p></li></ul>`);
    listaCiudades.push('Paris');
    listaCiudades[1] = 'Barcelona';
    document.write(`<ul><li><p>Elemento 2da posición : ${listaCiudades[1]}</p></li><li><p>Elemento ultima posición : ${listaCiudades[listaCiudades.length - 1]}</p></li></ul>`)
    document.write(`<h2>Arreglo de ciudades </h2>`)
    document.write('<ul>')
    for(let indiceCiudades = 0; indiceCiudades < listaCiudades.length; indiceCiudades++){
        document.write(`<li>${listaCiudades[indiceCiudades]}</li>`)
    }document.write('</ul>');

    }else document.write('Nombre invalido')

    

