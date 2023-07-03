/*********************************************************************************
 *                                ASPECTOS GENERALES                             *
 *********************************************************************************/

//Esqueleto de funcion anonima en JS
const myVar2 = (param) => {/*myFunction*/}

//Ejemplo de funcion anonima + uso de funcion nativa de JS
const myVar1 = myArray.split('.').every(str => {
    if(condition1) {
        return a;
    } else if(condition2) {
        return b;
    } else {
        return c;
    }
});

//El operador spread permite a un array o cadena ser usado donde se espera un numero de argumentos determinado
//s̶u̶m̶(̶n̶u̶m̶e̶r̶o̶s̶[̶1̶]̶,̶ ̶n̶u̶m̶e̶r̶o̶s̶[̶2̶]̶,̶ ̶n̶u̶m̶e̶r̶o̶s̶[̶3̶]̶)̶;̶
function myFunction(x, y, z) { }
var args = [0, 1, 2];
myFunction(...args);
//Algunos ejemplos son:
const numeros = [1, 2, 3];
sum(...numeros); // sum -> 6
Math.min(...numeros); // min -> 1

/*********************************************************************************
 *                                        ARRAYS                                 *
 *********************************************************************************/

//Sumar los elementos de un array
myArray.reduce((a, b) => a + b, 0);

//Ordenar los elementos de un array ascendentemente
myArray.sort(function(a,b){return a - b});

//Filtrar my array para solo quedarme con los pares
myArray.filter((_, index) => index % 2 === 0);

//Determinar si existe algun numero del array divisible por i
myArray.some(num => num % i === 0)

//Reemplaza ciertos elementos de un array por otros
myArray.map(elem => elem === elemToReplace ? substitutionElem : elem);

/*********************************************************************************
 *                                        STRINGS                                *
 *********************************************************************************/

// Determinar si mi string de enteros esta compuesto por numero pares. Recordar que ('2' + 2 -> 22) pero que ('2' / 2 -> 1)!
myString.split('').every((index) => index % 2 === 0);