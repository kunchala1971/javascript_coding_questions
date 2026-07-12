const person = {
    name: "John",
    surname: "Doe",
    fullname: function () {
        console.log(`${this.name} ${this.surname}`);
    }
};

const student = {
    name: "SrinivasaRao",
    surname: "Kunchala",
};
function fullname(age = 0) {
    if (age > 0) {
        console.log(`${this.name} ${this.surname} age:${age}`);
    }
    else {
        console.log(`${this.name} ${this.surname} `);
    }
}

fullname.call(person, 54);
person.fullname();
fullname.call(student);