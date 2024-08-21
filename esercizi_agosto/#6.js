
/***
 * Completare il corpo della funzione "even" in modo che il valore
 * da essa restituito sia true se l'unico numero passato come argomento è pari,
 * e false altrimenti
*/

function even(number) {
    if (number % 2 == 0){
        return(true)
    }else{
        return(false)
    }
}

const x = even(3);
console.log(x); // deve stampare false
const y = even(10);
console.log(y); // deve stampare true