let person = {
    fullName:"Virat  Kohli",
    age:32,
    city:"Delhi"
}

console.log(person);    //this is shallow copy
console.log(`--------------------------------------------`)

let student={...person};  //this is spread operator used to create deep copy 

student.age=30;
console.log(student.age,person.age);   // this is deep copy- because the values of properties of 
                                       // the both objects are changed

console.log(`--------------------------------------------------------`)
// spread operator is failed at the time of nested object

let person1 = {
    fullName:"Rohit Sharma",
    age:30,
    address:{
        city:"Mumbai",
        street:"Shivaji chowk",
        pinCode:413314
    }
}

console.table(person1);

// now we are creating the another object using person1 object

// let person2 = {...person1};  <-- spread operator is failed for nested object

let person2 = JSON.parse(JSON.stringify(person1));    // <-- We used the JSON operator 
console.table(person2);

// now we try to change the values of properties of the objects

person2.address.city="Sangola";
console.table(person2);        // the values of both the object are changed to "Sangola"
console.table(person1);        // thats why spread operator is failed at nested object


                               // to overcome this we use " JSON.parse(JSON.stringify()) "

//