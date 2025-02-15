const student = {
    firstName: "Nick",
    lastName: "Doe",
    age: 27
};

console.log(student.firstName);
console.log(student["firstName"]);

student.pet = "Dog";

console.log(student.pet);
student.pet = "Cat";
console.log(student.pet);

student.friends = [
    {
        firstName: "Marry",
        lastName: "Doe"
    },
    {
        firstName: "Jimmy",
        lastName: "Carter"
    },
    {
        firstName: "Nick",
        lastName: "Gurman"
    }
];


console.log(student.friends[0].firstName);
console.log(student);

delete student.pet;
console.log(student);

