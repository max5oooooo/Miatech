
/***
 * Completare il codice JavaScript successivo in modo che la variabile "picked" finisca
 * per contenere tutti i numeri in corrispondenza della chiave "value" nell'array "objects".
*/

const objects = [
    {
        value: 0,
    },
    {
        value: 5,
    },
    {
        value: 10,
    }
];
let picked = [];
for (let i=0;i < objects.length; i++) {
    picked.push(objects[i].value)
}
console.log(picked); // deve stampare l'array [0, 5, 10]