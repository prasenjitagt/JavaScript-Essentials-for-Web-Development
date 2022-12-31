//Filter Method
// Returns a new array based on the condition given
// unlike map method the size of the array can be manipulated


// Array of objects;
const students = [
{firstName:'raju', roll:4 , marks:75},
{firstName:'ishika', roll:7 , marks:63},
{firstName:'shivam', roll:9 , marks:89},
{firstName:'saurav', roll:8 , marks:82}
];


// const greateraMarks = students.filter((kuchbhi)=>{
// //  if (kuchbhi.marks>80) {
// //     return kuchbhi
// //  }
// // return kuchbhi.marks>80
// });
const greateraMarks = students.filter((item)=> item.marks>80)



console.log(greateraMarks);

// Array of strings

const animals = ['lion','tiger','cat','dog'];

const king = animals.filter((janwar)=> janwar==='lion');

console.log(king);


//No match
const verygreateraMarks = students.filter((item)=> item.marks>90)
console.log(verygreateraMarks);


