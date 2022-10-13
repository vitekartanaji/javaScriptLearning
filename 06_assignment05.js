console.log(`-----------1-----------`);
function even_odd(num1){
    if(num1%2==0){
        console.log(`Number ${num1} is even.`);
    }else{
        console.log(`Number ${num1} is odd.`);
    }
};

even_odd(45);
even_odd(70);
even_odd(67);
even_odd(98);

console.log(`-----------2-----------`);


function vote(age){
    if(age>=18){
        console.log(`Person with ${age} age is eligible for vote.`);
    }else{
        console.log(`Person with ${age} age is not eligible for vote.`);
    }
};

vote(18);
vote(20);
vote(17);
vote(40);

console.log(`-----------3-----------`);

function check_char(arg1){
    if(arg1.length>=10){
        console.log(`String "${arg1}" contains more than 10 characters.`);
    }else{
        console.log(`String "${arg1}" not contains more than 10 characters.`);
    }
}
check_char("Javascript-ES6");

console.log(`-----------4-----------`);

function check_str(arg1){
    var check1=arg1.startsWith("Java");
    if(check1==true){
        console.log(`String "${arg1}" is starts with "Java".`);
    }else{
        console.log(`String "${arg1}" is not starts with "Java".`);
    }
}
check_str("Javascript Language");