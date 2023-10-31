var readlineSync = require('readline-sync');


// Opdracht A - Fibonacci
let n1 = 0, n2 = 1, nextTerm;
for (let i = 1; i <= 200; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}


// Opdracht B - Raad het getal
var randomNum = Math.floor(Math.random() * 100)

for (let index = 0; index < 200; index++) {
    var userAnswer = readlineSync.questionInt('Kies een willekeurig getal (0-100)')
    if(userAnswer > 100 || userAnswer < 0){
        console.log('Het is een getal boven de 0 en onder de 100!')
    }
    else if(userAnswer < randomNum){
        console.log('Het getal is hoger')
    }
    else if(userAnswer > randomNum){
        console.log('Het getal is lager')
    }
    else{
        console.log(`Dat klopt! Het getal was ${randomNum}`)
        return;
    }
}


// Opdracht C - Tafels
for (let index = 0; index < 51; index++) {
    for (let index2 = 0; index2 < 51; index2++) {
        console.log(`${index} * ${index2} = ${index * index2}`)
    }
}

// Opdracht D - Factoriaal
function factoriaal(num){
    temp = 1;
    for (let index = num; index > 0; index--) {
        temp *= index;
    }
    return temp;
}
console.log(factoriaal(6))


// Opdracht E - Cookie clicker
var intr = ` ____ ____ ____ ____ ____ _________ ____ ____ ____ ____ ____ ____ ____ 
||E |||n |||t |||e |||r |||       |||C |||l |||i |||c |||k |||e |||r ||
||__|||__|||__|||__|||__|||_______|||__|||__|||__|||__|||__|||__|||__||
|/__\|/__\|/__\|/__\|/__\|/_______\|/__\|/__\|/__\|/__\|/__\|/__\|/__\|`

var score = 0;
EnterClick();

function EnterClick(){
    console.clear()
    console.log(intr)

    var input = readlineSync.keyInYN(`Score: ${score} (\'y\' to click, \'n\' to return)`)
    if(input){
        score++;
        EnterClick();
    }
    else if(!input){
        return;
    }
}