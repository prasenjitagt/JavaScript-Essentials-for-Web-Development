// Rest Operator ... 
// Syntax is same as spread operator
// Rest operator gathers But Spread operators splits
// Used in destructuring and functions
// Place where we put the rest operator is important
// Name cannot be same
// Rt when define functieson But Spread when Calling the function



//Use in Arrays

const heros = ['spiderman','iron man', 'hulk','superman','bat man'];

const [firstHero,v,b,...kuchbhi] = heros;

console.log(firstHero,v);
console.log(kuchbhi);




// Use in objects
const person = {Name:'Saurav', post:'student', city:'Mumbai'};

const {Name,...rest} = person;

console.log(rest);


// Use in functions

const getAverage = (FullName,...scores) => {

    console.log(FullName);
    console.log(scores);
    total = scores.reduce((total,nums)=>{
        total = total + nums;
        
        return total},0);
    
        average = total/scores.length;

        console.log(average);
}

const num = [54,65,85,75,98];
getAverage(person.Name,...num)

