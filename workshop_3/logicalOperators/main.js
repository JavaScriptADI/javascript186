let firstName = "George";
let age = 71;
// AND operator &&
// let isInSixties = age >= 60 && age < 70;
let isInSixties = 60 <= age && age < 70;

// OR operator ||
// let notIsInSixties = age < 60 || 70 <= age;
// NOT operator !
let notIsInSixties = !isInSixties;
console.log(`${firstName} is in sixties: ${isInSixties}`);