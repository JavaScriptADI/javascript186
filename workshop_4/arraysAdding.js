let names = [];

for (let i = 0; i < 5; i++) {
    names.push(prompt("Enter name"));
}

console.log(names);

let total = 0;
for (let i = 0; i < names.length; i++) {
    let name = names[i];
    total += name.length;
}
console.log(names[0].length);
console.log(total / names.length);