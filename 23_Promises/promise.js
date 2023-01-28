//Promises

// Callback Hell ka ilaaj

//3 States -> pending,resolved,rejected


// const promise = new Promise((resolve,reject)=>{
//     resolve([1,5,9,6]);
//     // reject('error hai');
// });

// // console.log(promise);


// promise.then((kuchbhi)=>{
//     console.log(kuchbhi);
// }).catch((err)=>{console.log(err);})






















const btn = document.getElementById("btn");
const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");


//Task
// first ko change karo 1s baad red
// second ko change karo first k 1s baad blue 
// third ko change karo second k 2s baad green


btn.addEventListener("click",()=>{
    colorChange(1000,first,'red')
    .then(()=>colorChange(1000,second,'blue'))
    .then(()=>colorChange(2000,third,'green'))
    .catch((err)=>console.log(err))
})

const colorChange = (time,element,color) =>{
    return new Promise((resolve, reject) => {
        if (element) {
            setTimeout(()=>{
                element.style.color = color;
                resolve();
            },time)
        }
        else{
            reject('kuch toh garbar hai');
        }
    })
}
