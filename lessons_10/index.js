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

/* Dichiarare un oggetto JavaScript e utilizzare il metodo JSON.stringify per convertirlo in una stringa JSON. Stampare la stringa JSON nella console.

const persona = {
  nome: "Francesco",
  cognome: "Oranzini",
  età: 30,
  città: "Firenze"
};

const personaJSON = JSON.stringify(persona);

console.log(personaJSON);*/

/*Dichiarare una stringa JSON e utilizzare il metodo JSON.parse per convertirla in un oggetto JavaScript. Stampare l'oggetto JavaScript nella console.

const stringaJSON = `{"nome": "Francesco","cognome": "Oranzini","età": 30,"città": "Firenze"}`;

const oggettoPersona = JSON.parse(stringaJSON);
console.log(oggettoPersona);*/

/*Dichiarare un array di oggetti rappresentante una lista di persone in formato JSON. Convertire questa stringa 
JSON in un array di oggetti JavaScript, aggiungere una nuova persona all'array,
 e poi riconvertire l'array aggiornato in una stringa JSON. Stampare la stringa JSON aggiornata nella console.

const personeJSON = `[{"nome": "Francesco","cognome": "Oranzini","età": 30,"città": "Firenze"},
{"nome": "Mattia","cognome": "Pastafiglia","età": 31,"città": "Catanzaro"},
{"nome": "Alessandro","cognome": "D'antoni","età": 30,"città": "Palermo"}]`;

const persone = JSON.parse(personeJSON);
console.log(persone);

persone.push({nome:"anamaria", cognome:"Munteanu", età:28, città:"Pula"});

console.log(persone);

const stringaJSON = JSON.stringify(persone);

console.log(stringaJSON);*/

/*Creare una stringa che contenga il nome e il cognome di una persona utilizzando i template literals. Dichiarare due variabili nome e cognome 
e creare una stringa che li combini. Stampare la stringa risultante nella console.

const nome = "Francesco";
const cognome = "Oranzini";

const stringa = `il nome completo è : ${nome} ${cognome}`;

console.log(stringa);*/

/* Creare una stringa multilinea che contenga informazioni su una persona utilizzando i template literals. Dichiarare variabili per il nome, cognome, età e città, 
e creare una stringa multilinea che le combini. Stampare la stringa risultante nella console.

const nome = "Francesco";
const cognome = "Oranzini";
const eta = 30;
const citta = "Firenze";

const persona = `Nome: ${nome}, Cognome: ${cognome}, Età: ${eta} anni, Città: ${citta}
`;

console.log(persona);*/

/*Scrivere una funzione che accetti un oggetto rappresentante una persona e restituisca una stringa 
formattata utilizzando i template literals. 
Chiamare la funzione con un oggetto di esempio e stampare la stringa risultante nella console.

function formattaStringa(persona){
  const{nome, cognome, età, città} = persona;
  return`nome:${nome}, cognome:${cognome}, età:${età}, città:${città}`;
}

const persona = {
  nome: "Francesco",
  cognome: "Oranzini",
  età: 30,
  città: "Firenze"
};

console.log(formattaStringa(persona));*/

/*Creare un semplice script che stampi diversi tipi di dati nella console utilizzando console.log. 
Dichiarare variabili di diversi tipi (numero, stringa, array, oggetto) e stamparle.

let numero = 30;
let stringa = "Ciao Francesco";
let array = [20, "prova", 80, "ciao"];
let oggetto = { nome: "Francesco", città: "Firenze" };

console.log(numero);
console.log(stringa);
console.log(array);
console.log(oggetto);*/

/*Creare uno script che simuli un controllo di errori. Dichiarare una variabile
 e utilizzare console.error per stampare un messaggio di errore 
se la variabile ha un valore specifico e console.warn per stampare un avviso se ha un altro valore specifico.


let numero =20; //cambiare numero per controllare.

if (numero < 0) {
  console.error("Errore: Il numero non può essere negativo.");
} else if (numero > 30) {
  console.warn("Attenzione: Il numero è troppo grande.");
} else {
  console.log("Il numero è valido.");
};*/

/*Creare uno script che utilizzi console.table per stampare un array di oggetti in formato tabella e console.group per raggruppare messaggi della console.

const persone = [
  {
    nome: "Francesco",
    cognome: "Oranzini",
    età: 30,
    città: "Firenze"
  },
  {
    nome: "Mattia",
    cognome: "Pastafiglia",
    età: 31,
    città: "Catanzaro"
  },
  {
    nome: "Alessandro",
    cognome: "D'antoni",
    età: 28,
    città: "Palermo"
  }
];

console.group('informazioni sulle persone');

console.table(persone);

console.log(persone.length);*/

/*Creare uno script che utilizzi setTimeout per stampare un messaggio nella console dopo 3 secondi.
 Dichiarare una funzione che contenga il messaggio e passare questa funzione a setTimeout.

 function timeout(){
  console.log("sono passati 3 secondi");
 };

 setTimeout(timeout, 3000);*/

/*Creare uno script che utilizzi setInterval per stampare un messaggio nella console ogni 2 secondi.
 Dichiarare una funzione che contenga il messaggio e passare questa funzione a setInterval


function interval(){
  console.log("sono passati 3 secondi");
};

 setInterval(interval, 3000);*/

 /*Creare uno script che utilizzi setInterval per stampare un messaggio nella console ogni secondo e che interrompa il processo dopo 5 secondi utilizzando clearInterval.
  Dichiarare una funzione che contenga il messaggio e utilizzare setTimeout per interrompere l'intervallo.

function interval(){
  console.log("è passato 1 secondo");
};

const count = setInterval(interval, 1000);

setTimeout(() => {
  clearInterval(count);
  console.log("interval interrotto")
}, 5000);*/
  
/*Creare uno script che utilizzi un blocco try per eseguire una divisione e un blocco catch per gestire un errore
 se il divisore è zero. Stampare un messaggio di errore nella console se viene sollevata un'eccezione.*/

 function divisione(dividendo, divisore) {
  try {
    const risultato = dividendo / divisore;
    console.log(`Il risultato della divisione è: ${risultato}`);
  } catch (error) {
    console.error("Errore: Impossibile dividere per zero!");
  }
};

divisione(45, 5);
divisione(15, 0);