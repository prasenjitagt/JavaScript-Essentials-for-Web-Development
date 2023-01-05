// Converting Objects into Arrays
// 3 methods to convert objects into arrays
// 1 -> Object.keys() => converts property names into array
// 2 -> Object.values() => converts property values into array
// 3 -> Object.entries() => converts both into array

const student = {
    firstName: 'Raju',
    age: 22,
    roll: 'B37'
};

const arr1 = Object.keys(student);
console.log(arr1);

const arr2 = Object.values(student);
console.log(arr2);

const arr3 = Object.entries(student);
console.log(arr3);

const [first,...rest] = arr3;
console.log(rest);

const arr4 = arr3.map((item)=>{
    const [first,...rest] = item;
    console.log(first,rest);
})

//for of

for(const [first,second] of arr3){

    console.log(first,second);
}