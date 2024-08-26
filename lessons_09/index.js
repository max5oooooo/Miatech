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


/*  Crea un oggetto chiamalo "person" ed assegnali le proprietà: name, age, city. Valorizza le proprietà e stampa l'oggetto in console 

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

console.log(person);*/


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

/*Utilizza il "for in" per iterare le proprietà dell'oggetto e stampare all'interno del ciclo sia il nome della proprietà che il suo valore in console

for (let proprietà in person) {
    console.log("Proprietà:", proprietà, "Valore:", person[proprietà]);
  }*/


/* Crea una funzione chiamata outerFunction che accetta un parametro x.
All'interno di outerFunction, crea una funzione chiamata innerFunction che accetta un parametro y.
innerFunction deve restituire la somma di x e y.
outerFunction deve restituire innerFunction.


function outerFunction(x) {
    function innerFunction(y) {
      return x + y;
    }
    return innerFunction;
  }

const firstFunction = outerFunction(4);

const result = firstFunction(5);

console.log(result);*/

/*Utilizza il codice dell'esercizio precedente (Funzioni annidate).
Modifica outerFunction in modo che accetti un secondo parametro initialValue e memorizzi il valore iniziale in una variabile chiamata result.
innerFunction dovrebbe aggiungere y a result anziché restituire semplicemente la somma di x e y.
innerFunction dovrebbe restituire result.
outerFunction dovrebbe restituire innerFunction.


function outerFunction(x, initialValue) {
    let result = initialValue;
  
    function innerFunction(y) {
      result += y;
      return result;
    }
  
    return innerFunction;
  }

  const firstFunction = outerFunction(4, 10);

  console.log(firstFunction(3));
  console.log(firstFunction(5));*/

  /*Crea una funzione chiamata createCounter che restituisce un oggetto con due metodi: increment e decrement.
Utilizza una variabile locale chiamata count per tenere traccia del conteggio.
Il metodo increment dovrebbe aumentare count di 1 e restituire il nuovo valore.
Il metodo decrement dovrebbe diminuire count di 1 e restituire il nuovo valore.

function createCounter() {
    let count = 0;
  
    return {
      increment: () => {
        count++;
        return count;
      },
      decrement: () => {
        count--;
        return count;
      }
    };
  }

const counter = createCounter();

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());*/

/* Crea un oggetto chiamato student con le seguenti proprietà: name, age, grade, school.
Usa Object.keys() per ottenere tutte le chiavi dell'oggetto student.
Stampa l'array delle chiavi ottenute sulla console. (qui sotto anche l'esercizio con values e con entries.

const student = {
    name: "Francesco Oranzini",
    age: 28,
    grade: "infinito",
    work: "Tutor mia"
};

const keys = Object.keys(student);

const values = Object.values(student);

const entries = Object.entries(student);



console.log(keys);
console.log(values);
console.log(entries);*/

/*Crea un array chiamato numbers contenente i numeri da 1 a 5.
Usa forEach per stampare ogni numero moltiplicato per 2.
Usa map per creare un nuovo array squaredNumbers contenente i quadrati di ogni numero in numbers.
Stampa il nuovo array squaredNumbers sulla console.

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(number => {
  console.log(number * 2);
});

const moltipliedNumbers = numbers.map(number => number * number);

console.log(moltipliedNumbers);*/


/*Crea un array chiamato students contenente oggetti con le seguenti proprietà: name e grade.
Usa filter per creare un nuovo array passedStudents contenente solo gli studenti con una grade maggiore o uguale a 60.
Usa find per trovare il primo studente con una grade minore di 60.
Stampa il nuovo array passedStudents e lo studente trovato con find sulla console.

const students = [
    { name: "Marco Ragno", grade: 75 },
    { name: "Mattia Pastafiglia", grade: 58 },
    { name: "Ana Munteanu", grade: 82 },
    { name: "Alessandro Turacci", grade: 60 }
];

const promotedStudents = students.filter(student => student.grade >= 60);


const failedStudent = students.find(student => student.grade < 60);


console.log("Studenti promossi:");
console.log(promotedStudents);

console.log("Primo studente bocciato:");
console.log(failedStudent);*/


/* Crea un array chiamato expenses contenente numeri che rappresentano varie spese.
Usa reduce per calcolare la somma totale di tutte le spese.
Crea un array chiamato words contenente le seguenti parole: "banana", "apple", "cherry", "date".
Usa sort per ordinare l'array words in ordine alfabetico.
Stampa la somma totale delle spese e l'array words ordinato sulla console. 


const expenses = [100, 50, 25, 75];

const totalCost = expenses.reduce((total, expense) => total + expense, 0);


const words = ["banana", "apple", "cherry", "date"];


const sortedWords = words.sort();

console.log("Spese totali:", totalCost);
console.log("Parole ordinate:", sortedWords);*/