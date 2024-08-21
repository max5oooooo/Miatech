
/***
 * Completare il corpo della funzione accumulate in modo che il valore
 * da essa restituito sia la somma di tutti i numeri contenuti
 * nell'array passato come parametro
*/

function accumulate(numbersArray) {
    let sum = 0;
    for (let i = 0; i < numbersArray.length; i++) {
      sum += numbersArray[i]; 
    }
    return sum; 
  }

const x = accumulate([2, 5, 7]);
console.log(x); // deve stampare il numero 14