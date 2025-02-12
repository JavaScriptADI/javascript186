/**
 * Generate array of 1000 random numbers
 * ask user for number (n)
 * change every occurence of n with random number
 * if changed number is divisible by n remove it from array
 */
const n = 27;
const nums = [];
let i = 0;

while (nums.length < 1000) {
    i++;
    const randomNumber = parseInt(Math.random() * 101);

    if (randomNumber % n !== 0) {
        nums.push(randomNumber);
    }
}

console.log(nums.length);
console.log(`Generating this list took ${i} iterations`);
console.log(`${n} is in nums ${nums.includes(n)}`);
