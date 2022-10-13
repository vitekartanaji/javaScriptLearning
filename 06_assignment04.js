console.log("--------------1----------------")
function maleMarriageEligibility(gender,age,boyName){
    var check1=gender=="Male" && age>=21? `Hey ${boyName} you are eligible for marriage.`
    : `Hey ${boyName} you are not eligible for marriage.`;
    console.log(check1);
}

maleMarriageEligibility("Male",25,"Bill Gates");
maleMarriageEligibility("Male",17,"Steve Jobs");

console.log("--------------2----------------")

function femaleMarriageEligibility(gender,age,girlName){
    if(gender=="Female" && age>=18){
        console.log(`Hey ${girlName} you are eligible for marriage.`);
    }else{
        console.log(`Hey ${girlName} you are not eligible for marriage.`)
    }
}
femaleMarriageEligibility("Female",16,"Lauren Jerman");
femaleMarriageEligibility("Female",27,"Milinda Gates");