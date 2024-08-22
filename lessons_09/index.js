/* 
Dichiara una variabile utilizzando let e una utilizzando const, in seguito assegna loro dei valori 
e stampali a console utilizzando il metodo console.log()

let a = 5;
const b = "ciccio";

console.log(a);
console.log(b)*/ 

/*  
 Dichiara una variabile utilizzando "let" ed assegnagli un valore, esempio 5, e stampalo in console. In seguito richiama
  la variabile per cambiargli valore e stampa il nuovo valore in console.


let a = 5;

console.log(a);

a = 8;

console.log(a);*/

/* 
 Crea una variabile let e chiamala "number" con un valore numerico a tua scelta.
  Nella riga successiva crea un blocco (apri e chiudi delle graffe). 
  All'interno del blocco crea un'altra variabile let chiamata anc'essa "number" ed assegna un valore
 numerico differente dal precedente. Sempre all'interno del blocco stampa in console la variabile number,
  fai lo stesso all'esterno del blocco e nota le differenze!


let number = 10;
{
    let number = 20;
    console.log(number);
}

console.log(number);*/

/* 
 Crea una variabile let e chiamala "outside" ed assegna un valore numerico a tua scelta.
  Successivamente crea una blocco (apri e chiudi le parentesi graffe).
   All'interno del blocco appena creato definisci un'altra variabile let e chiamala "inside" ed assegna un valore
    numerico a tua scelta differente dalla precedente variabile. Sempre all'interno del blocco stampa a console le due variabili. 
    Esegui la stampa delle due variabili anche all'esterno del blocco. 


let outside = 10;
{
    let inside =20;
    console.log(outside);
    console.log(inside);
}

console.log(outside);
console.log(inside);*/


/* scrivi un ciclo for che generi solo numeri pari
let a = 20;

for(let i = 0; i <= a; i += 2){
    console.log(i)
};*/

/* 
Scrivi un ciclo while per generare i numeri dispari da 10 ad 1 in ordine decrescente

let numero = 10;

while (numero >= 1) {
  if (numero % 2 != 0) {
    console.log(numero);
  }
  numero--;
}*/

/* 
Crea questa variabile: let word = prompt('Inserisci una parola'); 

let word = prompt("inserisci la parola");*/

/* 
 Scopri quanto è lunga la parola usando la variabile word creata in precedenza ed utilizzando il metodo .
 length su di essa scrivi quindi: console.log(word.length) e scopri in console il risultato

let word = prompt("inserisci la parola");

console.log(word.length);*/

/* Scrivi un ciclo do-while che si ripete fino a quando non inserisci una parola (con il prompt) che sia lunga almeno 5 caratteri. Stampa la parola dopo il ciclo


let parola;

do {
  parola = prompt("Inserisci una parola di almeno 5 caratteri:");
} while (parola.length < 5);

console.log("Hai inserito:", parola);*/


/* Crea una variabile chiamala number ed assegnagli un numero a tua scelta. Crea un blocco logico e controlla con un if()
 se la variabile è maggiori di 5, se lo è stampa in console la frase "la variabile è maggiore di 5", altrimenti stampa "la variabile è minore di 5". 

let number = 2;

if(number >5){
    console.log("la variabile è maggiore di 5")
}else{
    console.log("la variabile è minore di 5")
}*/


/* Crea una variabile chiamala "score" ed utilizza il prompt per inserire un valore numerico 
(tip: vedi il metodo parseInt su google per convertire la stringa in numero). 
Crea ora un blocco di controllo e verifica lo score, se è compreso tra 100 e 90 allora stampa in console la frase "voto ottimo", 
se lo score è compreso tra 70 e 89 allora stampa in console la frase "voto buono", se lo score è compreso tra 60 e 69 allora stampa in console la frase "voto sufficiente",
 se lo score è uguale o minore di 59 allora la frase da mostrare in console è "voto insufficiente".

 let score = parseInt(prompt("Inserisci lo score"));

 if (score >= 90 && score <= 100) {
    console.log("Voto ottimo");
  } else if (score >= 70 && score <= 89) {
    console.log("Voto buono");
  } else if (score >= 60 && score <= 69) {
    console.log("Voto sufficiente");
  } else {
    console.log("Voto insufficiente");
  }*/


/*Riprendi l'esercizio "if, else & else-if" e riscrivilo usando lo switch case


let score = parseInt(prompt("Inserisci lo score"));

switch (true) {
    case score >= 90 && score <= 100:
        console.log("Voto ottimo");
        break;
    case score >= 70 && score <= 89:
        console.log("Voto buono");
        break;
    case score >= 60 && score <= 69:
        console.log("Voto sufficiente");
        break;
    default:
        console.log("Voto insufficiente");
}*/

/* crea un array di numeri e stampalo in console 

let array = [1, 2, 3, 6, 10, 21];

console.log(array); */

/* Riprendi l'array precedente e somma tutti i suoi valori con un ciclo for (tip: usa il metodo length sull'array per controllare il ciclo for). 
Stampa in console la somma dei numeri contenuti nell'array dopo il for. 

let array = [1, 2, 3, 6, 10, 21];

let somma = 0;

for(let i = 0; i < array.length; i++){
    somma += array[i];
}

console.log(somma);*/


/* Inverti l'array di numeri usando il ciclo for e stampalo in console (qui dovrai ragionare su che tipo di condizioni mettere nel ciclo for)


let array = [1, 2, 3, 6, 10, 21];

let length = array.length;
let meta = Math.floor(length / 2);

for (let i = 0; i < meta; i++) {
    let temp = array[i];
    array[i] = array[length - 1 - i];
    array[length - 1 - i] = temp;
}

console.log(array);*/

/* Crea un array vuoto chiamalo "parole" e, tramite un ciclo for, popolalo
 di 5 parole (usa il prompt per inserire le parole). Quando è finito il ciclo esegui un nuovo ciclo che scorre l'array popolato
  e stampa a video solo le parole che 
hanno un numero dispari di lettere (tip: usa sempre il metodo length per contare le lettere di una parola)

const parole = [];

for (let i = 0; i < 5; i++) {
    const parola = prompt("Inserisci una parola:");
    parole.push(parola); 
}

for (let i = 0; i < parole.length; i++) {
    if (parole[i].length % 2 !== 0) {
        console.log(parole[i]);
    }
}*/


/*  Crea un oggetto chiamalo "person" ed assegnali le proprietà: name, age, city. Valorizza le proprietà e stampa l'oggetto in console */

const person = [
    {
        name: "Alessandro",
        age: 33,
        city: "Sicilia"
    },
    {
        name: "Ana",
        age: 30,
        city: "Sardegna"
    },
    {
        name: "Mattia",
        age: 31,
        city: "Calabria"
    },
    {
        name: "Marco",
        age: 25,
        city: "Veneto"
    }
];

console.log(person);


/* Riprendi l'oggetto precedente e stampa in console solo la proprietà age 

for (let i = 0; i < person.length; i++) {
    console.log(person[i].age); 
}*/


/* Modifica la proprietà age (senza modificare l'assegnazione iniziale) e ristampala in console

person[0].age = 31;
person[1].age = 40;
person[2].age = 51;
person[3].age = 71;

console.log(person);*/

/*Aggiungi la proprietà job (e valorizzala) all'oggetto senza modificaare l'assegnazione iniziale. Stampa quindi poi in console la nuova proprietà

person[0].job = "programmatore";
person[1].job = "scienziato";
person[2].job = "streamer";
person[3].job = "calciatore";

console.log(person);*/