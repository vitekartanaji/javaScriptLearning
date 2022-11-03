// Functions are the First Class Citizens in Javascript--because of three reasons
// 1. Function can be stored in a variable ---> Function Expression
// 2. Function can be passed as an argument to another function ---> Callback to functions
// 3. A function can return another function

console.log(`-------------------------------`)
//1.

function show(){
    console.log("Hello bro");
}

let result = show;
result();

console.log(`-------------------------------`)
//2.

function one(arg1){
    console.log("Hey,you");
    arg1();
}

function two(){
    console.log("What????");
}

one(two);

console.log(`-------------------------------`)
//3.

// function message(){
//     console.log("Outer function");
//     function innerFunction(){
//         console.log("Inner function");
//     }
//     return innerFunction;
// }

// let returnFunction = message();
// returnFunction();

function message(){                                   // another way to function can return another function
    console.log("Outer function");
    return function(){
        console.log("Inner function");
    }
}

message()();