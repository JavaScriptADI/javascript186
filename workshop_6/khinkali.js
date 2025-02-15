function makeKhinkali() {
    console.log('-'.repeat(10));
    console.log("ვამზადებ ხორცს");
    console.log("ვამზადებ ცომს");
    console.log("დავდე ხორცი ცომზე");
    console.log("შევკარი ცომი");
    return new Date();
}


function orderKhinkali(count = 50) {
    // count is now a default value
    // if you don't pass count value it will remain 50
    // if you pass the value it will change
    const plate = [];
    for (let i = 0; i < count; i++) {
        plate.push(makeKhinkali());
    }
    return plate;
}

function combinePlates(plate1, plate2) {
    plate1.splice(plate1.length, 0, ...plate2);
}

const plate = orderKhinkali(10);


console.log(plate);

for (let i = 0; i < 5; i++){
    plate.pop();
}
console.log(plate);

// const newPlate = orderKhinkali(10);
// for (let i = 0; i < 10; i++) {
//     plate.push(newPlate.pop());
// }
// console.log(`New plate ${newPlate.length}`);

combinePlates(plate, orderKhinkali(10));
combinePlates(plate, orderKhinkali());
plate.splice()

console.log(`plate ${plate.length}`);

console.log(`First portion of khinkali: ${plate[0].getTime()}`);
console.log(`Last protion of khinkali: ${plate[plate.length - 1].getTime()}`);
console.log((new Date()).getTime());

console.log([1, 2, 3, 4, 5]);
console.log(...[1, 2, 3, 4, 5]);
console.log(1, 2, 3, 4, 5);

for (let i = 0; i < plate.length; i++) {
    console.log(plate[i].getTime());
}

// check if khinkali is hot (if 10ms has passed it's cold)
for (let i = 0; i < plate.length; i++) {
    const dt = new Date() - plate[i];
    // console.log(`${dt}ms has passed after this khinkali has been created`);
    if (dt < 10) {
        console.log(`${dt}ms passed; This khinkali is still hot!`);
    } else {
        console.log(`${dt}ms passed; This khinkali is still cold!`);
    }
}



console.log(`There are ${plate.length} khinkalis on plate`)