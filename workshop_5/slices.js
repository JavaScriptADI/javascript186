const nums = [];


// Start; Stop; Step
for (let i = 0; i < 1000; i++) {
    // console.log(i); // i
    nums.push(i);
}

// nums.unshift(12);

console.log(nums.length);
console.log(nums);


for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}
console.log('Last 10 numbers before deletion:', nums.slice(nums.length - 10));

for (let i = 0; i < 10; i++) {
    nums.pop();
}
console.log('Last 10 numbers after deletion:', nums.slice(nums.length - 10));

console.log('first 10 numbers before deletion:', nums.slice(0, 10));

for (let i = 0; i < 10; i++) {
    nums.shift();
}
console.log('first 10 numbers after deletion:', nums.slice(0, 10));

// Take all even numbers to second power
for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0) {
        // nums[i] = Math.pow(nums[i], 2);
        nums[i] **= 2;
    }
}

console.log(nums.slice(0, 50));

