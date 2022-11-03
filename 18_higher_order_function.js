function doAssignment(arg1){
    console.log(`I am doing assignment & it is done now..`);
    let completeAssignment = function(){
        console.log("Hello i have completed my assignments.");
    };
    arg1();
    return completeAssignment;
};


function copyAssignment(){
    console.log(`Hey bro, Thank you. Let me copy..`);
};

let returnValue = doAssignment(copyAssignment);
returnValue();