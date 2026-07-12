const employees = [
    {
        name: "John",
        desig: "Engg"
    },
    {
        name: "smith",
        desig: "Manager"
    },
    {
        name: "Michel",
        desig: "Engg",
    },
    {
        name: "Ford",
        desig: "Analyst"
    },
    {
        name: "Robin",
        desig: "Analyst"
    }
];

// const groupedByDesignation = employees.reduce((acc, employee) => {
//     const designation = employee.desig;
//     if(!acc[designation]){
//         acc[designation] = [];
//     }
//     acc[designation].push(employee);
//     return acc;
// }, {}); 


// console.log(groupedByDesignation);

const result = Object.values(
    employees.reduce((acc, { desig, name }) => {
        if (!acc[desig]) {
            acc[desig] = {
                desig,
                employees: []
            };
        }

        acc[desig].employees.push(name);

        return acc;
    }, {})
);

console.log(result);