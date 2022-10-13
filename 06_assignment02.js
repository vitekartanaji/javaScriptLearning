console.log(`=================1=================`)
function marriageEligibility(gender,age){
    var check1=gender=="M" && age>=21?"Hey boy you are eligible for marriage.":"Not eligible for marriage.";
    console.log(check1);
}

marriageEligibility("M",21);
marriageEligibility("M",20);
marriageEligibility("M",22);

console.log(`=================2=================`)

var marriageEligibility=function(gender,age){
    var check1=gender=="F" && age>=18?"Hey girl you are eligible for marriage.":"Not eligible for marriage.";
    console.log(check1);
}

marriageEligibility("F",21);
marriageEligibility("F",17);
marriageEligibility("F",18);