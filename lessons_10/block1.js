/*Creare uno script che utilizzi un blocco try per eseguire un'operazione su
 una stringa e gestisca diversi tipi di errori (ad esempio, un errore di tipo e un errore generico).
 Stampare un messaggio di errore appropriato nella console. javascript

function operationSuStringa(stringa) {
    try {
      let numero = Number(stringa);
      let risultato = numero * numero;
      throw new ReferenceError();
      console.log(`Il quadrato di ${numero} è: ${risultato}`);
    } catch (error) {
      if(error instanceof ReferenceError){
        console.error("referenceError");
      }else{
        console.error("warning");
      }
  }
}

operationSuStringa("42");
operationSuStringa("ciao"); 
operationSuStringa("10a");*/



/*Creare uno script che utilizzi un blocco try, catch e finally per gestire un errore e stampare un messaggio 
che indica che l'operazione è stata completata, indipendentemente dal risultato.

function divisione(dividendo, divisore) {
    try {
      if(divisore == 0){
        throw new Error("il risultato non è divisibile");
      }else{
        const risultato = dividendo / divisore;
        console.log(`Il risultato della divisione è: ${risultato}`);
      }
    } catch (error) {
      console.error("Errore: Impossibile dividere per zero!");
    }finally{
        console.log("operazione completata.")
    }
  };


  divisione(15, 0);*/


/* Creare una funzione che accetti un callback e lo esegua dopo aver eseguito un'operazione 
semplice (ad esempio, una somma). Stampare il risultato dell'operazione e poi eseguire il callback.
function operazione(a, b, callback) {
const risultato = a + b;
console.log(`Il risultato dell'operazione è: ${risultato}`);
callback(risultato);
}
  
function mostraRisultato(risultato) {
console.log(`Il risultato finale è: ${risultato}`);
}
  
operazione(5, 3, mostraRisultato);*/


/*Creare una funzione che accetti un callback e gli passi un parametro. La funzione principale dovrebbe 
eseguire un'operazione e poi chiamare il callback con il risultato dell'operazione.

function operazioneConCallBack(operazione, valore, callback) {
    const risultato = operazione(valore);
    callback(risultato);
  }

  function calcolaQuadrato(numero) {
    return numero * numero;
  }

  function mostraRisultato(risultato) {
    console.log("Il risultato è:", risultato);
  }
  
  operazioneConCallBack(calcolaQuadrato, 9, mostraRisultato);*/


/*Creare due funzioni che accettano callback e utilizzarle per eseguire operazioni sequenziali.
 La prima funzione dovrebbe eseguire un'operazione e chiamare un callback che esegue un'altra operazione.
function operazione1(callback) {
console.log("Inizio operazione 1");
 setTimeout(() => {
 const risultato1 = "Risultato dell'operazione 1";
console.log("Fine operazione 1");
callback(risultato1);
}, 1000);
}
  
function operazione2(risultato1, callback) {
console.log("Inizio operazione 2");
const risultato2 = `Risultato dell'operazione 2 basato su ${risultato1}`;
console.log("Fine operazione 2");
callback(risultato2);
}
  

operazione1((risultato1) => {
operazione2(risultato1, (risultato2) => {
  console.log("Risultato finale:", risultato2);
 });
 });*/

 /* Creare una funzione che restituisca una promessa che si risolve dopo 2 
 secondi con un messaggio. Utilizzare then per stampare il messaggio quando la promessa viene risolta.


 function promessa() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("La promessa è stata risolta dopo 2 secondi!");
      }, 2000);
    });
  }
  
  promessa()
    .then((messaggio) => {
      console.log(messaggio);
    });*/


/*Modificare la funzione precedente per includere una condizione 
che provoca il rifiuto della promessa. Utilizzare catch per gestire l'errore e stampare un messaggio di errore.

function promessa() {
    return new Promise((resolve, reject) => {
      const condizione = Math.random() < 0.5; 
  
      if (condizione) {
        resolve("La promessa è stata risolta con successo!");
      } else {
        reject(new Error("Si è verificato un errore!"));
      }
    });
  }
  
  promessa()
    .then((messaggio) => {
      console.log(messaggio);
    })
    .catch((errore) => {
      console.error("Errore:", errore.message);
    });*/


/*Creare una funzione che restituisca una promessa e utilizzi finally per eseguire un'azione 
indipendentemente dal fatto che la promessa sia risolta o rifiutata. Stampare un messaggio nel blocco finally.


function promessa() {
    return new Promise((resolve, reject) => {
      const condizione = Math.random() < 0.5; 
  
      if (condizione) {
        resolve("La promessa è stata risolta con successo!");
      } else {
        reject(new Error("Si è verificato un errore!"));
      }
    })
    .finally(()=>{
        console.log("operazione completata, indipendentemente dal risultato")
    });
  };

  promessa();*/



/*Creare una funzione che restituisca una promessa che si risolve dopo 1 secondo con un numero. Utilizzare then per creare una catena
 di promesse che moltiplichi il numero per 2 e poi lo aggiunga a 3. Stampare il risultato finale.

  function numero() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Math.round(Math.random() * 10)); 
      }, 1000);
    });
  }
  
  numero()
    .then(numero => {
      console.log("Numero generato:", numero);
      return numero * 2;
    })
    .then(numeroDoppio => {
      console.log("Numero doppio:", numeroDoppio);
      return numeroDoppio + 3;
    })
    .then(risultatoFinale => {
      console.log("Risultato finale:", risultatoFinale);
    });
    */

/*Creare una funzione che restituisca una promessa che si risolve con un numero dopo 1 secondo. Utilizzare then per creare una catena di promesse che verifichi se il numero è pari o dispari, 
e manipolare il numero di conseguenza. Stampare il risultato finale.

function numero() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Math.round(Math.random() * 10)); 
      }, 1000);
    });
  };

  numero()
  .then(numero => {
    console.log("Numero generato:", numero);
    if (numero % 2 === 0) {
      return numero * 2; 
    } else {
      return numero + 5;
    }
  })
  .then(risultatoFinale => {
    console.log("Risultato finale:", risultatoFinale);
  });
*/
