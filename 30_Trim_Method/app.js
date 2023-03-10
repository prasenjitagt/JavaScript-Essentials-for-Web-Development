//trim Method usage & application

const str1 = "   The Tripura Classes   ";

console.log(str1);
console.log(str1.trimStart());
console.log(str1.trimEnd());
console.log(str1.trim());



const str2 = "        ";

console.log(str2.length);
console.log(str2.trim().length);























const CheckString = (inputString) => {


    return (inputString.trim().length===0)
} 

const output = CheckString(str2);

console.log(output);



