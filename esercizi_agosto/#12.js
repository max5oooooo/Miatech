
/***
 * Completare il corpo della funzione shallowCopy in modo che il valore
 * da essa restituito sia un array contenente i valori dell'array arr
*/

function shallowCopy(arr) {
    return arr.slice();
}

const numbers = [3, 5, 10];
const x = shallowCopy(numbers);
console.log(x); // deve stampare l'array [3, 5, 10]