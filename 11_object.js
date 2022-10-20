let person = {
    fullName:"Sachin Tendulkar",
    age:42,
    isMarried:true,
    address:{
        street:"AS Club",
        city:"Pune",
        tal:"Mumbai",
        dist:"Mumbai",
        state:"Maharashtra"
    },
    eat:function(){
        console.log("I am vegetarian.");
    }
}

// to access values from nested object

console.table(person.address.state);
console.log(person.address.city);
console.log(person.city);

// to add value in nested object

person.address.landMark="Temple";
console.table(person);

// to access method inside the function

person.eat();

// to access object

// console.log(objectSachin);
console.table(person);


// // to access the values from object

var a=person.fullName;
console.log(a);

console.log(person.fullName);

var b=person["age"];
console.log(b);

console.log(person["age"]);

// // to add new value in object

person.pinCode=411057;
console.table(person);

person.profession="Cricketer";
console.table(person);

// // to update the given value in object

person.fullName="Sachin Ramesh Tendulkar";
console.table(person);

// // to delete any value from object

delete person.age;
console.table(person);

var c=person.age;
console.log(c);      // if we try to access deleted value, we get "undefined" error 

// to find the total entries in the object

console.log(Object.entries(person));

// to find the total keys in the object

console.log(Object.keys(person));

// to find the total values in the object

console.log(Object.values(person));