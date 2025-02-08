/**
 * ask use for number (n)
 * and print every number from 0 to 1000 that is divisible by n
 */
let num = Number(prompt("choose a num:")); 
for (let i = 0; i <= 1000; i++) {
    if (i % num === 0) {
        console.log(i); 
    }
}