var readlineSync = require('readline-sync');


// Opdracht A - Moet ik op school zijn?
let time = new Date();
console.log(time.getHours() > 9 || time.getHours() < 16 ? `BEN JE WEL OP SCHOOL? HET IS NAMELIJK ${time.getHours()} UUR` : `Je kan lekker gamen ofzo, het is ${time.getHours()} uur :D`);


// Opdracht B - May I come in?
var userAge = readlineSync.questionInt("\nGoedenavond, hoe oud bent u?\nIk ben... ");
if (userAge >= 21) {
    var checkID = readlineSync.keyInYN("Mag ik je ID zien?");
    if (checkID) {
        console.log("Kom verder.");
    }
    else {
        console.log("Dat is heel ongeloofwaardig...");
    }
}
else {
    console.log("Je bent te jong, kom weer terug als je 21 of ouder bent.");
}


// Opdracht C - Welke dag?
var schooldag = time.getDay() > 5 ? false : true;
if(schooldag){
    console.log("\nSchooltijd :<");
}
else{
    console.log("\nWeekend :D");
}