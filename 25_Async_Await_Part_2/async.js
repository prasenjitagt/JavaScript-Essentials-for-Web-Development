//Async Await

//Async functions always return promise

//Await waits untill the promise is settled

//Error handling with -> try catch block

//easy to read then promises






const btn = document.getElementById("btn");
const first = document.getElementById("first");
const second = document.getElementById("scond");
const third = document.getElementById("third");


//Task
// first ko change karo 2s baad red
// second ko change karo first k 1s baad blue 
// third ko change karo second k 2s baad green

btn.addEventListener("click", () => {
    chagethecolor();
})

const chagethecolor = async () => {
    try {
        await colorChange(1000, first, 'red');
        await colorChange(1000, second, 'blue');
        await colorChange(2000, third, 'green');
    } catch (error) {
        console.log(error);
    }
}


const colorChange = (time, element, color) => {

    return new Promise((resolve, reject) => {
        if (element) {
            setTimeout(() => {
                element.style.color = color;
                resolve();
            }, time)
        }
        else {
            reject('kuch toh garbar hai');
        }
    })
}
