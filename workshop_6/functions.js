// function definition
function greet(user) {
    // code block
    console.log(`გამარჯობა ${user}`);
}

function lights_on(room, percentage) {
    // parameters are variables that are created during a function call
    // after function ends it's work all the variable including parameters are destroyed
    // formattedMessage is called local variable that is inaccessble from outer scope
    let formatedMessage = `Turning on light at ${percentage}% in ${room}`;
    console.log(`Connecting to ${room}`);
    console.log(`Successfully connected to ${room}`);
    console.log(formatedMessage);
}

function f() {
    // room is a variable from outer scope that we can access
    console.log(`You have ${rooms.length} rooms in your application!`);
}

// function call / invokation
greet("Henry");
greet("Lizi");
greet("Beqa");

const rooms = [
    "Living Room",
    "Dining Room"
];

// positional arguments
lights_on(rooms[0], 100);
lights_on(rooms[1], 20);
f();
