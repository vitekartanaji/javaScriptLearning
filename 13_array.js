let array1=[1,2,3,4,5];

let array2={...array1};   // spread operator works 

console.table(array1);    // no need to use JSON operator
console.table(array2);

array1[0]=10;

console.table(array1);
console.table(array2);

array1.push(100);    // new value added at the last 
console.log(array1);
array1.pop();    // last in first out (LIFO)
console.log(array1);