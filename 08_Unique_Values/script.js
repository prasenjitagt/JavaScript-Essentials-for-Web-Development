//Unique Values
const people = [
    {
        name: 'Rakesh',
        post: 'Developer'
    },
    {
        name: 'Vijay',
        post: 'Gamer'
    },
    {
        name: 'Priyanka',
        post: 'Singer'
    },
    {
        name: 'Raju',
        post: 'Designer'
    },
    {
        name: 'Suraj',
        post: 'Developer'
    },
    {
        name: 'Subhash',
        post: 'Singer'
    },
    {
        name: 'Umesh',
        post: 'Gamer'
    }
];

// const all = people.map((kuchbhi)=>kuchbhi.post);
// console.log(all);
// const uniqueAll = new Set(all);
// console.log(uniqueAll);

// const finalArray = [...uniqueAll];
// console.log(finalArray);

const finalarr=[...new Set(people.map((kuchbhi)=>kuchbhi.post))];
console.log(finalarr);


const btns = document.getElementById('btns');

btns.innerHTML = finalarr.map((e)=>{
    return `<button>${e}</button>`;
}).join('');

// Step-1 : use [map] to get all values
//Step-2: use [new Set] to get unique values
//Step-3: use [Spread Operator] to turn back in array