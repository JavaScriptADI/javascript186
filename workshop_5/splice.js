const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];


// nums.splice(0, 3);

console.log(nums);

nums.splice(Math.floor(nums.length / 2), 3);
console.log(nums);
nums.splice(Math.floor(nums.length / 2), 1);
console.log(nums);

