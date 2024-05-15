//Zadatak 5. ispisati br od 1-10 (0i10)
//a) for petlja
for (let i = 0; i <= 10; i++) {
    console.log(i);
}
//b) while petlja
let a = 0;
while (i <= 10) {
    console.log(i);
    a++;
}


//Zadatak 6. for petlja
for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}


//Zadatak 7. while petlja
let x = 4;
let product = 1;
while (x <= 8) {
    product *= i;
    x++;
}
console.log(product);


//Zadatak 8. for petlja
let count = 0;
for (let number = 1; number <= 15; number++) {
    if (number % 2 !== 0) {
        count++;
        if (count % 2 === 1) { 
            console.log(number);
        }
    }
}

//Zadatak 9. while petlja
let array = [1, 6, 2, 4, 8];
let index = 0;
while (index < array.length) {
    console.log(array[index]);
    index++;
}


//Zadatak 10. for petlja
for (let number = 10; number >= 1; number--) {
    console.log(number);
}


//Zadatak 11. while petlja
let i = 1;
while (i <= 5) {
    let j = 1;
    while (j <= 5) {
        console.log(`${i} * ${j} = ${i * j}`);
        j++;
    }
    console.log('----------'); // Razdvajanje svake tablice radi čitljivosti
    i++;
}


//Zadatak 12. for petlja
let lista = [2, "pozdrav", true, 5, "programiranje"];

for (let i = 0; i < lista.length; i++) {
    if (typeof lista[i] === 'string') {
        console.log(lista[i]);
    }
}

