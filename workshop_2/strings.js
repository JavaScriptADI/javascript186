// you can either use double (") or single quotes (') to represent a string
// hard coded
let firstName = "George";
let lastName = 'Washington';
// dynamic - atuomatically calculated
// let fullName = firstName + " " + lastName;
// Template string (`) - backtick
let fullName = `${firstName} ${lastName}                 `;

fullName = fullName.trim();
// console.log(`"${fullName.trim()}"`);
console.log(`"${fullName}"`) // "${fullName}"
// console.log('Hello ' + fullName);
// Template string
console.log(`Hello ${fullName}`);

console.log(fullName.toLowerCase());
console.log(fullName.toUpperCase());
console.log("Startsiwth 'Geo':", fullName.startsWith("Geo"));
console.log("Startsiwth 'George':", fullName.startsWith("George"));
console.log("Startsiwth 'nick':", fullName.startsWith("nick"));

// T is not t
console.log("Endswith 'Ton':", fullName.endsWith("Ton"));
console.log("Endswith 'ton':", fullName.endsWith("ton"));
console.log("Endswith 'Washington':", fullName.endsWith("Washington"));
// case sensitivity
// console.log(FIRSTNAME);

console.log("Incldues 'ge Wa':", fullName.includes("ge Wa"));
