const fruits=["Banana","Orange","Apple","Mango","Water Melon"];

console.log(`-----------------------1------------------------`);

let a = fruits.slice(0,1);
let b = fruits.slice(4);
console.log(`First element: ${a} & Last element: ${b}`);

console.log(`-----------------------2------------------------`);

let c = fruits.splice(0,0,"Papaya");
console.log(`New array: ${fruits}`);

console.log(`-----------------------3------------------------`);

let d = fruits.splice(4,1);
console.log(`After removing the "Mango" : ${fruits}`);

console.log(`-----------------------4------------------------`);

let e = fruits.splice(5,0,"Pineapple");
console.log(`After adding 'Pineapple': ${fruits}`);

console.log(`-----------------------5------------------------`);

let f = fruits.splice(4,0,"Dragon Fruit");
console.log(`After adding 'Dragon': ${fruits}`);

console.log(`-----------------------6------------------------`);

let g = fruits.splice(2,1,"Kiwi");
console.log(`After replacing 'Orange': ${fruits}`);

console.log(`-----------------------7------------------------`);

for (let index = 1; index <=4; index++) {
    const element = fruits[index];
    console.log(`Index 1 to 4: ${element}`);
};

console.log(`-----------------------8------------------------`);

for (let index = fruits.length-1; index >= 4; index--) {
    const element = fruits[index];
    console.log(`Last 3 elements: ${element}`);
}