const arrayOfNames = ["one","two","three","four","five"];

console.log(arrayOfNames.sort());

//-------------------------------------------------------------

const arrayOfNumbers = [100,21,300,4,8,47,67,5];

arrayOfNumbers.sort((first,second)=>{
    return (first>second? 1:-1);
});
console.log(`Ascending Order: ${arrayOfNumbers}`);

arrayOfNumbers.sort((first,second)=>{
    return (first>second? -1:1);
});
console.log(`Descending Order: ${arrayOfNumbers}`);