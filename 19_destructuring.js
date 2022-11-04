"use strict"
//object destructuring

let person = {
    name:"Virat",
    city:"Delhi",
    age:32,
    pin:223455,
    state:"MH",
    isMarried:true
};

// let name = person.name;
// let city = person.city;          <--- instead of writing this type, we can write it in single line using 
// let age = person.age;            object destructuring.
// let pin = person.pin;         Rule--> Use the same name for variables as the property names in objects.
// let state = person.state;
// let isMarried = person.isMarried;

let {name, city, age, pin, state, isMarried} = person;
console.log(name, city, age, pin, state, isMarried);

// let {name, city="Mumbai", age, No=9834592981, state, isMarried} = person;
// console.log(name, city, age, state, isMarried,No);      // also we pass default values while destructuring

// array destructuring

let arrayNames = ["one","two","three","four","five","six"];

// let ele0 = arrayNames[0];
// let ele1 = arrayNames[1];
// let ele2 = arrayNames[2];
// let ele3 = arrayNames[3];
// let ele4 = arrayNames[4];
// let ele5 = arrayNames[5];

let [ele0, ele1, ele2, ele3, ele4, ele5, ele6="hello"] = arrayNames;
console.log(ele0, ele1, ele2, ele3, ele4, ele5, ele6);
