console.log(0/0);

var result=0/0;
console.log(typeof result);
console.log(result);


console.log(`------Converting a invalid string to number-------`);
var name1="Hello";
var myname=+name1;
console.log(name1,typeof name1, myname, typeof myname);

var age1=23;
var myage=+age1;
console.log(age1,typeof age1, myage, typeof myage);

console.log(`--------------Addition,Concatenation,Conversion-----------------`)

num1=100;
num2=200;
console.log("Addition: ",num1+num2);

num3="100";
num4="200";
console.log("Concatenation: ",num3+num4);

num5=+"100";
num6=+"200";
console.log("Conversion: ",num5+num6);