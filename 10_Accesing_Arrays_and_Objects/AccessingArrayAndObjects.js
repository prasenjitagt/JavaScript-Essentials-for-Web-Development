//Accessing the Arrays and objects 
// use dot notation and square brackets notation as per your needs

const student = {
    firstName: 'Shubham',
    details: [{
        'more-details':{
            food: ['meat','chips']
        }
    },12,'kuch string']
}


//when in array use indexing
//when in object use dot or square bracket notaion
 
console.log(student.details[0]["more-details"].food[1]);