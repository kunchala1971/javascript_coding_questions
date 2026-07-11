function createCounter() {
    let count = 0;
    return function counter() {
        count++;
        return count;
    }
    return counter;
}

const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter()); 