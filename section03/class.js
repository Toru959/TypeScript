"use strict";
class Person {
    name;
    age;
    id = 1;
    // privateはクラス内では読み書きできる。
    // readonlyはクラス内外でも読み取りだけ
    constructor(name, age) {
        this.name = name;
        this.age = age;
        // this.name = "Tom"
        // this.age = 31;
        this.id = 2;
        this.id = 3;
    }
    incrementAge() {
        this.age += 1;
        // this.id = 2;
    }
    greeting() {
        console.log(`Hello! My name is ${this.name}`);
        console.log(`I am ${this.age} years old`);
    }
}
class Teacher extends Person {
    subject;
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
    greeting() {
        console.log(`Hello! My name is ${this.name}`);
        console.log(`I am ${this.age} years old`);
        console.log(`I teach ${this.subject}`);
    }
}
const teacher = new Teacher('Eric', 43, 'Music');
console.log(teacher.greeting());
