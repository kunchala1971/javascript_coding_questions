const employees = [
    {
        name:"John",
        desig:"Engg"
    },
    {
        name:"smith",
        desig:"Manager"
    },
    {
        name:"Michel",
        desig:"Engg",
    },
    {
        name:"Ford",
        desig:"Analyst"
    },
    {
        name:"Robin",
        desig:"Analyst"
    }
];

const groupedByDesignation = employees.reduce((acc, employee) => {
    const designation = employee.desig;
    if(!acc[designation]){
        acc[designation] = [];
    }
    acc[designation].push(employee);
    return acc;
}, {}); 

console.log("TEst");
console.log(groupedByDesignation);

