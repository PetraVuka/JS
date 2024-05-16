//Zadatak 1.
function obrniString(input) {
    // Pretvaranje stringa u niz, okretanje niza i ponovno spajanje u string
    return input.split('').reverse().join('');
}

// Testiranje funkcije
const original = "Abc123deF";
const obrnuto = obrniString(original);
console.log(obrnuto); // Output: Fed321cbA

//Zadatak 2
function najduziString(lista) {
    if (lista.length === 0) {
        return null; // Vraća null ako je lista prazna
    }

    let najduzi = lista[0];

    for (let i = 1; i < lista.length; i++) {
        if (lista[i].length > najduzi.length) {
            najduzi = lista[i];
        }
    }

    return najduzi;
}

// Testiranje funkcije
const listaStringova = ["jabuka", "banana", "lubenica", "ananas", "kivi"];
const najduzi = najduziString(listaStringova);
console.log(najduzi); // Output: "lubenica"


//Zadatak 3
function brojPonavljanjaZnaka(input) {
    const rezultat = {};

    for (let i = 0; i < input.length; i++) {
        const znak = input[i];
        if (rezultat[znak]) {
            rezultat[znak]++;
        } else {
            rezultat[znak] = 1;
        }
    }

    return rezultat;
}

// Testiranje funkcije
const string = "klasa";
const ponavljanja = brojPonavljanjaZnaka(string);
console.log(ponavljanja); // Output: { k: 1, l: 1, a: 2, s: 1 }

