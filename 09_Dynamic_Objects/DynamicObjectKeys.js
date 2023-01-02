//Dynamic objects keys

//dot notation
const student ={
    firstName:'Rakesh',
    roll:12
}

student.age = 12;
console.log(student);



//square brackets notation
const orders ={
//    'completed-order': ['order1','order2','order3']
}






//to set statically use ''/""
// orders['no']=4
//to set dynamically use declared variables  


key = "kuchbhi";

orders[key] = 54;
console.log(orders);

// abc = 'employee';
zomato = {
    name:''
    
}

function changeState(key,value) {
    zomato[key]=value;
}

changeState('name','raju');
changeState('present',false)

console.log(zomato);




