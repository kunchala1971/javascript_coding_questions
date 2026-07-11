function sum(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}

let result = sum(2)(3)(4);
console.log(result); // Output: 9