var readlineSync = require('readline-sync');


// Opdracht A - Hello World
console.log('Hello World!');


// Opdracht B - Player Statistics
var _name = "Dingleborg Tickletipson III";
var _money = Math.floor(Math.random() * 10000);
var _gunAmount = Math.floor(Math.random() * 5);
var _parentAmount = 0;
console.log(`Name: ${_name}\nMoney: ${_money}\nGun Amount: ${_gunAmount}\nParent Amount: ${_parentAmount}`);


// Opdracht C - Hello You
var userName = readlineSync.question('Wat is jouw naam?\nMijn naam is ')
console.log(`Ik vind ${userName} een hele mooie naam!\nEn hoe oud ben je ${userName}?`);

var readlineSync = require('readline-sync'),
    MAX = 60, MIN = 0, value = 30, key;
console.log('\n\n' + (new Array(20)).join(' ') +
    '[Z] <- -> [X]  KLAAR: [SPATIE]\n');
while (true) {

    console.log('\x1B[1A\x1B[K|' +
        (new Array(value + 1)).join('-') + 'O' +
        (new Array(MAX - value + 1)).join('-') + '| ' + value + " jaar");
    key = readlineSync.keyIn('',
        { hideEchoBack: true, mask: '', limit: 'zx ' });
    if (key === 'z') { if (value > MIN) { value--; } }
    else if (key === 'x') { if (value < MAX) { value++; } }
    else {
        console.log(`Dus je bent ${value} jaar? Dat is ${value < 18 ? 'jong' : 'oud'}!`)
        break;
    }
}


// Opdracht D - Rijmpje
var vers0 = "Ik heb een boot";
var vers1 = "Ik heb een hele mooie splinternieuwe boot";
var vers2 = "Haar naam is Anna en ze ligt hier in de sloot";
var vers3 = "En ik ga varen op het kanaal";
var vers4 = "Het is de allermooiste boot van allemaal";

for (var i = 0; i < 5; i++) {
    console.log(eval("vers" + i) + "\n");
}


// Text slicen
let text = 'mariospidersonicman';
let mario = text.slice(0, 5);
let spider = text.slice(5, 11);
let man = text.slice(16, 19);
let sonic = text.slice(11, 16);

let result = mario + " " + spider + man + " " + sonic;
console.log(`Original string: ${text}\nSliced string: ${result}`);