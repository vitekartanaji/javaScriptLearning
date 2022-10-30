function Person(fullName, city, age, gender){
    this.fullName=fullName;
    this.city=city;
    this.age=age;
    this.gender=gender;
}

// to add new property in object we use prototype

Person.prototype.country="India";

let a= new Person("Virat Kohli","Delhi",35,"M");
let b = new Person("Rohit Sharma","Mumbai",32,"M");

console.log(a);
console.log(b);

// to access/ see the newly added prototype property 

console.log(a.country);
console.log(b.country);