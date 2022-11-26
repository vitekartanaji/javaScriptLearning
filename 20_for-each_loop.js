let arrayNumbers = [10,20,30,40,50,60];

//--------------------------------------------------------------------------------------------
// 'for-each method' using callback (the function is used as parameter for 'for-each method')
// in for-each method currentValue(compulsory), index(optional), array(optional)

arrayNumbers.forEach(function(currentValue, index, array){
    console.log(currentValue, index, array)
});
//--------------------------------------------------------------------------------------------

// 'for-each loop' using Arrow function (the Arrow function is used as parameter for 'for-each')
// in for-each method currentValue(compulsory), index(optional), array(optional)

arrayNumbers.forEach((currentValue)=>{
    console.log(currentValue)
});


// another way--because we can write arrow function in one line when there is only one statement is present.

arrayNumbers.forEach(currentValue=>console.log(currentValue));
//--------------------------------------------------------------------------------------------

console.log(`-----------------Traversing Set using forEach loop-----------------`)
const setOfNumbers = new Set(arrayNumbers);

setOfNumbers.forEach((value)=>{
    console.log(value);
})

//--------------------------------------------------------------------------------------------

console.log(`-----------------Traversing Map using forEach loop-----------------`)

let a = new Map();
a.set(11,"Tanaji");
a.set(12,"Kiran");
a.set(13,"Sharan");
a.set(14,"Ajay");
a.set(15,"Omkar");

// console.log(a);

a.forEach((key, value)=>{
    console.log(value, key);
})

//--------------------------------------------------------------------------------------------

console.log(`-----------------Traversing Array of Object using forEach loop-----------------`)

class Person{

    constructor(fullName, city, age, gender) {
        this.fullName=fullName;
        this.city=city;
        this.age=age;
        this.gender=gender
    }
    details(){
        console.log(`Person Details: ${this.fullName} ${this.city} ${this.age} ${this.gender}`);
    }
};

let viratPerson = new Person("Virat Kohli", "Delhi", 32, "M");
let rohitPerson = new Person("Rohit Sharma", "Mumbai", 33, "M");
let rishabhPerson = new Person("Rishabh Pant", "Delhi", 28, "M");

const ary = [viratPerson,rohitPerson,rishabhPerson];

ary.forEach((Person)=>{
    console.log(Person.fullName);
});