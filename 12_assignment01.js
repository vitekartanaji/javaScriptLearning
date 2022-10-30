// 01
console.log(`----------------------01--------------------------`)
class vehicle{

    constructor(vehicleName, vehicleType, vehicleNumber, vehicleColor) {
        this.vehicleName=vehicleName;
        this.vehicleType=vehicleType;
        this.vehicleNumber=vehicleNumber;
        this.vehicleColor=vehicleColor;        
    };

};

let vanFirst = new vehicle("Desire","Sedan",9999,"White");
let vanSecond = new vehicle("Zest","Sedan",8888,"Grey");
let vanThird = new vehicle("Xcent","Sedan",7777,"Black");
let vanFourth = new vehicle("Ertiga","Carrier",6666,"White");
let vanFifth = new vehicle("Innova","Premier",5555,"Red");

console.log(vanFirst);
console.log(vanSecond);
console.log(vanThird);
console.log(vanFourth);
console.log(vanFifth);

console.log(`---------------------------02--------------------------------`);

// 02

class College_Details{

    constructor(clgName, clgCity, clgStrength, clgCourses) {
        this.clgName=clgName;
        this.clgCity=clgCity;
        this.clgStrength=clgStrength;
        this.clgCourses=clgCourses;       
    };

};

let clgFirst = new College_Details("SMS","Sangola",5000,15);
let clgSecond = new College_Details("VMS","Sangola",4000,10);
let clgThird = new College_Details("VMH","Sangola",2500,6);
let clgFourth = new College_Details("Fabtech","Sangola",3000,8);
let clgFifth = new College_Details("SPC","Sangola",3500,8);

console.log(clgFirst);
console.log(clgSecond);
console.log(clgThird);
console.log(clgFourth);
console.log(clgFifth);

console.log(`------------------------------03------------------------------`);

// 03

let personDetails = {
    fullName :"Tanaji Vitekar",
    city: "Sangola",
    age: 23,
    degree: "Bcs"
}

for (const key in personDetails) {
    if (Object.hasOwnProperty.call(personDetails, key)) {
        const element = personDetails[key];
        console.log(`${key}: ${element}`);
    }
}
