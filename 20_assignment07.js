class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}

const emp_anil = new Employee (22,"Anil","IT",50000,"TCS");
const emp_radha = new Employee (33,"Radha","HR",74000,"Wipro");
const emp_rishi = new Employee (55,"Rishi","Finance",47000,"TCS");
const emp_sonali = new Employee (66,"Sonali","Finance",45000,"Infosys");
const emp_monika = new Employee (77,"Monika","IT",40000,"Wipro");
const emp_vinay = new Employee (88,"Vinayak","IT",75000,"TCS");
const emp_mahi = new Employee (99,"Mahesh","HR",85000,"Infosys");

const ary = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_vinay,emp_mahi];

console.log(`--------------------1------------------`)

let a = ary.filter((Employee)=>{
    return Employee.emp_company=="Wipro";
})

let b = a.reduce((value)=>{
    return value;
})
console.log(b);

console.log(`--------------------2------------------`)

let c = ary.filter((Employee)=>{
    return ((Employee.emp_dept=="IT") || (Employee.emp_dept=="HR"));
})

let d = c.reduce((value)=>{
    return value;
})
console.log(b);

console.log(`--------------------3------------------`)
console.log(`--------------------4------------------`)
console.log(`--------------------5------------------`)
console.log(`--------------------6------------------`)
