//Callback Hell


const btn = document.getElementById("btn");
const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");


//Task
// first ko change karo 3s baad 
// second ko change karo first k 1s baad 
// third ko change karo second k 2s baad 


// btn.addEventListener('click',()=>{
//     btn.innerHTML="subscribe!";
// })

btn.addEventListener('click', () => {
    setTimeout(() => {
        first.style.color = "red";
        setTimeout(() => {
            second.style.color = "blue";
            setTimeout(() => {
                third.style.color = "green";
            }, 2000)
        }, 1000)
    }, 1000)

})

