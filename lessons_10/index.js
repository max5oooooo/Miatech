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

/*Dichiarare un array di numeri e utilizzare lo spread operator per creare una copia dell'array.
 Modificare l'array originale e stampare sia l'array originale sia la copia nella console.

 const numeriOriginali = [1, 2, 3, 4, 5];

 const copiaDiNumeriOriginali = [...numeriOriginali];

 numeriOriginali.push(6);

 console.log("Array originale:", numeriOriginali);
console.log("Copia Array:", copiaDiNumeriOriginali);*/


/*Dichiarare due array di numeri e utilizzare lo spread operator per unirli in un unico array. Stampare il nuovo array unito nella console.


const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const arrayUnito =[...array1, ...array2];
console.log(arrayUnito);*/

/* Dichiarare un oggetto e utilizzare lo spread operator per creare una copia 
dell'oggetto aggiungendo una nuova proprietà. Stampare sia l'oggetto originale sia la copia modificata nella console.

const persona = {
    nome: "Francesco",
    cognome: "Oranzini",
    età: 30,
  };

const nuovaPersona = { ...persona, città:"Firenze"};

console.log("Persona Originale" ,persona);
console.log("Nuova Persona" ,nuovaPersona);*/

/* Scrivere una funzione che utilizzi il rest operator per accettare un numero variabile di argomenti e restituire
 la somma di tutti gli argomenti. Chiamare la funzione con diversi numeri di argomenti e stampare il risultato nella console.

 function somma(...numeri) { 
    let risultato = 0;
    for (let numero of numeri) {
      risultato += numero;
    }
    return risultato;
  }

console.log(somma(5, 12, 3));
console.log(somma(100, 230, 310, 46));*/

/* Dichiarare un array di numeri e utilizzare il destructuring insieme al rest operator per assegnare i primi due elementi dell'array a
 variabili separate e il resto degli elementi a un nuovo array. Stampare le variabili e il nuovo array nella console.


const numeri = [10, 20, 30, 40, 50, 60];

const [primoNumero, secondoNumero, ...resto] = numeri;

console.log(primoNumero); 
console.log(secondoNumero);
console.log(resto);*/

/* Dichiarare un oggetto con diverse proprietà e utilizzare il destructuring insieme al rest operator per assegnare alcune proprietà a
 variabili separate e il resto delle proprietà a un nuovo oggetto. Stampare le variabili e il nuovo oggetto nella console.

 const persona = {
    nome: "Francesco",
    cognome: "Oranzini",
    età: 30,
    città: "Firenze"
  };

  const {nome, cognome, ...resto} = persona;

  console.log(nome); 
  console.log(cognome);
  console.log(resto);*/