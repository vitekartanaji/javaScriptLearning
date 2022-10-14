console.log(`===============1==================`)

for (let index = 5; index <=15; index++){
    console.log(index);   
}

console.log(`================2=================`)

for (let index = 50; index >=40; index--){
    console.log(index);   
}

console.log(`================3=================`)

var count_odd=0;
for (let index = 0; index <100; index++) {
    if(index%2!=0){
        console.log(index);
        count_odd=count_odd+1;
        if (count_odd==15) {
            break;
        }
    }
}

console.log(`================4=================`)

var count_even=0;
for (let index = 0; index <100; index++) {
    if(index%2==0) {
        console.log(index);
        count_even=count_even+1;
        if (count_even==10) {
            break;
        }
    }
}

console.log(`================5=================`)

for (let index = 5; index <=50; index=index+5) {
    console.log(index);
}

console.log(`================6=================`)

for (let index = 10; index <=100; index=index+10) {
    console.log(index);
}

console.log(`================7=================`)

for (let index = 100; index >=10; index=index-10) {
    console.log(index);
}