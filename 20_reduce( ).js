const arrayOfNumbers = [2,3,5,4,6,1];

let sum = arrayOfNumbers.reduce((value, runningTotal)=>{
    return value+runningTotal;
})
console.log(sum);

// Another method

let sum2 = arrayOfNumbers.reduce((value, runningTotal)=>{
    return value+runningTotal;
},100);
console.log(sum2);

//-----------------------------------------------------------------------
console.log(`--------------Average------------`)
const array_numbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];

let average = null;
let add = array_numbers.reduce((runningTotal, value, index)=>{
    runningTotal = runningTotal + value;
    if (index==array_numbers.length-1) {
        average = runningTotal / array_numbers.length;
    }
    return runningTotal;
})
console.log(`Sum: ${add}, Total Elements: ${array_numbers.length}, Average:${average}`);
