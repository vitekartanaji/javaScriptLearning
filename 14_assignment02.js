const ary_num = [20,31,40,25,23,11,29,9,60,2,11];
console.log(`-------------------1--------------------`)
let a = ary_num.length;
console.log(`Length of array; ${a}`);

console.log(`-------------------2--------------------`)

let b = ary_num.slice(0,1);
let c = ary_num.slice(10);
console.log(`First number: ${b} & Last number: ${c}`);

console.log(`-------------------3--------------------`)

for (let index = ary_num.length-3; index >= ary_num.length-3; index--) {
    const element = ary_num[index];
    console.log(`Third last element: ${element}`);
}

console.log(`-------------------4--------------------`)

let count=0;
for (let index = 0; index < ary_num.length; index++) {
    const element = ary_num[index];
    if (element%2==0) {
        console.log(element);
        count=count++;
    }
    
}

console.log(`-------------------5--------------------`)

let count1=0;
for (let index = 0; index < ary_num.length; index++) {
    const element = ary_num[index];
    if (element%2!=0) {
        console.log(element);
        count1=count1++;
    }
    
}

console.log(`-------------------6--------------------`)

for (let index = 0; index < ary_num.length; index++) {
    const element = ary_num[index];
    if (index%2==0) {
        console.log(element);
        count=count++;
    }
    
}

console.log(`-------------------7--------------------`)

for (let index = 0; index < ary_num.length; index++) {
    const element = ary_num[index];
    if (index%2!=0) {
        console.log(element);
        count1=count1++;
    }
    
}

console.log(`-------------------8--------------------`)

let sum=0;
for (const i in ary_num) {
        const element = ary_num[i];
        sum+=ary_num[i];
    }
console.log(`Sum of the array elements: ${sum}`);
console.log(`-------------------9--------------------`)

for (let index = 0; index < ary_num.length; index++) {
    const element = ary_num[index];
    if (element%5==0) {
        console.log(element);
        count++;
    }   
}

console.log(`-------------------10--------------------`)

let ac = ary_num.includes(115);
console.log(`Is 115 available in array: ${ac}`);

console.log(`-------------------11--------------------`)

let bc = ary_num.includes(23);
console.log(`Is 23 available in array: ${bc}`);