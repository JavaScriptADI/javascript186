let age = 14;

if (18 <= age) {
    // code block
    console.log("you are an adult!");
} else {
    console.log("you are a minor!");
}


if (age <= 13) {
    console.log("you are a minor");
} else if (age <= 19) {
    console.log("you are teenager");
} else if (age <= 27) {
    console.log("you are young adult");
}  else {
    console.log("you are adult");
}