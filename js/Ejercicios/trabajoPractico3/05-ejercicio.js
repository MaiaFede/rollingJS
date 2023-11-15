// Definir una función que muestre información sobre una cadena de 
// texto que se le pasa como argumento. A partir de la cadena que 
// se le pasa, la función determina si esa cadena está formada sólo 
// por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

function definirCadena (cadenaTexto){
    if (cadenaTexto === cadenaTexto.toUpperCase()) {
        document.write ("<p>La cadena está formada solo por mayúsculas.</p>")
    }
    else if (cadenaTexto === cadenaTexto.toLowerCase()) {
        document.write("<p>La cadena está formada solo por minúsculas.</p>");
    }else {document.write ("<p>La cadena tiene tanto mayúsculas como minúsculas.</p>");
    }
}

const texto = prompt('Ingrese una cadena de texto');

definirCadena (texto) 