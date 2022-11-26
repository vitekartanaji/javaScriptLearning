const array_numbers = [ 1, -7, 40, 502, -77, 91, 0, 108, 89, -601 ];

console.log(`------------------1------------------`);

array_numbers.forEach((currentValue,index)=>console.log(currentValue,index));

console.log(`------------------2------------------`);

array_numbers.forEach((currentValue)=>{
    if (currentValue>=0) {
        console.log(currentValue);
    }
});

console.log(`------------------3------------------`);

array_numbers.forEach((currentValue)=>{
    if (currentValue<0) {
        console.log(currentValue);
    }
});

console.log(`------------------4------------------`);

array_numbers.forEach((currentValue)=>{
    if (currentValue%2==0) {
        console.log(currentValue);
    }
});

console.log(`------------------5------------------`);
// [ 1, -7, 40, 502, -77, 91, 0, 108, 89, -601 ];

var total=0;

array_numbers.forEach((currentValue,index)=>{
    total += currentValue++
});

console.log(total);

console.log(`------------------6------------------`);

array_numbers.forEach((currentValue,index)=>{
    if (index%2==0) {
        console.log(currentValue);
    }
});

console.log(`------------------7------------------`);

array_numbers.forEach((currentValue,index)=>{
    if (index%2!==0) {
        if (currentValue<0) {
            console.log(currentValue);
        }
    }
});

