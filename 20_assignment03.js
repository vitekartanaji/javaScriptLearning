const array_numbers = [ 20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19 ];

console.log(`--------------1------------`)

const newArray  = array_numbers.map((element)=>{
    return element+10;
})
console.log(newArray);

console.log(`--------------2------------`)

const newArray2 = array_numbers.map((element)=>{
    return element*element;
})
console.log(newArray2);

console.log(`--------------3------------`)

const newArray3 = array_numbers.map((element,index)=>{
    return element+index;
})
console.log(newArray3);