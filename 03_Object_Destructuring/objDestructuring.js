const student = {
    fullName: 'Rakesh Singh',
    desgination: '8th',
    rollNO: 32,
    subjets: {
        science: 'Light',
        maths: 'Algebra'
    }
}



function myFunc({fullName, subjets: {science, maths}} = classStud){
//    const {fullName, subjets: {science, maths}} = classStud;
       console.log(maths);
}

myFunc(student);






// const {fullName, rollNO, desgination: my, zip, subjets: {science:favChap,maths}} = student;

// console.log(rollNO, my, zip, favChap , maths);





// const myName = student.fullName;
// let myRoll = student.rollNO;
// const favSubChapter = student.subjets.science;

// console.log(myName, myRoll, favSubChapter);



















// Destructuring
// Destructuring is a faster way to access the elements of an array or object;
// In this video we will cover Object Destructuring.