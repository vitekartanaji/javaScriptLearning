
let globalVariable = 300;

function outer(){
    let outerFunctionVariable = 100;

    let innerFunction = function(){
        let innerFunctionVariable = 200;
        console.log(innerFunctionVariable,outerFunctionVariable,globalVariable);
    }
    return innerFunction;
};

let returnValue = outer();
returnValue();