const nums = [1, 2, 3, -1, -100, 100, 1000, -1000];

nums.sort((a, b) => {
    // 3 | -1
    return a - b;
    // if (a > b) {
    //     return 1;
    // } else if (a === b) {
    //     return 0;
    // }
    // return -1;
});
console.log("Sorted:", nums);
// filter - higher order function
console.log("Filtered:", nums.filter((value) => {
    // callback
    return value > 0;
}));

console.log("Reduced:", nums.reduce((acc, curr) => {
    return acc + curr;
}));

// const filteredNums = [];
// for (const num of nums) {
//     if (num > 0) {
//         filteredNums.push(num);
//     }
// }

// console.log(filteredNums);

function reduce(arr, callbackFn, initialValue) {
    let acc = initialValue;
    for (const num of arr) {
        acc = callbackFn(acc, num);
    }
    return acc;
}

// console.log(reduce(nums, (acc, curr) => acc + curr));