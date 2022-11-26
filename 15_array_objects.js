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

for (let index = 0; index < ary.length; index++) {
    const element = ary[index];
    if (element.age>30) {
        console.log(`${element.fullName}, ${element.city}, ${element.age}, ${element.gender}`);        
    }
};
