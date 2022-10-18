console.log(`---------------1-----------------`)
function reverseString(arg1) {
    var lengthStr = arg1.length - 1;
    var reverseStr = "";
    for (let index = lengthStr; index >= 0; index--) {
        reverseStr = reverseStr + arg1.charAt(index);
    }
    console.log(`After reversing the string: ${reverseStr}`);
}

reverseString("Hard work always pays back");
reverseString("Soon I will be Angular IT champ");