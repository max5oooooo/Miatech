/*Crea una classe chiamata Automobile con le seguenti proprietà: marca, modello, anno.
Crea un costruttore per inizializzare queste proprietà.
Aggiungi un metodo descrizione() che restituisce una stringa con una descrizione dell'automobile.
Aggiungi una proprietà chilometraggio alla classe Automobile.Aggiungi un metodo aggiungiChilometri(km) 
che aumenta il chilometraggio dell'automobile.
Aggiungi un metodo mostraChilometraggio() che restituisce il chilometraggio attuale dell'automobile.*/
class Automobile {


    constructor(marca, modello, anno) {
      this.marca = marca;
      this.modello = modello;
      this.anno = anno;
      this.chilometraggio = 0;
    }
  
    descrizione() {
      return `Questa è una ${this.marca} ${this.modello} del ${this.anno}.`;
    }

    aggiungiChilometri(km) {
        if (km >= 0) {
          this.chilometraggio += km;
        } else {
          console.error("Il valore dei chilometri deve essere positivo.");
        }
      }

      mostraChilometraggio() {
        return `L'automobile ha percorso ${this.chilometraggio} chilometri.`;
      }
  }
  

  const miaAuto = new Automobile("Fiat", "500", 2023);

  miaAuto.aggiungiChilometri(500);
  miaAuto.aggiungiChilometri(200);
  
  console.log(miaAuto.descrizione());

  console.log(miaAuto.mostraChilometraggio());

  
