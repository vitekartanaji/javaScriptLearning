console.log(`------------------------1-------------------------`)
// 01-

const array_num1 = [20,3,4,56,90,400,49];

let array_num2 = array_num1;

console.log(`Original Array: ${array_num1}`);
console.log(`Cloned Array: ${array_num2}`);

array_num2.push(55);
array_num2.push(66);

console.log(`After updating - Original array: ${array_num1}`)
console.log(`After updating - Cloned array : ${array_num2}`);

console.log(`------------------------2-------------------------`)
// 02-

let array_num3 = [20,3,4,56,90,400,49];

let array_num4 = {...array_num3};
console.log(`Original Array: ${array_num3}`);
console.log("Cloned array: ",array_num4);

array_num3.push(10);
array_num3.push(25);
console.log(`After updating - Original array: ${array_num3}`);
console.log("After updating - Cloned array: ",array_num4);

console.log(`------------------------3-------------------------`)
// 03-

const array_even = [2,30,14,8];
const array_num5 = [20,3,4,56,90,400,49];

console.log(array_even);
console.log(array_num5);

let a=array_even.concat(array_num5);  // merged array using concat operator
console.log(`Merged array: ${a}`);

let b = [...array_even,...array_num5];  // merged array using spread operator
console.log(`new merge: ${b}`)

console.log(`------------------------4 & 5-------------------------`)
// 04- 

const employee_info = {
    emp_id:27,
    emp_name:"John Dae",
    salary:{
        july_month:"40,0000 INR",
        aug_month:"50,0000 INR",
        jun_month:"65,0000 INR"
    },
    address:{
        locality:{
            colony:"Om Vrindavan Society",
            street:"Chich Pokali, 431202"
        },
        city:"Mumbai",
        state:"Maharashtra",
        country:"India"
    },
    mobiles: ["+91 1800 5000 10", "1800 4000 20", "+91 1800 8000 99"]
}

console.log(employee_info);

console.log(`------------------------6-------------------------`)
// 06-

let emp_info = {...employee_info};

emp_info.address.locality.street = "Sangola";

emp_info.mobiles[0]="+91 9834592981";
console.table(emp_info);

console.log(`------------------------7-------------------------`)
// 07-

let emp_info1 = JSON.parse(JSON.stringify(employee_info));

emp_info1.salary.july_month="80,0000 INR";

console.log(`------------------------7-A-------------------------`)

console.log(`Previous salary: ${employee_info.salary.july_month}`);
console.log(`Updated salary: ${emp_info1.salary.july_month}`);

console.log(`------------------------7-B-------------------------`)

let emp_info2 = JSON.parse(JSON.stringify(employee_info));


emp_info2.address.country="United Kingdom";

console.log(`Previous country: ${employee_info.address.country}`);
console.log(`Updated country: ${emp_info2.address.country}`);