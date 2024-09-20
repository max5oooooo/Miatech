/*Creare uno script che salvi, recuperi e rimuova un cookie. Stampare i valori nella console durante ogni operazione.
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value  || "") + expires + "; path=/";
    console.log("Cookie" + name + "' impostato con valore: " + value);
  }
  
  
  function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ)  === 0) 
        return c.substring(nameEQ.length, c.length);
    }
    return  
   null;
  }
  
  function deleteCookie(name) {
    setCookie(name, "", -1);
    console.log("Cookie '" + name + "' eliminato");
  }
  
  setCookie("mioCookie", "Hello", 7);
  
  let cookieValue = getCookie("mioCookie");
  console.log("Valore del cookie 'mioCookie': " + cookieValue);
  
  deleteCookie("mioCookie");*/


  /*Creare uno script che salvi, recuperi e rimuova un valore nel localStorage. Stampare i valori nella console durante ogni operazione.

  function salvaNelLocalStorage(chiave, valore) {
    localStorage.setItem(chiave, valore);
    console.log("Valore" + valore + " salvato nel localStorage con chiave " + chiave + " ");
  }
  
  
  function recuperaDalLocalStorage(chiave) {
    const valore = localStorage.getItem(chiave);
    console.log("Valore recuperato dal localStorage con chiave" + chiave + ":" + valore);
    return valore;
  }
  

  function rimuoviDalLocalStorage(chiave) {
    localStorage.removeItem(chiave);
    console.log("Valore con chiave " + chiave + " rimosso dal localStorage");
  }
  

  salvaNelLocalStorage("nomeUtente", "Mario Rossi");
  

  const nomeUtente = recuperaDalLocalStorage("nomeUtente");
  

  rimuoviDalLocalStorage("nomeUtente");*/

/*Creare uno script che salvi, recuperi e rimuova un valore nel sessionStorage. Stampare i valori nella console durante ogni operazione.


function salvaNelSessionStorage(chiave, valore) {
    sessionStorage.setItem(chiave, valore);
    console.log("Valore" + valore + " salvato nel SessionStorage con chiave " + chiave + " ");
  }
  
  
  function recuperaDalSessionStorage(chiave) {
    const valore = sessionStorage.getItem(chiave);
    console.log("Valore recuperato dal SessionStorage con chiave" + chiave + ":" + valore);
    return valore;
  }
  

  function rimuoviDalSessionStorage(chiave) {
    sessionStorage.removeItem(chiave);
    console.log("Valore con chiave " + chiave + " rimosso dal SessionStorage");
  }
  

  salvaNelSessionStorage("nomeUtente", "Mario Rossi");
  

  const nomeUtente = recuperaDalSessionStorage("nomeUtente");
  

  rimuoviDalSessionStorage("nomeUtente");*/


  /*Creare uno script che salvi valori sia nel localStorage che nel sessionStorage, li recuperi e li rimuova. Stampare i valori nella console durante ogni operazione.

  function salvaInEntrambiStorage(chiave, valore) {
    localStorage.setItem(chiave, valore);
    sessionStorage.setItem(chiave, valore);
    console.log("Valore '" + valore + "' salvato sia in localStorage che in sessionStorage con chiave '" + chiave + "'");
  };

  function recuperaDalLocalStorage(chiave) {
    const valore = localStorage.getItem(chiave);
    console.log("Valore recuperato dal localStorage con chiave" + chiave + ":" + valore);
    return valore;
  }

  function recuperaDalSessionStorage(chiave) {
    const valore = sessionStorage.getItem(chiave);
    console.log("Valore recuperato dal SessionStorage con chiave" + chiave + ":" + valore);
    return valore;
  }
  

  function rimuoviDalLocalStorage(chiave) {
    localStorage.removeItem(chiave);
    console.log("Valore con chiave " + chiave + " rimosso dal localStorage");
  }

  function rimuoviDalSessionStorage(chiave) {
    sessionStorage.removeItem(chiave);
    console.log("Valore con chiave " + chiave + " rimosso dal SessionStorage");
  }

salvaInEntrambiStorage("nomeUtente", "Mario Rossi");

const nomeUtenteDaLocalStorage = recuperaDalLocalStorage("nomeUtente");

const nomeUtenteDaSessionStorage = recuperaDalSessionStorage("nomeUtente");


rimuoviDalLocalStorage("nomeUtente");


rimuoviDalSessionStorage("nomeUtente");*/



