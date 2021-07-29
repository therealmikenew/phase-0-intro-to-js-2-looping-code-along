const names = ["Lisa", "Kaitlin", "Maria"];

let newArray = [];

const event = "surprise";

function writeCards (names, event) {
    for (let i = 0; i < names.length; i++) {
        let greeting = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
        newArray.push(greeting);
    }

    return newArray;

}

let i = 10;

function countDown (i) {
    while (i >=0) {
        console.log(i);
        i--;
    }
}











/*
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);

}


const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }

    return gifts;
}

wrapGifts(gifts);

*/