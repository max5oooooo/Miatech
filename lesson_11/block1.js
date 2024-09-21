/*Crea un html con un paragrafo e stampa l'oggetto document
console.log(document);*/


/*Creare uno script che selezioni un elemento della pagina HTML tramite getElementById

const prova1 = document.getElementById("prova1");*/



/*Creare uno script che selezioni un elemento della pagina HTML tramite querySelector
const prova1 = document.querySelector("#prova1");*/


/*Crea un paragrafo e modificane il testo con innerText
const testo = document.querySelector("#testo");

testo.innerText = "il testo è stato modificato";*/

/*Cambia lo stile del paragrafo modificando il background-color e il font-size tramite Javascript

const testo = document.querySelector("#testo");

testo.style.backgroundColor = "red";
testo.style.fontSize = "24px";*/


/*Modifica il contenuto HTML del paragrafo aggiungendo un bottone all'interno di esso usando innerHTML
const testo = document.querySelector("#testo");

const bottone =` <button>Cliccami</button>`;

testo.innerHTML += bottone;*/


/*Crea una lista non ordinata usando il metodo createElement()
Aggiungi 5 list items alla lista non ordinata creata in precedenza usando sempre il createElement()
const contenitoreLista = document.querySelector("#listaNonOrdinata");

const lista = document.createElement(`ul`);
const lista1 = document.createElement(`li`);
lista1.textContent = `primalista`;
const lista2 = document.createElement(`li`);
lista2.textContent = `secondalista`;
const lista3 = document.createElement(`li`);
lista3.textContent = `terza lista`;
const lista4 = document.createElement(`li`);
lista4.textContent = `quarta  lista`;
const lista5 = document.createElement(`li`);
lista5.textContent = `quinta lista`;

lista.appendChild(lista1);
lista.appendChild(lista2);
lista.appendChild(lista3);
lista.appendChild(lista4);
lista.appendChild(lista5);

console.log(lista)

contenitoreLista.appendChild(lista);*/

/*Crea un form con 2 input di testo: nome e cognome. Crea un bottone di submit del form. Gestisci l'evento submit in modo che prima che venga inviato un form mostri un alert 
se i campi non sono compilati, se sono compilati potrà eseguire il submit del form.
function validateForm() {
    let nome = document.getElementById("nome").value;
    let cognome = document.getElementById("cognome").value;  
    if (nome === "" || cognome === "") {
        alert("Per favore, compila tutti i campi.");
        return false; 
    } else {
        return true; 
    }
}*/


