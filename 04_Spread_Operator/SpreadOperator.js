// Spread Operator ...
// Split into single items and then Copy them



// Use in Strings

const myName = 'Prasenjit';

const newArray = [...myName];

 console.log(newArray);

// Use in Array

// const boys = ['raju','subhash','ramesh'];
// const girls = ['prity', 'sonya'];
// const newGirl = 'priyanka';

// let friends = [...boys,...girls,newGirl];

// console.log(friends);


//Problem with the reference
// const boys = ['raju','subhash','ramesh'];
// let newArray2 = boys;
// newArray2[0] = 'vikas'
// console.log(boys);
// console.log(newArray2);

// Solution with spread operator
const boys = ['raju','subhash','ramesh'];
let newArray2 = [...boys];
newArray2[0] = 'vikas'
console.log(boys);
console.log(newArray2);

// Use in Objects
const student = { fullName: 'Rupesh Gupta', rollNo: 46 };
//Overwrite the values
let person = {...student,homeState:'TamilNadu', fullName:'vikas'};

console.log(person)
console.log(student)

