const someObject = {
    a: "Value a",
    b: "Value b",
    c: "Value c"
}

console.log("\nAll Keys");
// console.log(Object.keys(someObject))
for (const key of Object.keys(someObject)) {
    console.log(key);
}

console.log("\nAll Values");
console.log(Object.values(someObject))

for (const value of Object.values(someObject)) {
    console.log(value);
}


console.log("\nAll Entries [key, value]");
console.log(Object.entries(someObject));
for (const [key, value] of Object.entries(someObject)) {
    console.log(key, ":", value);
}