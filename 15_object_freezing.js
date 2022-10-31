let obj = {
    name:"Tanaji",
    city:"Sangola"
}
console.log(obj);

Object.freeze(obj);   // now object is freezed & we can't make any changes in it

obj.clg="SMS";
console.log(obj);     // no new changes are made--because of object is freezed

const ar1=[1,2,3,4,5];
console.log(ar1);
Object.freeze(ar1);   // array also freezed using array.freeze()

//-----------------------------------------------------
// object cloning using object.assign property

const student = {
    name: "Virat",
    city:"Delhi"
}

const studentclone = Object.assign({},student);    // deep cloning will be performed

console.log(student);
console.log(studentclone);      //cloned using the object.assign property

//-------------------------------------------------------
// to merge two objects

const address = {
    street:"Sangola",
    piCode:413314
}

const mergedObject = Object.assign({},student,address);
console.log(mergedObject);