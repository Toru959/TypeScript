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
    _subject;
    // getter 何かデータを取得したときに何かの関数を実行する
    get subject() {
        if (!this._subject) {
            throw new Error('There is no subject.');
        }
        return this._subject;
    }
    // setter 何かの値を変更したいときに
    set subject(value) {
        if (!value) {
            throw new Error('There is no value');
        }
        this._subject = value;
    }
    constructor(name, age, _subject) {
        super(name, age);
        this._subject = _subject;
    }
    greeting() {
        console.log(`Hello! My name is ${this.name}`);
        console.log(`I am ${this.age} years old`);
        console.log(`I teach ${this._subject}`);
    }
}
const teacher = new Teacher('Eric', 43, 'Music');
teacher.subject = 'Guitar';
// getterは関数だがプロパティのように扱える
console.log(teacher.subject);
