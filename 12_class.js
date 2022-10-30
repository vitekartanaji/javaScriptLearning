// how to define the class with constructor

class Person{

    constructor(fullName, city, age, gender) {
        this.fullName=fullName;
        this.city=city;
        this.age=age;
        this.gender=gender
    }

};

// how to call the class

let viratPerson = new Person("Virat Kohli","Delhi",38,"M");
let rohitPerson = new Person("Rohit Sharma","Mumbai",35,"M");

console.log(viratPerson);
console.log(rohitPerson);

// to check the instance of the person class

console.log(viratPerson instanceof Person);
console.log(rohitPerson instanceof Person);

// method into class

class Person1{

    constructor(fullName, city, age, gender) {
        this.fullName=fullName;
        this.city=city;
        this.age=age;
        this.gender=gender
    }
    details1(){
        console.log(`
        Fullname: ${this.fullName} 
        City: ${this.city} 
        Age: ${this.age} 
        Gender: ${this.gender}`)
    }

};

let viratPerson1 = new Person1("Virat Kohli","Delhi",38,"M");
let rohitPerson1 = new Person1("Rohit Sharma","Mumbai",35,"M");

console.log(viratPerson1);
console.log(rohitPerson1);

viratPerson1.details1();
rohitPerson1.details1();
