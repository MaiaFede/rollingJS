/*
2- Escribir un programa que solicite una nota (número) de 0  a 10. 
Luego mostrar la calificación en un alert según los siguientes rangos 
de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar 
un mensaje de “número erróneo”. Si el número ingresado no es válido 
mostrar el mensaje “Introduce un número válido”.
*/

const numeroRango = parseInt(prompt('Ingrese su nota (número):'));

if (!isNaN(numeroRango)) {
    if (numeroRango <= 2) {
    alert ( 'Muy deficiente');
} else if (numeroRango <= 4 ) {
    alert ('Insuficiente');} else if (numeroRango <= 6){
        alert ('Suficiente');
    }else if (numeroRango == 7){
        alert('Bien');
    }else if (numeroRango <=9){
        alert('Notable');
    }else if (numeroRango == 10){
        alert ('Sobresaliente');
    }else if (numeroRango >10){
        alert('Número erróneo');
    }
}else alert ('Introduce un número válido')