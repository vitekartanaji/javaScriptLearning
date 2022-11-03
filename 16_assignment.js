let arrayName = ["Kamat","Memon","Nashpati","Taimur","Memon","Kamat","Andy","Taimur"];

console.log(`--------------B-------------`);

let nameDuplicates = [... new Set(arrayName)];
console.log(nameDuplicates);

console.log(`--------------C-------------`);

let a = arrayName.length;
let b = nameDuplicates.length;
console.log("Count of duplicate elements:",a-b);

console.log(`--------------D-------------`);

count =0;
for (const key of nameDuplicates) {
    if (key) {
        count++;
    }
}
console.log(`Total number of unique elements: ${count}`);