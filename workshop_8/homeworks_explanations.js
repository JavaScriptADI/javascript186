function greet(name) {
    return `Hello ${name}`;
}

function revrese(str = "test") {
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}

console.log(greet("Josh"));
console.log(revrese("Josh"));
console.log(revrese());

function bar() {
    x += 1;
}

function foo() {
    bar();
    x *= 2;
}

let x = 7;
foo(x);
console.log(x); // x should change!



