// console.log(`=================================`)

// for (let index=1; index<=10; index++) {
//     console.log(index);    
// }

// console.log(`=================================`)

// for (let index = 2; index <=20; index=index+2) {
//     console.log(index);
// }

console.log(`=================================`)
//top 5 even number from 1000

var count_var=0;

for (let index = 0; index <1000; index++) {
    if (index%2==0) {
        console.log(index);
        count_var=count_var+1;
        if (count_var==5) {
            break;
        }
    }
}