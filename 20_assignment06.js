const array_numbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];

console.log(`--------------1-------------`);

let sum = array_numbers.reduce((value, runningTotal)=>{
    return value+runningTotal;
})
console.log(sum);

console.log(`--------------2-------------`);

const newArray = array_numbers.filter((element)=>{
    return element%2==0;
})

let sum1 = newArray.reduce((value, runningTotal)=>{
    return value + runningTotal;
})
console.log(sum1);