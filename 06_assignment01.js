var tcsEligibilityCheck=function(grad_score,hsc_score,ssc_score,candidate_name){

    var check1=grad_score>=70||hsc_score>=80||ssc_score==90?
    `Congrats ${candidate_name} you are eligible for TCS interview.` :
    `Unfortunately you are not eligible for TCS interview.`
    console.log(check1);
    return check1;
}

tcsEligibilityCheck(80,86,90,"Tanaji Vitekar");
tcsEligibilityCheck(70,65,55,"Kiran Vitekar");
tcsEligibilityCheck(60,79,88,"Sharan Kamble");