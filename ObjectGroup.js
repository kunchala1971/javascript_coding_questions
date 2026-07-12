const employees = [
    {
        id:1,
        name:"John",
        desig:"Engg"
    },
    {
        id:2,  
        name:"smith",
        desig:"Manager"
    },
    {
        id:3,
        name:"Michel",
        desig:"Engg",
    },
    {
        id:4,
        name:"Ford",
        desig:"Analyst"
    },
    {
        id:5,
        name:"Robin",
        desig:"Analyst"
    }
];

const groupedByDesignation = employees.reduce((acc, employee) => {
    const designation = employee.desig;

    if (!acc[designation]) {
        acc[designation] = [];
    }

    acc[designation].push(employee);

    return acc;
}, {});

console.log(groupedByDesignation);

