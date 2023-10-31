var readlineSync = require('readline-sync');


// Opdracht A - Shake and return
var word = readlineSync.question('\nWoord dat geschud moet worden: ');
console.log(`it1: ${ShuffleString(word)}\nit2: ${ShuffleString(word)}\nit3: ${ShuffleString(word)}`)

function ShuffleString(stringToShuffle){
    const characters = stringToShuffle.split('');
    characters.sort(() => Math.random() - 0.5);
    return characters.join('');
};


// Opdracht B - Wiskunde
var kubusLength = readlineSync.questionInt('Lengte Kubus: ');
var kubusHeight = readlineSync.questionInt('Hoogte Kubus: ');
var kubusDepht = readlineSync.questionInt('Diepte Kubus: ');
function Cube(d, h, l){
    return d * h * l;
}
console.log(Cube(kubusDepht, kubusHeight, kubusLength));

var cylinderRadius = readlineSync.questionInt('Radius Cylinder: ');
var cylinderHeight = readlineSync.questionInt('Hoogte Cylinder: ');
function Cylinder(radius, height){
    return radius ^ 2 * Math.PI * height;
}
console.log(Cylinder(cylinderRadius, cylinderHeight));

var triangleLenght = readlineSync.questionInt('Lengte Driehoek: ');
var triangleHeight = readlineSync.questionInt('Hoogte Driehoek: ');
function Triangle(length, height){
    return Math.sqrt(length ^ 2 * height ^ 2);
}
console.log(Triangle(triangleLenght, triangleHeight));


// Opdracht C - Leeftijd berekenen
function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || today.getDate() < birthDate.getDate()) {
        age--;
    }
    return age;
}

var ageDate = readlineSync.question('Wanneer ben je geboren? (YYYY/MM/DD): ');
console.log(`Dus je bent ${getAge(ageDate)} jaar oud? Cool!`);