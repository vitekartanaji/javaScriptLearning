console.log(`-----------------1---------------------`)
// 1.WAP to print the numbers from 5 to 15 by incrementing by 1.

var count=5;
while (count<=15) {
    console.log(count);
    count++;
}


console.log(`------------------2--------------------`)
// 2.WAP to print the numbers from 50 to 40 by decrementing by 1.

var count=50;
while (count>=40) {
    console.log(count);
    count--
}


console.log(`------------------3--------------------`)
// 3.WAP to find the first 15 odd numbers.

var count=1;
while (count<33) {
    if (count%2!=0) {
        console.log(count);        
    }
    count++;
        if(count++ ===15) {
        break;
        }
}


console.log(`------------------4--------------------`)
// 4.WAP to find the first 10 even numbers.

var count=0;
while (count<20) {
    if (count%2==0) {
        console.log(count);        
    }
    var a=count++;
        if(a ==20) {
        break;
        }
}


console.log(`------------------5--------------------`)
// 5.Print table of 5.

var count=5;
while (count<=50) {
    console.log(count);
    count=count+5;
}


console.log(`------------------6--------------------`)
// 6.Print table of 10.

var count=10;
while (count<=100) {
    console.log(count);
    count=count+10;
}


console.log(`------------------7--------------------`)
// 7.Print table of 10 in reverse order.

var count=100;
while (count>=10) {
    console.log(count);
    count=count-10;
}