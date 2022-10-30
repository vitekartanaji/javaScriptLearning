// to define constructor function 

function Person(fullName, city, age, gender){
    this.fullName=fullName;
    this.city=city;
    this.age=age;
    this.gender=gender;
}

let a= new Person("Virat Kohli","Delhi",35,"M");
console.log(a);

let b = new Person("Rohit Sharma","Mumbai",32,"M");
console.log(b);
