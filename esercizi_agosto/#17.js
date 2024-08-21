
/***
 * Completare il codice seguente in modo
 * che la variabile "initials" finisca per contenere
 * le lettere iniziali dei nomi nell'array "names"
 * 
 * BONUS: usare un ciclo for per risolvere l'esercizio
*/

const names = [
    "Barbara",
    "Franco",
    "Elena",
    "Rodolfo",
    "Ariel",
    "Andrea",
];
const initials = [];
for (let i = 0; i < names.length; i++) {
    initials.push(names[i][0]);
  }
console.log(initials); // deve stampare l'array ["B", "F", "E", "R", "A", "A"]
