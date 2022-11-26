const arrayOfNumbers = [2,3,5,4,6,1];

const newArray = arrayOfNumbers.filter((element)=>{
    return element>=4;
})
console.log(newArray);

const newArray1 = arrayOfNumbers.map((element)=>{
    return element>=4;
})
console.log(newArray1);