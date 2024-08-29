/*Crea una classe chiamata Automobile con le seguenti proprietà: marca, modello, anno.
Crea un costruttore per inizializzare queste proprietà.
Aggiungi un metodo descrizione() che restituisce una stringa con una descrizione dell'automobile.
Aggiungi una proprietà chilometraggio alla classe Automobile.Aggiungi un metodo aggiungiChilometri(km) 
che aumenta il chilometraggio dell'automobile.
Aggiungi un metodo mostraChilometraggio() che restituisce il chilometraggio attuale dell'automobile.

-Aggiungi un metodo privato #calcolaEtà() alla classe Automobile che calcola e restituisce l'età dell'automobile basata sull'anno di fabbricazione.
Aggiungi un metodo pubblico mostraEtà() che utilizza il metodo privato #calcolaEtà() per mostrare l'età dell'automobile.

-Aggiungi un metodo protetto _controllaChilometri() alla classe Automobile che verifica se il chilometraggio supera un certo valore (ad esempio 100,000 km) e restituisce un avviso.
Utilizza questo metodo nella sottoclasse Elettrica per mostrare un avviso se il chilometraggio supera il limite.


-Aggiungi un metodo statico confrontaChilometraggio(auto1, auto2) alla classe Automobile. Questo metodo dovrebbe confrontare il chilometraggio di due automobili e restituire
quale delle due ha un chilometraggio maggiore, o se sono uguali.
Utilizza questo metodo statico per confrontare il chilometraggio di due istanze della classe Automobile.

-Aggiungi una proprietà privata #contatoreChiamate alla classe Automobile per tenere traccia del numero di chiamate a un certo metodo.

-Aggiungi un metodo privato #incrementaContatore() che aumenta il valore di #contatoreChiamate.


class Automobile {
  marca;
  modello;
  anno;
  chilometraggio;
  #contatoreChiamate ;

    constructor(marca, modello, anno, chilometraggio) {
      this.marca = marca;
      this.modello = modello;
      this.anno = anno;
      this.chilometraggio = chilometraggio;
      this.#contatoreChiamate  = 0;
    };
  
    #calcolaEtà() {
      const annoAttuale = new Date().getFullYear();
      return annoAttuale - this.anno;
    };
  
    
    mostraEtà() {
      const età = this.#calcolaEtà();
      console.log(`L'auto ${this.marca} ${this.modello} ha ${età} anni.`);
    };

    descrizione() {
      return `Questa è una ${this.marca} ${this.modello} del ${this.anno}.`;
    };

    aggiungiChilometri(km) {
        if (km >= 0) {
          this.chilometraggio += km;
        } else {
          console.error("Il valore dei chilometri deve essere positivo.");
        }
      };

      mostraChilometraggio() {
        return `L'automobile ha percorso ${this.chilometraggio} chilometri.`;
      };

      _controllaChilometraggio() {
        const limiteChilometri = 100000;
        if (this.chilometraggio > limiteChilometri) {
          console.warn(`Attenzione: l'auto ha superato i ${limiteChilometri} km. Potrebbe essere necessario un controllo.`);
        }
      };


      static confrontaChilometraggio(auto1, auto2) {
        if (auto1.chilometraggio > auto2.chilometraggio) {
          return `${auto1.marca} ${auto1.modello} ha più chilometri di ${auto2.marca} ${auto2.modello}`;
        } else if (auto1.chilometraggio < auto2.chilometraggio) {
          return `${auto2.marca} ${auto2.modello} ha più chilometri di ${auto1.marca} ${auto1.modello}`;
        } else {
          return `${auto1.marca} ${auto1.modello} e ${auto2.marca} ${auto2.modello} hanno lo stesso chilometraggio`;
        }
      };

      #incrementaContatore() {
        this.#contatoreChiamate++;
      }

      avviaMotore() {
        this.#incrementaContatore();
        console.log("Motore avviato!");
      }
    
      
      getNumeroAvviamenti() {
        return this.#contatoreChiamate;
      }


  }
  

  const miaAuto = new Automobile("Fiat", "500", 2021 , 12000);

  miaAuto.avviaMotore();
  miaAuto.avviaMotore();
  miaAuto.avviaMotore();
  miaAuto.avviaMotore();

  console.log("Il motore è stato avviato", miaAuto.getNumeroAvviamenti(), "volte.");

 
  
  console.log(miaAuto.descrizione());

  console.log(miaAuto.mostraChilometraggio());
  console.log(miaAuto.mostraEtà());

  const auto1 = new Automobile("Fiat", "500", 2020, 80000);
  const auto2 = new Automobile("Ford", "Focus", 2018, 80000);

  const risultatoConfronto = Automobile.confrontaChilometraggio(auto1, auto2);
  console.log(risultatoConfronto);  */

  


  /*Crea una sottoclasse chiamata Elettrica che estende la classe Automobile.
Aggiungi una nuova proprietà autonomia per rappresentare l'autonomia della batteria in km.
Sovrascrivi il metodo descrizione() per includere anche l'autonomia.
Aggiungi un metodo ricarica(km) che aumenta l'autonomia della batteria.

class Elettrica extends Automobile {
  autonomia;

  constructor(marca, modello, anno, autonomia, chilometraggio) {
    super(marca, modello, anno, chilometraggio);
    this.autonomia = autonomia;
  }

  descrizione() {
    return `${super.descrizione()}, autonomia: ${this.autonomia} km`;
  }

  ricarica(km) {
    this.autonomia += km;
    console.log(`Auto ricaricata: autonomia attuale ${this.autonomia} km`);
  }

  mostraInfo() {
    console.log(`Auto elettrica: ${this.marca} ${this.modello}, anno ${this.anno}, autonomia ${this.autonomia} km`);
    this._controllaChilometraggio(); 
  }
}


const fiat = new Elettrica("Fiat", "500", 2023, 450 ,120000);

fiat.mostraInfo();
console.log(fiat.descrizione()); 

fiat.ricarica(50);

console.log(fiat.descrizione());

fiat.ricarica(100);

console.log(fiat.descrizione());*/

