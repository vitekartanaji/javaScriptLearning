console.log(`---------------1----------------`);

let bank_sbi = {
    accountHolderName:"Virat Kohli",
    branchName:"Sangola",
    accountOpenYaer:2022,
    totalAmount:10000
};
console.log(bank_sbi);

console.log(`---------------2----------------`);

let bank_location = {
    street:"GS Club",
    city:"Mumbai",
    pinCode:410001
};
console.log(bank_location);

console.log(`---------------3.1----------------`);

let cloneWithAssign = Object.assign({},bank_sbi,bank_location);
console.log("Objects cloned using Object.assign operator: ");
console.table(cloneWithAssign);

console.log(`---------------3.2----------------`);

let cloneWithSpread  = {...bank_sbi,bank_location};
console.log("Objects cloned using Spreadd operator: ")
console.table(cloneWithSpread);

console.log(`---------------4----------------`);

let rateOfInterest = {
    homeLone: "7%",
    personlLone:"9%",
    dueInterest:""
};

console.log(rateOfInterest);

console.log(`---------------5----------------`);

let sbiDetails = Object.assign({},bank_sbi,bank_location,rateOfInterest);
console.table(sbiDetails);

console.log(`---------------6---------------`);

for (const i in sbiDetails) {
        const element = sbiDetails[i];
        console.log(element);
}
