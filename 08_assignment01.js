console.log(`-----------------------1-----------------------`);
// 1.Count the total number of vowels using includes() for given string.

var str="Good Morning IT champ";
var vowels =("aeiouAEIOU");
var count=0;

{
for (let index = 0; index < str.length; index++) {
    var char=str.charAt(index);
    var a=vowels.includes(char);
    if (a==true) {
        count=count+1;
    }
}
}
console.log(`Total no.of vowel in "Good Morning IT champ": ${count}`);


console.log(`-----------------------2-----------------------`);
// 2.Write a function to count vowels from the given string "I love javascript".

function countVowels() {
    var str = "I love Javascript";
    var vowels = ("aeiouAEIOU");
    var count = 0;

    {
        for (let index = 0; index < str.length; index++) {
            var char = str.charAt(index);
            var a = vowels.includes(char);
            if (a == true) {
                count = count + 1;
            }
        }
    }
    console.log(`Total no.of vowel in "I love Javascript": ${count}`);
}
countVowels();


console.log(`-----------------------3-----------------------`);
// 3.Write a function expression to sum of all numbers from 1 to 10.

var sumNumbers=function(){
    var sum=0;
    for (let index = 0; index <=10; index++) {
        sum+=index;
    }
    console.log(`Sum of numbers from 1 to 10: ${sum}`);
}
sumNumbers();


console.log(`-----------------------4-----------------------`);
// 4.Write a function to get square of numbers from 1 to 5.

function squareNumber(){
    var sum=0;
    for (let index = 1; index <=5; index++) {
        var a=index*index;
        sum+=a
    }
    console.log(`sum of square of numbers from 1 to 5: ${sum}`);
}
squareNumber();


console.log(`-----------------------5.1-----------------------`);
// 5.1.Find even positioned chars from given string.

function evenPositionedChar(arg1){
    var count=0;
    for (let index = 0; index < arg1.length; index++) { 
        var char = arg1.charAt(index);  
        if (index%2==0 && char!=" ") {
            count=count+1;
            // console.log(char);
        }     
    }
    console.log(`Total even positioned chars: ${count}`);
}
evenPositionedChar("Hard work always pays back");
evenPositionedChar("Soon I will be Angular IT champ");


console.log(`-----------------------5.2-----------------------`);
// 5.2.Find odd positioned chars from given string.

function oddPositionedChar(arg1){
    var count=0;
    for (let index = 0; index < arg1.length; index++) { 
        var char = arg1.charAt(index);  
        if (index%2!=0 && char!=" ") {
            count=count+1;
            // console.log(char);
        }     
    }
    console.log(`Total odd positioned chars: ${count}`);
}
oddPositionedChar("Hard work always pays back");
oddPositionedChar("Soon I will be Angular IT champ");