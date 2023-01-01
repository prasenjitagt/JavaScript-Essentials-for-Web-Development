//Find Method
// Returns a single item [unlike Filter which returns a array]

// Returns the first match [in case of multiple matches] 
// If no match then returns undefined


const students = [
    {firstName:'raju', roll:4 , marks:75},
    {firstName:'ishika', roll:7 , marks:63},
    {firstName:'shivam', roll:9 , marks:89},
    {firstName:'saurav', roll:8 , marks:82}
    ];
    
//Filter
const studName = students.filter((person) => person.firstName === 'shivam');
console.log(studName);
//No match - empty array
 const aboveNinty = students.filter((highMark)=> highMark.marks > 90);
 console.log(aboveNinty);




 //Find
 const newStudName = students.find((kuchbhi) => {
    // if (kuchbhi.firstName == 'shivam') {
    //     return kuchbhi
    // }
 })
 const newStudName2 = students.find((kuchbhi) => kuchbhi.firstName==='shivam')
console.log(newStudName2);
 // Array of strings

 const fruits = ['lemon','mango','papaya'];

 const pehlaFruite = fruits.find((item)=> item==='lemon')

 console.log(pehlaFruite);


 // Same approach from filter
 const aboveEighty = students.find((mark)=> mark.marks>80)
 console.log(aboveEighty);
 const same = students.filter((item)=>item.marks>80);
 console.log(same);
//  const first = same[0];
 console.log(same[0].marks);

 
 
    
    
    