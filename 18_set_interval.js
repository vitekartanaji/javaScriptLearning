function timeout(){
    console.log("Hello bro...");
};

 // it will display the result after 5 seconds & it continues repeated after given time
setInterval(timeout,5000); 

//---------------------------------------------------------------------------------------------------

function timeout2(){
    console.log("Hey bro");   
}

    // it will also work as same as setInterval but executes only once after given time
setTimeout(timeout2,1000);