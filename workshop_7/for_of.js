const arr = [1, 2, 3, 4];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

console.log("\nfor of");
for (const num of arr) {
    console.log(num);
}

console.log("\nfor in");
for (const i in arr) {
    console.log(i, arr[i]);
}

