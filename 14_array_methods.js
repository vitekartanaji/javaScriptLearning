let array1=[1,2,3,4,5];

// to traverse the array using "for" loop (mostly used )

for (let index = 0; index < array1.length; index++) {
    const element = array1[index];
    console.log(element)
};

console.log(`-------------------`)

// to traverse the array using "for - in" loop

for (const key in array1) {
        const element = array1[key];
        console.log(element);
}

console.log(`-------------------`)
// to traverse the array in reverse order

let a=array1.length-1;
for (let index = a; index >=0 ; index--) {
    const element = array1[index];
    console.log(element)
};

console.log(`-------------------`)

// WAP  to find even positioned values

let b=array1.length

var count_even=0;
for (let index = 0; index <b; index++) {
    const element = array1[index]
    if(index%2==0) {
        console.log(element);
        count_even=count_even+1;
    }
}

console.log(`-------------------`)

// to insert the element at the start of the array we use "unshift" method

let arr1=[1,2,3,4,5];
console.log(arr1);

arr1.unshift(6);
console.log(arr1);

console.log(`-------------------`)

// to remove first/ starting  element from array we use "shift" method

console.log(arr1);

arr1.shift();
console.log(arr1);    // removed the element "6"

console.log(`-------------------`)

// to display particular elements from array we use "slice" method

console.log(arr1);

let c = arr1.slice(1,3);
console.log(c);

let d = arr1.slice(3);
console.log(d);

console.log(`---------remove----------`)

// to add/remove/display any positioned element or at any position we use "splice" method

let arr2=[11,12,13,14,15,16,17,18,19,20];
console.log(arr2);

let e = arr2.splice(5);    // removed elements from index number 3
console.log(arr2); 

//--------------------------------------------------------------
// to remove particular range of elements

let arr3=[11,12,13,14,15,16,17,18,19,20];
console.log(arr3);

let f = arr3.splice(3,5);
console.log(f);
console.log(arr3);

//---------------------------------------------------------------
// to add/insert new element at any index

let arr4=[11,12,13,14,15,16,17,18,19,20];
console.log(arr4);

let g = arr4.splice(4,0,55);   // new element added at the index 4
console.log(arr4);

//----------------------------------------------------------------
// to replace the any index value

let arr5=[11,12,13,14,15,16,17,18,19,20];
console.log(arr5);

let h = arr5.splice(1,1,5555);   // replaced the value at the index number 1
console.log(arr5);

//-----------------------------------------------------------------

let arr6=[11,12,13,14,15,16,17,18,19,20];
console.log(arr6);

let i = arr5.splice(1,3,5555);   // replaced the value from the index number 3 to next 3 indexes.
console.log(arr5);

//-----------------------------------------------------------------

let arr7=[11,12,13,14,15,16,17,18,19,20];
console.log(arr6);

let j = arr6.splice(1,2,5555,6666);   // replaced two elements with two new values 
console.log(arr6);                    // added new elements 
