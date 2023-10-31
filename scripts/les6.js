var readlineSync = require('readline-sync');


// Opdracht A - Spongebob mocking
function mockString(str) {
    let toMock = str.split('');
    for (let index = 0; index < toMock.length; index++) {
        toMock[index] = Math.random() > 0.5 ? toMock[index].toUpperCase() : toMock[index].toLowerCase();
    }
    return toMock.join('');
}

let woord = readlineSync.question('Word to mock: ');
console.log(mockString(woord));


// Opdracht B - Can you handle the list?
let stuff = ['c', 5645, 9393.77, "hello", true, false, "Good morning", 88, -90, 777.777, 90, 665.33, "F"];
let strings = [];
let nums = [];
let bools = [];

for (let i = 0; i < stuff.length; i++) {
    if (typeof stuff[i] === "string") {
        strings.push(stuff[i]);
    } else if (typeof stuff[i] === "number") {
        nums.push(stuff[i]);
    } else if (typeof stuff[i] === "boolean") {
        bools.push(stuff[i]);
    }
}

console.log(`Strings: ${strings}\nNumbers: ${nums}\nBools: ${bools}`)


// Opdracht C - Boodschappenlijstje
let groceryList = [];
console.log('Your grocery list is still empty!');

while (true) {
    let action = readlineSync.keyInSelect(['Add', 'Remove', 'View'], "Pick an action:");
    if (action == 0) {
        GroceryListAdd();
    } else if (action == 1) {
        GroceryListRemove();
    } else if (action == 2) {
        ViewGroceryList();
    } else {
        console.log("Invalid input!");
    }
}

function ViewGroceryList() {
    console.log("Current items in the list:");
    for (let i = 0; i < groceryList.length; i++) {
        console.log(`${i}: ${groceryList[i]}`);
    }
}

function GroceryListAdd() {
    let item = readlineSync.question("Enter the item to add to the list: ");
    groceryList.push(item);
    console.log(`${item} has been added to the list.`);
}

function GroceryListRemove() {
    if (groceryList.length == 0) {
        console.log("The list is empty. Nothing to remove.");
        return;
    }

    ViewGroceryList();

    let index = readlineSync.questionInt("Enter the index of the item to remove: ");
    if (index >= 0 && index < groceryList.length) {
        const removedItem = groceryList.splice(index, 1);
        console.log(`${removedItem[0]} has been removed from the list.`);
    } else {
        console.log("Invalid index. Item removal failed.");
    }
}