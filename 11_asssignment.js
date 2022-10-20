
let teacher={
    collageName:"Sangola Collage Sangola",
    numberOfStaff:60,
    departments:{
        01:"CSC",
        02:"PhD",
        03:"EnTC",
        04:"Mech",
        05:"Civil"
    },
    certificates:{
        01:"Hackerrank",
        02:"W3S",
        03:"Advance Programming",
        04:"IFE Course",
        05:"Red Hat"
    },
    allDegree:function(){
        console.log(`College degrees are: ${teacher.departments[1]+` `+teacher.departments[2]
            +` `+teacher.departments[3]+` `+teacher.departments[4]+` `+teacher.departments[5]}`);
    }
}
console.table(teacher);

console.log(`-----------------------------------`);

teacher.allDegree();

console.log(`-----------------------------------`);
// New property added

teacher.contactUs=9834592981;
console.table(teacher);

console.log(`-----------------------------------`);
// updated the existing property department-2-PhD

teacher.departments[2]="Marine Eng.";
console.table(teacher);

console.log(`-----------------------------------`);
// delete existing certificate

delete teacher.certificates[5];
console.table(teacher);

console.log(`-----------------------------------`);
// add new certificate

teacher.certificates[5]="White Hat";
console.table(teacher);

console.log(`-----------------------------------`);
// log the nested object certificate on console

console.table(teacher.certificates);