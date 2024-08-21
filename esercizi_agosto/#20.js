/***
 * Completare il codice JavaScript successivo in modo
 * che la riga 19 venga eseguita.
*/

function secret(firstArg, secondArg, thirdArg) {
    if (firstArg > 0) {
        if (secondArg % 2 !== 0) {
            return thirdArg.length;
        } else {
            return thirdArg.length * thirdArg.length;
        }
    }
    return -1;
}

const x = secret(1, 10, "kkk");
if (x === 9) {
    console.log("Esercizio 20: ramo 1 eseguito");
}