console.log(`-----------------------1-----------------------`);
// 1.Count the total number of vowels using include() for string-"I am very good IT Developer."

var str="I am very good IT developer";
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
console.log(`Total no.of vowel in "I am very good IT Developer": ${count}`);


console.log(`-----------------------2-----------------------`);
// 2.Write a function to get the sum of cube of numbers from 1 to 5.

function cubeNumber(){
    var sum=0;
    for (let index = 1; index <=5; index++) {
        var a=index*index*index;
        sum+=a
    }
    console.log(`sum of Cube of numbers from 1 to 5: ${sum}`);
}
cubeNumber();
