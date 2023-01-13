//Array.from Method (Part-2)
//Converts into array -> string, nodeList, Set
//We can pass an object with length property

const arr1 = Array.from({length:5},(value,indx)=> indx);


// console.log(arr1);





























links = ["https://www.abc.com",
"http://www.def.com",
"http://www.ghi.com",
"https://www.jkl.com"];


const arr2 = Array.from(links,(link,deneKAZaruratYAhaNahiHai)=> link);

const notSecure= arr2.filter((kuchbhi)=>kuchbhi.startsWith("https://"));

console.log(notSecure);

