/* Creare una funzione che restituisca una promessa che può risolversi o essere rifiutata in base a un valore casuale. 
Utilizzare then per creare una catena di promesse che manipoli il risultato se la promessa si risolve e gestisca l'errore se la promessa viene rifiutata. Stampare i risultati finali o i messaggi di errore.

function promessa() {
    return new Promise((resolve, reject) => {
      const random = Math.random();
      if (random < 0.5) {
        resolve(random);
      } else {
        reject(new Error("Promessa rifiutata!"));
      }
    });
  }

  promessa()
  .then(risultato => {
    console.log("Risultato positivo:", risultato);
  })
  .catch(errore => {
    console.error("Errore:", errore.message);
  })
  .finally(() => {
    console.log("Operazione completata.");
  });*/


/*Creare una funzione che restituisca una promessa che viene rifiutata con un messaggio di errore. Utilizzare catch per gestire l'errore e stampare il messaggio nella console.

function promessaRifiutata() {
    return new Promise((resolve, reject) => {
      reject(new Error("Non si può risolvere"));
    });
  }
  
  promessaRifiutata()
    .catch(errore => {
      console.error("Si è verificato un errore:", errore.message);
    });*/

/*Creare una funzione che restituisca una promessa che può risolversi o essere rifiutata in base a un valore booleano passato come parametro. 
Utilizzare then e catch per gestire sia il caso di successo sia quello di errore.

function promessa(condizione) {
    return new Promise((resolve, reject) => {
        if(condizione){
            resolve("promessa risolta")
        }else{
            reject(new Error("Non si può risolvere"));
        }
    });
  }

  promessa(true)
  .then(risultato => {
    console.log(risultato); // Stampa: Promessa risolta con successo!
  })
  .catch(errore => {
    console.error("Si è verificato un errore:", errore.message);
  });

  promessa(false)
  .then(risultato => {
  })
  .catch(errore => {
    console.error("Si è verificato un errore:", errore.message); 
  });*/

/*Creare una funzione che restituisca una promessa che può risolversi o essere rifiutata in base a un
 valore casuale. Utilizzare then per creare una catena di promesse e catch per gestire eventuali errori in qualsiasi punto della catena.

 function promessa() {
    return new Promise((resolve, reject) => {
      const random = Math.random();
      if (random < 0.5) {
        resolve(random);
      } else {
        reject(new Error("Promessa rifiutata!"));
      }
    });
  };

  promessa()
  .then(risultato => {
    console.log("Risultato positivo:", risultato);
    return promessa2(); 
  })
  .then(risultatoNuovaOperazione => {
    console.log("Risultato della nuova operazione:", risultatoNuovaOperazione);
  })
  .catch(errore => {
    console.error("Si è verificato un errore:", errore.message);
  });

  function promessa2() {
    return new Promise((resolve, reject) => {
      const random = Math.random();
      if (random < 0.7) {
        resolve(random);
      } else {
        reject(new Error("Promessa rifiutata!"));
      }
    });
  }*/

/* Creare due funzioni che restituiscano promesse che si risolvono dopo tempi diversi. Utilizzare Promise.all per eseguire entrambe le promesse in parallelo e stampare i risultati quando entrambe sono risolte.


function promessaLenta() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Promessa lenta risolta!');
      }, 3000); 
    });
  }
  
  function promessaVeloce() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Promessa veloce risolta!');
      }, 1000);
    });
  }
  
  Promise.all([promessaLenta(), promessaVeloce()])
    .then(risultati => {
      console.log(risultati); 
    })
    .catch(errore => {
      console.error('Si è verificato un errore:', errore);
    });*/

/*Creare due funzioni che restituiscano promesse che si risolvono dopo tempi diversi. Utilizzare Promise.race per eseguire entrambe le promesse in parallelo e stampare il risultato della prima promessa che si risolve.
function promessaLenta() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Promessa lenta risolta!');
      }, 3000); 
    });
  }
  
  function promessaVeloce() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Promessa veloce risolta!');
      }, 1000);
    });
  }
  
  Promise.race([promessaLenta(), promessaVeloce()])
    .then(risultati => {
      console.log(risultati); 
    })
    .catch(errore => {
      console.error('Si è verificato un errore:', errore);
    });*/

/*Creare tre funzioni che restituiscano promesse, due delle quali si risolvono e una viene rifiutata. Utilizzare Promise.allSettled per eseguire tutte le promesse in parallelo e stampare i risultati quando tutte sono state completate, indipendentemente dal fatto che siano state risolte o rifiutate.

function promessaLenta() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Promessa lenta risolta!');
      }, 3000); 
    });
  }
  
  function promessaVeloce() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Promessa veloce risolta!');
      }, 1000);
    });
  }

  function promessaRifiutata() {
    return new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error('Promessa rifiutata!'));
      }, 1500);
    });
  }

  Promise.allSettled([promessaLenta(), promessaVeloce(), promessaRifiutata()])
  .then(results => {
    results.forEach(result => {
      if (result.status === 'fulfilled') {
        console.log(result.value);
      } else if (result.status === 'rejected') {
        console.error(result.reason);  
      }
    });
  });*/