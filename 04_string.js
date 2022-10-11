console.log("================Concat()=================")
var f_name="Virat ";
var l_name="Kohli";
console.log(f_name.concat(l_name));

console.log("================Replace()=================")

var abc="Good Morning";
console.log(abc.replace("Morning","Afternoon"));

console.log("================LastindexOf()=================")

var abc="Hello Good Morning Good Afternoon"
console.log(abc.lastIndexOf("Good"));

console.log("================toUpparCase()=================")

console.log(abc.toUpperCase());

console.log("================toLowerCase()=================")

console.log(abc.toLowerCase());

console.log("================trim()=================")

var abc="     Good morning bro & sis    ";
console.log(abc.length);
var bc=abc.trim();
console.log(bc);
console.log(bc.length);

console.log("================includes()=================")

console.log(abc.includes("bro"));

console.log("================search()=================")

console.log(abc.search("sis"));

console.log("================substring()=================")

var string_1="Hello welcome to the Pune"
console.log(string_1.substring(6));
console.log(string_1.substring(6,13));

console.log("================slice()=================")

console.log(string_1.slice(6,13));

console.log("=================split()================")

var string_2="one|two|three|four|five";
console.log(string_2.split("|"));

console.log("==================Double quote for string(ES-6)===============")

var string_3=`Hello welcome to the "Pune"`;
console.log(string_3);

console.log("==================Variable Substitution(ES-6)===============")

var str1="Virat";
var str2="Kohli";
console.log(`First Name:${str1} - Last Name:${str2}`);