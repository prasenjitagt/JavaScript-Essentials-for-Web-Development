//Reduce Method
// Iterates, callback function
// Reduces the array to a single value (can be number, array, object)
// Takes 2 parameter
// 1st one is called 'accumulator' -> Total value after calculations
// 2nd one is called 'current' -> Current iteration/value

const student = [
{firstName: 'Prashant', roll: 01, favSub: 'Maths', scholarship: 500},
{firstName: 'Raju', roll: 02, favSub: 'Physics', scholarship: 1000},
{firstName: 'Subhash', roll: 03, favSub: 'Chemistry', scholarship:2500},
{firstName: 'Vikas', roll: 04, favSub: 'Biology', scholarship: 5000}
];

const scholarshipPerYear = student.reduce((total,stud)=>{
    console.log(total);
    console.log(stud.scholarship);
    total = total + stud.scholarship;

    return total;
},1000);

console.log(scholarshipPerYear);
