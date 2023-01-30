//Fetch Method



//data -> insert, update, read, delete from server
//fetch returns a promise


//data can be text/json (mostly json)


// link = "/msg.txt"

// fetch(link)
// .then((res)=>res.text())
// .then((data)=>{
//     msg.innerHTML=data;
// }).catch((err)=>console.log(err))

// console.log(p);

// getData = async () =>{
//     const res = await fetch(link);
//     const data = await res.text();

//     msg.innerHTML=data;
//     // console.log(data);
// }

// getData();



url = "https://jsonplaceholder.typicode.com/users";


getData2 =  async () =>{
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data);

    for(x of data){

    
        
        console.log(`${x.name} : ${x.email}`);
    }


}

getData2();











const msg = document.querySelector('#msg');









