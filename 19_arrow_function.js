function display(){           // this is normal function
    console.log("This is normal function.")
};
display();


let show = ()=>{
    console.log("This is normal Arrow function.");       // normal function with Arrow function
};
show();
//-----------------------------------------------------------------------

let a = function(){           // this is function expression
    console.log("This is FE.")
}
a();


let b = (c)=>{               // this is Arrow function with FE
    console.log("This is Arrow function with FE.",c)
}
b("virat");

// in short we can write like this using arrow function
// if we have one statement in {curly} brackets

let d = (p,q)=> p+q;
console.log(d(10,20));