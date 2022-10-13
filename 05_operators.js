console.log(`==========Arithmetic Operations==========`)
var num1=200;
var num2=100;
var result=num1 + num2;       
console.log(`Addition: ${result}`);

var num1=200;
var num2=100;
var result=num1 - num2;       
console.log(`Subtraction : ${result}`);

var num1=20;
var num2=10;
var result=num1 * num2;       
console.log(`Multiplication: ${result}`);

var num1=100;
var num2=10;
var result=num1 / num2;       
console.log(`Division: ${result}`);

var num1=10;
var num2=3;
var result=num1 ** num2;       
console.log(`Exponential: ${result}`);

var num1=100;
var num2=3;
var result=num1 % num2;       
console.log(`Modulus: ${result}`);

var newv=++num1;
console.log(`Increment: ${newv}`);

var newv=--num1;
console.log(`Decrement: ${newv}`);

console.log(`==========Assignment Operator==============`)

var num3=20;
var num4=10;
num3+=num4;
console.log(`Compound Addition: ${num3}`);

num3-=num4;
console.log(`Compound Subtraction: ${num3}`);

num3*=num4;
console.log(`Compound multiplication: ${num3}`);

console.log(`==========Comparison Operator==============`)

var num5=20;
var num6=20;
var num7=10;

console.log(`num5==num6: ${num5==num6}`);
console.log(`num5<num6: ${num5<num6}`);
console.log(`num5>num7: ${num5>num7}`);
console.log(`num5!=num7: ${num5!=num7}`);
console.log(`num5=>num6: ${num5>=num6}`);
console.log(`num5<=num6: ${num5<=num6}`);

console.log(`*************Equal or Strict equal(== or ===) operator**********`);

numm1=50;
numm2="50";
numm3=50;
numm4=51;

console.log(numm1==numm2);       //true
console.log(numm1===numm2);      //false
console.log(numm1==numm3);       //true
console.log(numm1===numm3);      //true
console.log(numm1==numm4);       //false
console.log(numm1===numm4);      //false

console.log(numm1!=numm2);       //false     strict not equal  to(!==)
console.log(numm1!==numm2);      //true

console.log(`==========Ternary Operator=============`)

numb1=10;
var result=numb1>0 ? "Truee":"False";
console.log(result);
