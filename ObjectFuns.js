const person={
    id:1,
    name:"John",
    age:30,
    greet:function(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }       
};

person.greet();

console.log(Object.keys(person))
console.log(Object.values(person));
console.log(Object.entries(person));

const student=Object.create(person);
student.name="Ram";
console.log(student);
