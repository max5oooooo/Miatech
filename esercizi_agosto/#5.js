
/***
 * Completare il codice JavaScript successivo in modo
 * che la riga 13 venga eseguita e la riga 16 no.
*/

let x = 0;
for (let i = 0; i < 2; i++) {
    x += i;
    x = x + i;
}
if (x === 2) {
    console.log("Ramo 1 eseguito"); // Questa istruzione deve essere eseguita
}
else {
    console.log("Ramo 2 eseguito"); // Questa no
}
