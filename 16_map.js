let map = new Map();
map.set(11,"Rohit");
map.set(22,"Rahul");
map.set(33,"Virat");
map.set(44,"Surya");
console.log(map);
//------------------------------------------------------------------------------------------
console.log(`----------------------`)
// after adding duplicate 'key' it will overridden the new element to the previous

map.set(22,"Hardik");
console.log(map);

//------------------------------------------------------------------------------------------
console.log(`----------------------`)
// to get the value/ retrieving the value from map

let value = map.get(44);
console.log(value);

//-------------------------------------------------------------------------------------------
console.log(`----------------------`)
// to get value of undefined key we get error-undefined

console.log(map.get(99));

//-------------------------------------------------------------------------------------------
console.log(`----------------------`)
// to delete record/ key-value pair from map

console.log(map.delete(33));
console.log(map);

//-------------------------------------------------------------------------------------------
console.log(`----------------------`)
// after adding duplicate 'value' (not a key) - it will be successfully added in the map

console.log(map.set(66,"Rohit"));
console.log(map);

//-------------------------------------------------------------------------------------------
console.log(`----------------------`)
// to check the key is available or not in map

console.log(map.has(11));

//-------------------------------------------------------------------------------------------
console.log(`----------------------`)
// to find the size of the map

console.log(map.size);

//-------------------------------------------------------------------------------------------
console.log(`----------------------`)
// to traverse the map using for-of loop

let allKeys = map.keys();
console.log(allKeys);

for (const key of allKeys) {
    console.log(map.get(key));
}

//-------------------------------------------------------------------------------------------
console.log(`----------------------`)
// 


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

let mapPerson = new Map();
mapPerson.set(11,viratPerson);
mapPerson.set(22,rohitPerson);
mapPerson.set(33,rishabhPerson);

let mapkeys = mapPerson.keys();

for (const key of mapkeys) {
    let personObject = mapPerson.get(key);
    personObject.details();
}


//-------------------------------------------------------------------------------------------
console.log(`----------------------`)