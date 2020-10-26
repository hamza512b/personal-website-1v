import './assets/style.scss';

class Person {
    name = "";
    constructor(name) {
        this.name = name;
    }
}

const person = new Person("John");
console.log(person.name);