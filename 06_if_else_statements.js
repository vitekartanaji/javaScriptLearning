console.log(`----Simple IF statement-----`)
//When condition is true
var a=2+2;
if(a==4){
    console.log("Answer is right.");
};

//When condition is false
var a=2+2;
if (a==5){
    console.log("Answer is right.");
};
console.log("Answer is wrong.");

console.log(`-----Nested IF statement-----`)

var a=100;
if(a>0){
    console.log("Positive Number.")
    if(a%2==0){
        console.log("Even Number.")
    }
};

console.log(`-----If-Else statement-----`)

var a=2+3;
if(a==4){
    console.log("Answer is right.");
}else{
    console.log("Answer is wrong.");
};
