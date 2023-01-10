//Reduce Method (Part-2)
// Iterates, callback function
// Reduces the array to a single value (can be number, array, object)
// Takes 2 parameter
// 1st one is called 'accumulator' -> Total value after calculations
// 2nd one is called 'current' -> Current iteration/value


const todaysDetails = [
    {
        orderName:'Dum Biryani',
        price:199.99,
        quantity:2
    },
    {
        orderName:'Chicken Burger',
        price:129.99,
        quantity:4
    },
    {
        orderName:'Fried Rice',
        price:99.999,
        quantity:1
    },
    {
        orderName:'Egg Roll',
        price:79.99,
        quantity:3
    }
]; 


const total = todaysDetails.reduce((total,orders)=>{

    const {price,quantity}=orders;
    total.totalQuantity+=quantity;
    total.totalIncome+=quantity*price

return total
},{
    totalQuantity:0,
    totalIncome:0
})

total.totalIncome = parseFloat(total.totalIncome.toFixed(2));

// console.log(total);



//use in api
const link = 'https://api.github.com/users?per_page=100';

const countUsers = async()=>{
    const res = await fetch(link);
    const data = await res.json();
    console.log(data);
    let count = 0;
    const user = data.reduce((total,objs)=>{
        const {login} = objs;
        if(login){
            count++;
        }
        total = count;
        return total;
    },0)
    console.log(user);
}
countUsers();