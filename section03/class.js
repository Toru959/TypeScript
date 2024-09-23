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
        this.name = "Tom";
        this.age = 31;
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
let person2 = Person;
const Json = new Person('Json', 21);
let UserName = Json.name;
console.log(UserName);
//一回変数に入れれば書き換えできる
UserName = 'Tom';
console.log(UserName);
Json.incrementAge();
console.log(Json.id);
// 直接代入できてしまう
// Json.age = 42;
Json.greeting();
// console.log(Username);
// const anotherJson = {
//     name: 'anotherJson',
//     anotherGreeting: Json.greeting
// }
// anotherJson.anotherGreeting();
