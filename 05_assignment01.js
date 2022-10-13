console.log(`===============1===============`)
var wordLengthSquare=function(word){
    console.log(`Length of Word : ${word.length}`)
    var result1=word.length**2;
    console.log(`Square of the length: ${result1}`);
};

wordLengthSquare("javascript");
wordLengthSquare("Google");
wordLengthSquare("Developer");

console.log(`===============2===============`)

function str(){
    var given_str="I am Angular Developer".length;
    var result="I am Angular Developer".split(" ");
    var total=result.length;
    var result1=given_str/total;
    var result2=given_str*total;
    console.log(`Length of string: ${given_str}`);
    console.log(`Words in string: ${total}`);
    console.log(`Result after divide: ${result1}`);
    console.log(`Result of multiplication: ${result2}`);
}

str();