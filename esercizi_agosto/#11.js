
/***
 * Completare il corpo della funzione acc in modo che il valore
 * da essa restituito sia la media dei numeri contenuti nell'array
*/

function average(numbersArray) {
    let sum = 0;
    for (let i = 0; i < numbersArray.length; i++) {
      sum += numbersArray[i]; 
    }
    return sum / numbersArray.length;
}

const x = average([3, 5, 10]);
console.log(x); // deve stampare il numero 6