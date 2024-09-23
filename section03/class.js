"use strict";
class Person {
    name;
    constructor(initName) {
        this.name = initName;
    }
    greeting() {
        console.log(`Hello! My name is ${this.name}`);
    }
}
const Username = new Person('Json');
Username.greeting();
// console.log(Username);
const anotherUsername = {
    name: 'anotherJson',
    anotherGreeting: Username.greeting
};
anotherUsername.anotherGreeting();
