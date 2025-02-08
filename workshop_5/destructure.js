const nums = [1, 2, 3];
let nums2 = [7, 8, 9];

// let x = nums[0];
// let y = nums[1];
// let z = nums[2];
let [x, y, z] = nums;

// nums2 = nums2.concat(nums);
// nums2 = [...nums, ...nums2];
nums2 = [...nums2, ...nums];


console.log(nums2);
console.log(x, y, z);