"use strict";
class Developer {
    name;
    age;
    experience;
    constructor(name, age, experience) {
        this.name = name;
        this.age = age;
        this.experience = experience;
    }
    greeting(message) {
        console.log(message);
    }
}
const temDeveloper = {
    name: 'Jeff',
    age: 32,
    experience: 4,
    // greeting: (message: string) => void; 関数の型定義
    greeting(message) {
        console.log(message);
    }
};
const user = temDeveloper;
