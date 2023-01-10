//Optional Chaining
const details =[
    {
        firstName: "ram",
        moreDetails: {
            roll: 54,
            subMarks: {science:89}
        }
    },
    {
        firstName: "arjun",
        moreDetails: {
            roll: 12
        }
    },
    {
        firstName: "karn",
        moreDetails: {
            roll: 36,
            subMarks: {science:92}
        }
    }
];

details.forEach((person)=>{
    // console.log(person.firstName);
    // console.log(person.moreDetails.subMarks.science);

    // console.log(person.moreDetails && person.moreDetails.subMarks && person.moreDetails.subMarks.science);

    console.log(person?.moreDetails?.subMarks?.science || "yaha property hai he nahi");

});

// console.log(true && "hello world");
// console.log(false && "hello world");