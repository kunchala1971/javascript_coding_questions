const nums="Kunchala Srinivasa Rao".replace(" " ,"").split("");

const uniq={};

nums.forEach((num)=>{
//   if(!uniq.includes(num))
//     {
//       uniq.push(num)
//     }
 uniq[num] = (uniq[num] || 0) + 1;
});

console.log(uniq);

// console.log(getCharFrequency(nums));

// function getCharFrequency(str) {
//   const frequency = {};

//   for (let char of str) {
//     frequency[char] = (frequency[char] || 0) + 1;
//   }

//   return frequency;
// }