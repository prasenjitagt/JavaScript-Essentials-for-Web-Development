//Array.from Method
//Converts into array -> string, nodeList, Set
//We can pass an object with length property

const myName = "Prasenjit";

// const myNameArr = Array.from(myName,(item)=>item.toUpperCase());
// console.log(myNameArr);

const text = document.querySelectorAll(".text");

// console.log(text);
const res = Array.from(text);
// console.log(res);

const finalRes = res.find((item)=> item.textContent === "Vikas");


console.log(finalRes);





