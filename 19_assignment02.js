class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    };
};

const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(55, "Sonali", "Finance", 45000, "Infosys");
const emp_monika = new Employee(55, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(55, "Viny", "IT", 75000, "TCS");
const emp_mahi = new Employee(55, "Mahi", "HR", 85000, "Infosys");

let arrayEmployee = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];

console.log(`-----------------1-------------------`);

for (let index = 0; index < arrayEmployee.length; index++) {
    const element = arrayEmployee[index];
    if (element.emp_company=="TCS") {
        console.log(`Employee Name: ${element.emp_name}  Company Name: ${element.emp_company}`);        
    }
};

console.log(`-----------------2-------------------`);

for (let index = 0; index < arrayEmployee.length; index++) {
    const element = arrayEmployee[index];
    if (element.emp_dept=="Finance") {
        console.log(`Employee Name: ${element.emp_name} Department: ${element.emp_dept}`);        
    }
};

console.log(`-----------------3-------------------`);

for (let index = 0; index < arrayEmployee.length; index++) {
    const element = arrayEmployee[index];
    if (element.emp_name.startsWith("R")) {
        console.log(`${element.emp_id} ${element.emp_name} ${element.emp_dept} ${element.emp_salary} ${element.emp_company}`);        
    }
};

console.log(`-----------------4-------------------`);

for (let index = 0; index < arrayEmployee.length; index++) {
    const element = arrayEmployee[index];
    if (element.emp_salary>70000) {
        console.log(`Employee Name: ${element.emp_name} Company: ${element.emp_company} Salary: ${element.emp_salary}`);        
    }
};

console.log(`-----------------5-------------------`);

for (let index = 0; index < arrayEmployee.length; index++) {
    const element = arrayEmployee[index];
    if (element.emp_salary>=55000 && element.emp_dept=="IT") {
        console.log(`${element.emp_id} ${element.emp_name} ${element.emp_dept} ${element.emp_salary} ${element.emp_company}`);        
    }
};

console.log(`-----------------6-------------------`);

for (let index = 0; index < arrayEmployee.length; index++) {
    const element = arrayEmployee[index];
    if (element.emp_company=="Infosys") {
        console.log(`${element.emp_id} ${element.emp_name} ${element.emp_dept} ${element.emp_salary} ${element.emp_company}`);        
    }
};