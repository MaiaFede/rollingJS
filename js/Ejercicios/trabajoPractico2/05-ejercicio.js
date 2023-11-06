/*5- Realizar una página con un script que calcule el valor de la 
letra de un número de DNI (Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el 
número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las 
siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, 
    H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver 
a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».
*/
const dni = prompt('Ingrese su dni:')

if (dni > 0 && dni <99999999 ){
    let resultado = dni % 23
    switch (resultado){
        case 0 : document.write( '<p> "T"</p>');
        break;
        case 1: document.write( '<p> "R"</p>');
        break;
        case 2: document.write( '<p> "W"</p>');
        break;
        case 3: document.write( '<p> "A"</p>');
        break;
        case 4: document.write( '<p> "G"</p>');
        break;
        case 5: document.write( '<p> "M"</p>');
        break;
        case 6: document.write( '<p> "Y"</p>');
        break;
        case 7: document.write( '<p> "F"</p>');
        break;
        case 8: document.write( '<p> "P"</p>');
        break;
        case 9: document.write( '<p> "D"</p>');
        break;
        case 10: document.write( '<p> "X"</p>');
        break;
        case 11: document.write( '<p> "B"</p>');
        break;
        case 12: document.write( '<p> "N"</p>');
        break;
        case 13: document.write( '<p> "J"</p>');
        break;
        case 14: document.write( '<p> "Z"</p>');
        break;
        case 15: document.write( '<p> "S"</p>');
        break;
        case 16: document.write( '<p> "Q"</p>');
        break;
        case 17: document.write( '<p> "V"</p>');
        break;
        case 18: document.write( '<p> "H"</p>');
        break;
        case 19: document.write( '<p> "L"</p>');
        break;
        case 20: document.write( '<p> "C"</p>');
        break;
        case 21: document.write( '<p> "K"</p>');
        break;
        case 22: document.write( '<p> "E"</p>');
        break;
       case isNaN: alert ('¿Desea intentar de vuelta la operación?');
       break;
    }
}else document.write('Cancelo la operación');

/*

    let dni = prompt('Ingrese su dni:');
resultado= dni % 23
alert(resultado)

LE FALTA LA CONDICION EN EL CASO QUE NO SEA UN NUMERO Y SE REPITA LA FUNCION
}*/

