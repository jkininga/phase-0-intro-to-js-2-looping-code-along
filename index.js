// Code your solutions in this file


// let array = ['a', 'b', 'c', 'd '];

// for(let i = 0; i < array.length; i++){
//     console.log(array[i])
// }

// function writeCards(arrayNames, eventName){
// for(let i = 0; i < arrayNames.length; i++){
// `Thank you ${arrayNames[i]} for the wonderful
//           ${eventName} gift`

//           let newArray = [];

//     newArray[i] = `Thank you ${arrayNames[i]} for the wonderful ${eventName} gift`        
// }
// return newArray;
// }

// console.log(writeCards(['carol ', 'reagan', 'james'], 'birthday'))

let arrayNames = [];
function writeCards(arrayNames, eventName) {
    let newArray = []; // Declare newArray outside the loop
    for (let i = 0; i < arrayNames.length; i++) {
        newArray[i] = `Thank you, ${arrayNames[i]}, for the wonderful ${eventName} gift!`;
    }
    return newArray; // Return the array after the loop completes
}

console.log(writeCards(['carol ', 'reagan', 'james'], 'surprise'));


// let i = 10;
function countDown(n){
    while(n >= 0){
        console.log(n);
        n--;

    }
}
console.log(countDown(10))
