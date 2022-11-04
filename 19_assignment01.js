console.log(`------------------1------------------`);
let a = ()=>{
    console.log("Good Evening, Today is Sunday.");
};
a();

console.log(`------------------2------------------`);

let b = (arg1,arg2,arg3=5)=>{
    c=arg1*arg2*arg3;
    console.log(`Multiplication is: ${c}`);
};
b(5,5,2);
b(10,4);
console.log(`------------------3------------------`);

let d = (arg1,arg2,arg3,arg4,arg5)=>{
    e = arg1+arg2+arg3+arg4+arg5;
    console.log(`Addition is: ${e}`);
};

d(100,100,200,349,756);
d("I am ","learning ","ES6 ","features ","in depth .");