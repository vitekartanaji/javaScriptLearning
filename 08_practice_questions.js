console.log("==========1=======================================");
//1. To print only even number characters from string.

var string1="I love Javascript";
for (let index = 0; index < string1.length; index++) {
    if (index%2==0) {
        var result=string1.charAt(index);
        console.log(result);   
    }
};

console.log("==========2========================================");
//2. To print all vowels from a string.

var string1="I love Javascript";
for (let index = 0; index < string1.length; index++) {
    var char=string1.charAt(index);
    if (char=="a"||char=="A"||char=="e"||char=="E"||char=="i"||char=="I"||
                 char=="o"||char=="O"||char=="u"||char=="U") {
        console.log(`----`)
        console.log(char);
    }        //else{        to print other than vowels chars from string. 
        //console.log(char)};
};

console.log("==========3========================================");
//3. To print all vowels from a string.(Another method)

var string1="I love Javascript";
for (let index = 0; index < string1.length; index++) {
    var char=string1.charAt(index);
    if (char=="a"||"e") {
        console.log(`----`)
        console.log(char);
    }        //else{        to print other than vowels chars from string. 
        //console.log(char)};
};

console.log("==========4=====================================");
// 4.To reverse the given string

var myName="Tanaji";

var lengthStr=myName.length-1;
var reverseStr="";
for (let index = lengthStr; index >=0; index--) {
    // console.log(myName.charAt(index))
    reverseStr=reverseStr+myName.charAt(index);
}
console.log(reverseStr);

console.log("==========5====================================");
// 5.Add numbers from 1 to 5

var add=0;
for (let index = 0; index <=5; index++) {
    add=add+index;
}
console.log(add);