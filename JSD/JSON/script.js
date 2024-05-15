//Kreiranje klase i instanciranje objekta
class Osoba {
    constructor(ime, prezime) {
      this.ime = ime;
      this.prezime = prezime;
    }
  
    pozdrav() {
      console.log(`Pozdrav, ja sam ${this.ime} ${this.prezime}!`);
    }
  }
  
  // Instanciranje objekta klase Osoba
  const osoba1 = new Osoba('Ana', 'Anić');
  osoba1.pozdrav(); // Output: Pozdrav, ja sam Ana Anić!
  
  
  //Kreiranje JSON datoteke i primjeri korištenja
  {
    "osobe": [
      {
        "ime": "Ana",
        "prezime": "Anić"
      },
      {
        "ime": "Marko",
        "prezime": "Marković"
      }
    ]
  }
  

  fetch('osobe.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Ovdje možeš koristiti podatke iz JSON datoteke
  })
  .catch(error => console.error('Došlo je do greške:', error));


  //Korištenje biblioteke po izboru
  const _ = require('lodash');

const numbers = [1, 2, 3, 4, 5];

const sum = _.sum(numbers);
console.log(sum); // Output: 15
