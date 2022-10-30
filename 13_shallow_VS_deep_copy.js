// this is shallow copy- 

let myName="Tanaji";
let yourName=myName;

console.log(myName);
console.log(yourName);

// this is also shallow copy- because the properties of objects is changes when we can 
// change any one of the objects.

let person = {
    fullName:"Tanaji Vitekar",
    age:23,
    city:"Sangola"
};

console.log(person);

let newPerson=person;
console.log(newPerson);

newPerson.age=30;
console.log(person);
console.log(newPerson);