/* Creare una funzione asincrona che utilizzi await per attendere una promessa che si risolve dopo 2 
secondi con un messaggio. Stampare il messaggio quando la promessa viene risolta.

async function messaggio() {
    const promessa = new Promise((resolve) => {
      setTimeout(() => {
        resolve("La promessa è stata risolta dopo 2 secondi!");
      }, 2000);
    });
    const messaggio = await promessa;
    console.log(messaggio);
  };
  
  messaggio();*/

  /* Creare una funzione asincrona che utilizzi await per attendere una promessa che può essere risolta o rifiutata in base a un valore booleano passato 
  come parametro. Utilizzare try e catch per gestire l'errore e stampare il messaggio di errore.

  async function asincrona(condizione) {
    try {
      const promessa = new Promise((resolve, reject) => {
        setTimeout(() => {
          if (condizione) {
            resolve('Promessa risolta!');
          } else {
            reject(new Error('Promessa rifiutata!'));
          }
        }, 1000);
      });
      const risultato = await promessa;
      console.log(risultato);
    } catch (error) {
      console.error('Si è verificato un errore:', error.message);
    }
  }
  
  asincrona(true);  
  asincrona(false); */
  
/*Creare due funzioni asincrone che restituiscano promesse che si risolvono dopo tempi diversi. Creare una terza funzione asincrona che utilizzi
 await per chiamare le prime due funzioni in serie e stampare i risultati quando entrambe sono risolte.

 async function funzioneLenta() {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log('Funzione lenta terminata');
        resolve('Risultato della funzione lenta');
      }, 3000); 
    });
  }
  
  async function funzioneVeloce() {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log('Funzione veloce terminata');
        resolve('Risultato della funzione veloce');
      }, 1000); 
    });
  }
  
  async function funzionePrincipale() {
    try {
      const risultatoLento = await funzioneLenta();
      const risultatoVeloce = await funzioneVeloce();
  
      console.log('Risultati finali:', risultatoLento, risultatoVeloce);
    } catch (error) {
      console.error('Si è verificato un errore:', error);
    }
  }
  
  funzionePrincipale();*/

  /*Creare una funzione che utilizzi fetch per eseguire una richiesta GET a un'API pubblica e stampare i dati restituiti nella console.

  async function dati(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Si  è verificato un errore:', error);
    }
  };

  dati(`https://jsonplaceholder.typicode.com/posts`);*/

  /*Creare una funzione che utilizzi fetch per eseguire una richiesta POST a un'API pubblica, inviando alcuni dati nel corpo della richiesta, e stampare i dati restituiti nella console

  async function inviaRichiestaPOST(url, dati) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dati)
      });
  
      if (!response.ok) {
        throw new Error('La richiesta è fallita. Codice di stato: ' + response.status);
      }
  
      const data = await response.json();
      console.log('Risposta dell\'API:', data);
    } catch (error) {
      console.error('Si è verificato un errore:', error.message);
    }
  }

  const datiDaInviare = {
    title: 'Nuovo post',
    body: 'Questo è il corpo del nuovo post',
    userId: 1
  };
  
  inviaRichiestaPOST('https://jsonplaceholder.typicode.com/posts', datiDaInviare);*/