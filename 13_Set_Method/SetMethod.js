//Set method - stores unique vlaues

//new Set()
//add(value) -> adds new value
//delete(value) -> deletes a existing value
//clear() ->deletes all values
//has(value) -> checks if a value is avaiable or not

const all = ['ram','subhash', 'ram','hemant','ram','subhash'];

const unique = new Set(all);

console.log(unique);
message = 'hello';
unique.add(message);
console.log(unique);

unique.delete('hello')
console.log(unique);

const check = unique.has('rama');
console.log(check);

const finalUnique = [...unique];
console.log(finalUnique);



