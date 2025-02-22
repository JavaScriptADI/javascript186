const products = [
    {
        title: "Product 1",
        price: 100
    },
    {
        title: "Product 2",
        price: 150
    },
    {
        title: "good Product 3",
        price: 10
    },
    {
        title: "good Product 4",
        price: 19.99
    },
];

// const nums = [1, 2, 3, 4, 5];

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }
// without reduce sum all prices
let totalPrice = 0;
// for (let i = 0; i < products.length; i++) {
//     totalPrice += products[i].price;
// }

for (const product of products) {
    totalPrice += product.price;
}

console.log(totalPrice);

console.log("Reduce:", products.reduce((total, product) => { return total + product.price }, 0));
console.log("Filter:")
for (const prodcut of products.filter((product) => { return product.price < 100 })) {
    console.log(prodcut);
}


const prices = products.map((product) => { return product.price });
const titles = products.map((product) => { return product.title });

console.log("Map prices:", prices);
console.log("Map title:", titles);

products.forEach((product) => {
    console.log(`${product.title} costs ${product.price}`);
});

// Method chaining
console.log("Chainig");
products.filter((product) => { return product.price >= 100 })
    .forEach((product) => { console.log(`${product.title} costs ${product.price}`) })


console.log("Even more chaining");
console.log(
    products.filter((product) => { return product.title.startsWith("good") })
        .map((product) => { return product.price })
        .reduce((total, price) => { return total + price })
)
