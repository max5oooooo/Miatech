
/***
 * Completare il corpo della funzione "exchange" in modo che restituisca
 * lo stesso array passato come argomento, ma con gli elementi alla posizione
 * 0 e 1 scambiati di posto
*/

function exchange(array) {
    let tempArray = array[0];
    array[0]=array[1];
    array[1]=tempArray;
    return(array)
}
const array = [101, 102];
const exchanged = exchange(array);
console.log(exchanged); // deve stampare l'array [102, 101];