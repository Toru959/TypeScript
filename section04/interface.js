"use strict";
// 通常の関数
// type addFunc = (num1: number, num2: number) => number;
// let addFunc: addFunc;
// addFunc = (n1: number, n2: number) =>  {
//     return n1 + n2;
// }
let addFunc;
addFunc = (n1, n2) => {
    return n1 + n2;
};
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
let developer = new Developer('Mark', 23, 5);
developer.name = 'Tom';
