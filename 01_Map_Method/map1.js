patients = [
    {
        firstName: "Vikas",
        lastName: "Mehta",
        age: 24,
        bloodGroup: "A+"
    },
    {
        firstName: "Sonya",
        lastName: "Kapoor",
        age: 29,
        bloodGroup: "B-"
    },
    {
        firstName: "Rakesh",
        lastName: "Gupta",
        age: 42,
        bloodGroup: "A+" 
    },
];


const divName = document.getElementById('names');

const patientNames = patients.map((Fname)=>{
    return `<h2>${Fname.firstName}</h2>`
})

divName.innerHTML = patientNames.join('');



















// map method
// Returns an array
// Does not change the size of the orignal array
// Uses values from origal array when making new one


























// const patientNames = patients.map((eachName)=>{
//     return `<h3>${eachName.firstName.toUpperCase()}</h3>`
// })

// const names = document.getElementById('names');

// names.innerHTML = patientNames.join('');