const link = "https://jsonplaceholder.typicode.com/posts";




// axios.get(link).then(res=>console.log(res.data)).catch(error=>console.log(error.message));



const getData = async () =>{
    try {
        const res = await axios.get(link);
    console.log(res.data);
    } catch (error) {
        console.log(error.message);
    }
}

// getData();



axios.post(link,{
    channel:"THE TRIPURA CLASSES",
    video:"Axios"
}).then(res=>console.log(res.data)).catch(err=>console.log(err))