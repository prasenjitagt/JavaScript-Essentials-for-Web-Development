//for(_in_) -> Its a loop to iterates over objects;
// not preferable to use in Arrays
//use for(_of_) instead


const student = {
    firstName: 'Ramesh',
    rollNo:4,
    favSub: 'Maths'
};


for(const kuchbhi in student){
    result = `${kuchbhi} : ${student[kuchbhi]}`
    console.log(result);
}


const arr = [4,85,'rupesh',985,75];


for(a of arr){
    console.log(a);
}