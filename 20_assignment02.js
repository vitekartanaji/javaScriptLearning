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

mapEmployee = new Map();

mapEmployee.set(22,emp_anil);
mapEmployee.set(33,emp_radha);
mapEmployee.set(55,emp_rishi);
mapEmployee.set(66,emp_sonali);
mapEmployee.set(77,emp_monika);
mapEmployee.set(88,emp_vinay);
mapEmployee.set(99,emp_mahi);


mapEmployee.forEach((Employee)=>{
    console.log(`Employee ID: ${Employee.emp_id} EmpName: ${Employee.emp_name} 
                  EmpDept: ${Employee.emp_dept} EmpCompany: ${Employee.emp_company} 
                  EmpSalary:${Employee.emp_salary}`);
})