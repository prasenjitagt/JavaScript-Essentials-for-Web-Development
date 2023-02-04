//Fetch Method


//data -> insert, update, read, delete from server
//fetch returns a promise


//data can be text/json (mostly json)


const link ="https://reqres.in/api/users";
const options ={
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({
        data:"kuch data",
        ekAurKey:"random"
    })
};


// fetch(link,options)
// .then(res=>res.json())
// .then(data=>console.log(data))
// .catch(err=>console.log(err))


const func = async ()=>{
    const res = await fetch(link,options);
    const data = await res.json();
    console.log(data);
}

func();









