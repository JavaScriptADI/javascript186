/**
 * Generate array of 1000 random numbers (0 - 100)
 * ask user for number (n)
 * 1. find position (index) of n in array
 * 2. find all indicies numbers that are equal to n
 */

const num = Number(prompt())
let arr = [];
for (let i = 0; i < 1000; i++) {
    arr.push(Math.floor(Math.random() * 100) + 1);
}
let firstIndex = -1;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
        firstIndex = i;
        break;
    }
}

let allIndices = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
        allIndices.push(i);
    }

}

console.log(`we found ${allIndices.length}`);
for (let i = 0; i < allIndices.length; i++) {
    console.log(allIndices[i]);
}