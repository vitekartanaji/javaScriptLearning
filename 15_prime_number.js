function primeNumber(arg1){
    for (let index = 2; index < arg1; index++) {
        if (arg1%index==0) {
            return false;
        }
    }
    return true;
}

console.log(primeNumber(18));
console.log(primeNumber(23));