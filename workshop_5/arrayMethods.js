// console.log(parseInt(Math.random() * 100));

const nums = [];

// 0.28 -> 28

// 50 * 0.5 -> 25power
// 50 * 0.287453 -> 50

for (let gela = 0; gela < 1000; gela++) {
    nums.push(parseInt(Math.random() * 100));
}

console.log(nums.slice(0, 10));
console.log(nums.slice(nums.length - 10));

console.log(nums.indexOf(7));
console.log(nums.indexOf(700));
console.log(nums.includes(7));

nums.reverse();
console.log(nums.slice(0, 10));
console.log(nums.slice(nums.length - 10));

// nums.sort();
// console.log(nums);
