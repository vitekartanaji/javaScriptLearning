function doAssignment(arg1,arg2){
    console.log(`I am doing assignment & it is done now..`);
    arg1();
    arg2();
};


function copyAssignment1(){
    console.log(`Hey bro, Thank you. Let me copy..`);
};


function copyAssignment2(){
    console.log(`Thank you bhai. Let me copy..`);    // maximum time only one function passed as argument
};


doAssignment(copyAssignment1,copyAssignment2);