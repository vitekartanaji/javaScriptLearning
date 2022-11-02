let setNumber = new Set();
console.log(typeof(setNumber))

//------------------------------------------------------------------------------------------
console.log(`----------------------------`)

setNumber.add(1);                       //How to add element into the set
setNumber.add(2);
setNumber.add(3);
setNumber.add(4);
setNumber.add(5);

console.log(setNumber);

//-------------------------------------------------------------------------------------------
console.log(`----------------------------`)

setNumber.add(2);
console.log(setNumber);    // not accepted duplicate elements

//-------------------------------------------------------------------------------------------
console.log(`----------------------------`)

console.log(setNumber.size);   // to check the size/length of the set we use 'size' property

//-------------------------------------------------------------------------------------------
console.log(`----------------------------`)

setNumber.delete(3);
console.log(setNumber.size);   // to delete element from set 

//-------------------------------------------------------------------------------------------
console.log(`----------------------------`)

console.log(setNumber.has(1));    // to check the element is available/present in the set
console.log(setNumber.has(10));

//-------------------------------------------------------------------------------------------
console.log(`----------------------------`)

// console.log(setNumber.clear());     it will clear or delete all the elements from set

//-------------------------------------------------------------------------------------------
console.log(`----------------------------`)

for (const element of setNumber) {
    console.log(element);             // to traverse the set we use 'for-of' loop
}

//--------------------------------------------------------------------------------------------
console.log(`----------------------------`)

// to remove duplicate elements from the array using spread & set operator.

let arrayNum1 = [2,3,4,5,6,3,5];
let setNum1 = [...new Set(arrayNum1)];
console.log(setNum1);

//---------------------------------------------------------------------------------------------
console.log(`----------------------------`)
