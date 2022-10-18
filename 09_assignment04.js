
console.log(`---------------1-----------------`);
// 1.Reverse the string using function with one argument & ignore the spaces between them.

function reverseString(arg1) {
    var lengthStr = arg1.length - 1;
    var reverseStr = "";
    for (let index = lengthStr; index >= 0; index--) {
        var char=arg1.charAt(index)
        if(char!=" "){
            reverseStr = reverseStr + char;
        }
    }
    console.log(`After reversing the string: ${reverseStr}`);
}

reverseString("Hard work always pays back");
reverseString("Soon I will be Angular IT champ");