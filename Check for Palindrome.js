str="madam";
revstr=str.split('').reverse().join('');
console.log(str,"=",revstr);
const isPalindrome = str => str == revstr;

console.log(str==revstr);