//Arrow functions

//fat arrow


// function sum (a,b) {


//     c = a+ b;
//     return c;
// }

// d = sum(5,2);
// console.log(d);


sum = (a, b) =>  {
    
    
    c=a+b;
    return c;
}


console.log(sum(4,1));

upc = str => str.toUpperCase();


console.log(upc("chota"));