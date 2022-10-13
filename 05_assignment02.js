console.log(`===============1===============`)

var ternary_str=function(num1,num2){
    console.log(`Greatest number is: ${num1>num2?num1:num2}`);
}
ternary_str(10,-10);
ternary_str(800,899);

console.log(`===============2===============`)

var even_odd1=function(arg1){
    var new1=arg1%2==0? "true":"false";
    console.log(`Number ${arg1} is: ${new1}`);
    return new1;
}

even_odd1(29);
even_odd1(44);
even_odd1(101);
even_odd1(0);

console.log(`===============3===============`)

var even_odd2=function(arg1){
    var new1=arg1.length%2==0? "even":"odd";
    console.log(`Word "${arg1}" is: ${new1}`);
    return new1;
}

even_odd2("Javascript");
even_odd2("Developer");
even_odd2("Google");