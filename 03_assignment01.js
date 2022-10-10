//01

var sqr=function (a){
    console.log(a*a);
};

sqr(5);
sqr(6);
sqr(25);
sqr(100);

console.log("=========================================")

//02

console.log(typeof sqr);

console.log("=========================================")

//03

var triangle = function(base,height){
    console.log("Area of triangle =",0.5*base*height);
};

triangle(45,35);

console.log("=========================================")

//04

var rectangle=function(length,width){
    console.log("Area of rectangle =",length*width);
}

rectangle(499,917);

console.log("=========================================")

//05

var swap_values=function(arg1,arg2){
    console.log("Before swap: ",arg1,arg2);
    var arg3=arg1;
        arg1=arg2;
        arg2=arg3;
    console.log("After swap: ",arg1,arg2);
}

swap_values("Virat","Anushka");
swap_values(1000,2000);

console.log("=========================================")

//06

var  new_char=function(argm){
    console.log("A- Length of string: ",argm.length);
    console.log("B- Index of char 'S': ",argm.indexOf("S"));
    console.log("C- Index of char 'lang': ",argm.indexOf("lang"));
    console.log("D- Last character of string: ",argm.charAt(argm.length-1));
    console.log("E- 3rd last character of string: ",argm.charAt(argm.length-3));
}

var ab=new_char("JavaScript is the most popular language");

console.log("==================================================================================")
