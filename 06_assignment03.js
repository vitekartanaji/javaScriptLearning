console.log(`----------1-----------`)
console.log(0==' ');
console.log(0=='0');
console.log(0==false)
console.log(null==undefined);
console.log(1==[1]);
console.log(1==true);
console.log(1=='1');

console.log(`----------2-----------`)

var str=function(a,b,c){
    var new1=a>b?a:b;
    var new2=new1>c?new1:c;
    console.log(`Greatest number is: ${new2}`);
};
str(100,99,101);