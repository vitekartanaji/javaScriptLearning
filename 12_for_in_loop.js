const mohitPerson={
    fullName: "Sachin Tendulkar",
    age:42,
    isMarried:true
};

// for-in loop is used to traverse the object one by one

for (const key in mohitPerson) {
    if (Object.hasOwnProperty.call(mohitPerson, key)) {
        const element = mohitPerson[key];
        console.log(key,"-",element);
    }
}

// another way to traverse the the object

for (const key in mohitPerson) {
        const element = mohitPerson[key];
        console.log(element);
}


// to traverse the string using for in loop

let a="Tanaji";

for (const i in a) {
        const element = a[i];
        console.log(element);   
    }