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
let iciciBank = new Bank("ICICI Bank","Kolhapur",99999,"ICICI000","12%");
let kotakBank = new Bank("Kotak Bank","Pandharpur",22222,"KTKN000","13%");
let hdfcBank = new Bank("HDFC Bank","Atpadi",12121,"HDNO000","14%");
let punjabBank = new Bank("Punjab Bank","Pune",56589,"PNO000","20%");

const ary = [axixBank,sbiBank,iciciBank,kotakBank,hdfcBank,punjabBank];

console.log(`----------1----------`)

for (let index = 0; index < ary.length; index++) {
    const element = ary[index];
    console.log(`Bank Details: ${element.bankName}, ${element.location}`);
}

console.log(`-----------2---------`)

for (const element of ary) {
    if (element==kotakBank) {
        console.log(`Bank Details: ${element.bankName}, ${element.location}, ${element.accountNo}, ${element.ifscNo}, ${element.interestRate}`);
    }
}

console.log(`----------3----------`)

for (const element of ary) {
    console.log(`Bank Details: ${element.bankName}, ${element.location}, ${element.accountNo}, ${element.ifscNo}, ${element.interestRate}`);
}