/*Aggiungi un metodo saluta() alla classe Automobile utilizzando la prototype chain. Questo metodo dovrebbe restituire una stringa con un saluto che include la marca e il modello dell'automobile.
Verifica che tutte le istanze della classe Automobile (e le sue sottoclassi) possano accedere a questo metodo.

Automobile.prototype.saluta = function() {
  return `Ciao, sono una ${this.marca} ${this.modello}!`;
};

console.log(miaAuto.saluta());*/


/* seconda parte degli esercizi (p.s ho rifatto di nuovo la classe automobile perchè volevo avere la differenza tra le varie proprietà private e protette)
class Automobile {
  marca;
  modello;
  anno;
  #chilometraggio;
  #contatoreChiamateAggiungiChilometri;
  #contatoreChiamateAggiungiChilometraggio;

  constructor(marca, modello, anno) {
    this.marca = marca;
    this.modello = modello;
    this.anno = anno;
    this.#chilometraggio = 0;
    this.#contatoreChiamateAggiungiChilometri = 0;
    this.#contatoreChiamateAggiungiChilometraggio = 0;
  }

  static verificaIstanza(obj, classe) {
    if (obj instanceof classe) {
        return `L'oggetto è un'istanza di ${classe.name}`;
    } else {
        return `L'oggetto non è un'istanza di ${classe.name}`;
    }
}

  #incrementaContatoreAggiungiChilometri() {
    this.#contatoreChiamateAggiungiChilometri++;
  }

  aggiungiChilometraggio(km) {
    this.#contatoreChiamateAggiungiChilometraggio++;
    this.#chilometraggio += km;
    this.#incrementaContatoreAggiungiChilometri();
  }

  getChilometraggio() {
    return this.#chilometraggio;
  }

  getNumeroChiamateAggiungiChilometraggio() {
    return this.#contatoreChiamateAggiungiChilometraggio;
  }

  get chilometraggio() {
    return this.#chilometraggio;
  }

  set chilometraggio(nuovoChilometraggio) {
    if (nuovoChilometraggio >= this.#chilometraggio) {
      this.#chilometraggio = nuovoChilometraggio;
    } else {
      console.error("Il nuovo chilometraggio deve essere maggiore o uguale a quello attuale.");
    }
  }
}

const miaAuto = new Automobile("Fiat", "500", 2020);
miaAuto.chilometraggio = 300;
miaAuto.chilometraggio = 400;
miaAuto.chilometraggio = 200;
miaAuto.aggiungiChilometraggio(100);
miaAuto.aggiungiChilometraggio(50);


console.log("Chilometraggio totale:", miaAuto.getChilometraggio());
console.log("Numero di chiamate a aggiungiChilometraggio:", miaAuto.getNumeroChiamateAggiungiChilometraggio());
console.log("Il chilometraggio attuale è:", miaAuto.chilometraggio);


class Camion extends Automobile {

  caricoAttuale;

  constructor(marca, modello, anno, portataMassima) {

      super(marca, modello, anno);
      this.portataMassima = portataMassima;
      this.caricoAttuale = 0;
  }

  get caricoMassimo() {
    return this.portataMassima;
  }

  descrizione() {
    return `Camion ${this.marca} ${this.modello} - Anno: ${this.anno} - Portata massima: ${this.caricoMassimo} kg`;
    }

  carica(kg) {
    if (this.caricoAttuale + kg <= this.portataMassima) {
        this.caricoAttuale += kg;
        console.log(`Carico aumentato di ${kg} kg. Carico attuale: ${this.caricoAttuale} kg`);
    } else {
        console.error("Superamento del carico massimo consentito.");
    }
  }
}

const mioCamion = new Camion("Iveco", "Daily", 2022, 3500);
console.log(mioCamion.descrizione()); 

mioCamion.carica(2000); 
mioCamion.carica(1400);

class Moto{
  marca;
  modello;
  anno;

  constructor(marca, modello, anno) {
    this.marca = marca;
    this.modello = modello;
    this.anno = anno;
  }
}

const miaMoto = new Moto("Suzuki", "boh", 2000);


console.log(miaAuto instanceof Automobile); 
console.log(mioCamion instanceof Automobile); 
console.log(mioCamion instanceof Camion);

console.log(miaMoto instanceof Camion); */