console.log(`----------var---------`);
// in var we can re-declare the variable as well as update the variable.

var count=9;
var count=10;
count=15;
console.log(count);


console.log(`----------let---------`);
// In let we can only update the variable, we can't re-declare the variable.

let var1=10;
var1=12;
console.log(var1);


console.log(`----------const---------`);
// In const we can't update or re-declare the variable.

const var2=10;
const var3=10;
console.log(var2);