class Bank {
    constructor(bankName, location, accountNo, ifscNo, interestRate) {
        this.bankName = bankName;
        this.location = location;
        this.accountNo = accountNo;
        this.ifscNo = ifscNo;
        this.interestRate = interestRate
    }
    details(){
        console.log(`Bank details: ${this.bankName}, ${this.location}, ${this.accountNo}, ${this.ifscNo}, ${this.interestRate}`);
    }
}

let axixBank = new Bank("Axix Bank","Sangola",12345,"AXBK000","10%");
let sbiBank = new Bank("SBI Bank","Solapur",567890,"SBIN000","11%");

const ary = [axixBank,sbiBank]

for (const element of ary) {
    console.log(`Bank Details: ${element.bankName}, ${element.location}, ${element.accountNo}, ${element.ifscNo}, ${element.interestRate}`);
}