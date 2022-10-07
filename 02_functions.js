// function newFunction(){
//     console.log("Hello how are you??");
//     console.log("Iam fine..!")
// }

// newFunction();

// function sachin(money){
//     console.log("Please goto market with Rs.:",money);
//     console.log("Buy some vegetable")
//     return "vegetables bag";
// }

// var veg=sachin(500)
// console.log(veg)

// function tanaji(name,age,address,number){
//     console.log("my name is:",name);
//     console.log("my age is:",age);
//     console.log("my address is:",address)
//     console.log("my number is:",number);
//     return "thank  you";
// }

// var value=tanaji("vitekar",22,"pune",101)
// console.log(value)

//-------------------------------------------------------------
//-----------Assignment------------------------
//01------

function first(){
    console.log("This is first function.")
};
first();

function second(){
    console.log("This is second function.")
};
second();

//02------

function third(firstName,lastName){
    console.log(firstName,lastName);
};

third("Tanaji","Vitekar");

//03-----

function swap_values(val1,val2,val3,val4){
    console.log("Before swap-");
    console.log(val1,val2,"&",val3,val4)
    console.log("After swapping-");
    var val5=val1;
    val1=val2;
    val2=val5;
    val6=val3;
    val3=val4;
    val4=val6;
    console.log(val1,val2,"&",val3,val4)
}

swap_values("Virat","Anushka",1000,2000)

//04-----

function add_three_numbers(val1,val2,val3){
    console.log("Addition=",val1+val2+val3)
}
add_three_numbers(10.23,600,40)

function add_three_numbers(val1,val2,val3){
    console.log("Addition=",val1+val2+val3)
}
add_three_numbers("Hello"," Good"," Morning")