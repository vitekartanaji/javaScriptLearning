var stringHandsOn=function(){

    var str="   Hey you are doing good, keep it up   ";
    console.log("01-Statement: ",str);
    console.log("==============================");

    var str_len=str.length;
    console.log("02-Length of string: ",str_len);
    console.log("==============================");

    var str_trim=str.trim();
    console.log("03-Removing spaces: ",str_trim);
    console.log("==============================");
    
    var extra_space=str_trim.length;
    var total_extra=str_len-extra_space;
    console.log("04-Number of extra spaces: ",total_extra);
    console.log("==============================");

    console.log(`05-First char: ${str_trim.slice(0,1)}  Last char: ${str_trim.slice(33,34)}`);
    console.log("==============================");
    
    console.log("06-Length of string after trim: ",str_trim.length);

    console.log("==============================");

    console.log(`07-Index of string "good" - ${str_trim.indexOf("good")}`);

    console.log("==============================");

    console.log("08-Substring starting from index 22- ",str_trim.slice(22));

    console.log("==============================");

    console.log(`09-Is string ends with "up"- ${str_trim.endsWith("up")}`);

    console.log("==============================");
    
    console.log(`10-Is string starts with "Hey"- ${str_trim.startsWith("Hey")}`);

}
stringHandsOn();

