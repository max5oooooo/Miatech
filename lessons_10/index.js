/* Dichiarare un array di numeri e utilizzare il destructuring per 
assegnare i primi due elementi dell'array a due variabili separate. Stampare queste variabili nella console.

const numeri = [10, 20, 30, 40];

const [primoNumero, secondoNumero] = numeri;

console.log(primoNumero); 
console.log(secondoNumero);*/


/*Modificare l'esercizio precedente per estrarre solo il primo e il terzo
 elemento dell'array, saltando il secondo. Stampare queste variabili nella console.


 const numeri = [10, 20, 30, 40];

const [primoNumero, ,terzoNumero] = numeri;

console.log(primoNumero); 
console.log(terzoNumero);*/

/*Dichiarare un array con meno di cinque elementi e utilizzare il destructuring per assegnare i primi cinque elementi a cinque variabili, 
usando valori predefiniti per gli elementi mancanti. Stampare queste variabili nella console.

const numeri = [10, 20];

const [primo, secondo, terzo = 30, quarto = 40, quinto = 50] = numeri;

console.log(primo); 
console.log(secondo); 
console.log(terzo); 
console.log(quarto); 
console.log(quinto);*/

/*Dichiarare un oggetto e utilizzare il destructuring per assegnare il
 valore di alcune proprietà a delle variabili separate. Stampare queste variabili nella console.

const persona = {
    nome: "Francesco",
    cognome: "Oranzini",
    età: 30,
    città: "Firenze"
  };

const { nome, cognome, età } = persona;
console.log(nome); 
console.log(cognome); 
console.log(età);*/


/*Modificare l'esercizio precedente per assegnare
 i valori delle proprietà a variabili con nomi diversi. Stampare queste variabili nella console.

 const persona = {
    nome: "Francesco",
    cognome: "Oranzini",
    età: 30,
    città: "Firenze"
  };

const { nome:name, cognome:surname, età:age } = persona;
console.log(name); 
console.log(surname); 
console.log(age);*/

/*  Dichiarare un oggetto con alcune proprietà mancanti e utilizzare il destructuring per assegnare il valore delle proprietà a delle variabili,
 usando valori predefiniti per le proprietà mancanti. Stampare queste variabili nella console.


const persona = {
    nome: "Francesco",
    cognome: "Oranzini",
    età: 30,
  };

const { nome, cognome, età, città = "Non computata", professione = "Professore,Programmatore" } = persona;

console.log(nome); 
console.log(cognome); 
console.log(età);
console.log(città); 
console.log(professione);*/