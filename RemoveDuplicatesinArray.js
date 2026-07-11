let nums=[1,2,3,4,5,1,2,3,4,5];


console.log([...new Set(nums)]);

const uniq=[];
nums.forEach(element => {
    if (!uniq.includes(element)) {
        uniq.push(element);
    }
});

console.log(uniq);
