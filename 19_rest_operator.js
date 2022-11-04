"use strict"

// when we pass spread operator as function argument then it is called as rest operator

function display(name,...myName){      // always pass first argument as normal & then pass last argument as 
    console.log(name,myName);          // rest operator(spread operator)
    console.log(typeof(myName));       
}

display("Virat","Delhi",32,true);
display(10,20,30)