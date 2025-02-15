const arr = [1, 2, 3, 4, 5];

const arr2 = [7, 8, 2, 1];
// syntactic sugar
arr.splice(0, 0, ...arr2);
// arr.splice(0, 0, 7, 8, 2, 1);

// for (let i = arr2.length - 1; i >= 0; i--) {
//     arr.unshift(arr2[i]);
// }


console.log(arr);

console.log(5 + "7");