const array_numbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];

console.log(`-------------------1--------------------`);

const newArray1 = array_numbers.filter((element)=>{
    return element>=50;
});
console.log(newArray1);

console.log(`-------------------2--------------------`);

const newArray2 = array_numbers.filter((element)=>{
    return element%2==0;
});
console.log(newArray2);

console.log(`-------------------3--------------------`);

const newArray3 = array_numbers.filter((element)=>{
    return element%2!==0;
});
console.log(newArray3);

console.log(`-------------------4--------------------`);

const newArray4 = array_numbers.filter((element)=>{
    return element%5==0;
});
console.log(newArray4);

console.log(`-------------------5--------------------`);

const newArray5 = array_numbers.filter((element)=>{
    return element<50 && element>20;
});
console.log(newArray5);