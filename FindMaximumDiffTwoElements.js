//How do you find the maximum difference between any two elements in an input array?
function findMaxDifference(arr) { 
   if (arr.length < 2) {
       return 0; 
    } 
   let minVal = arr[0];
   let maxVal = arr[0];
   for (let i = 1; i < arr.length; i++) { 
      if (arr[i] < minVal) {
         minVal = arr[i];
      } else if (arr[i] > maxVal) {
           maxVal = arr[i]; }
   } 
   return maxVal - minVal;
}

const nums=[1,2,3,4,5,6];
console.log(findMaxDifference(nums));