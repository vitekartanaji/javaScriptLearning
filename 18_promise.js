let is_sir_shared_notes = true;

let promice = new Promise(function(resolve, rejected){
    if(is_sir_shared_notes){
        resolve("Sir shared the notes.");
    }else{
        rejected("Sir did not shared the notes.");
    }
});

promice.then(function(Success){
    console.log(Success);
}).catch(function(Failure){
    console.log(Failure);
}).finally(function(Thank_You){
    console.log("Thank you.");
})

