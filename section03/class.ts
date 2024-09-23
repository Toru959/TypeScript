class Person {

    name: string;
    private age: number

    constructor(initName: string, initAge: number){
       this.name = initName; 
       this.age = initAge;
    }

    incrementAge(){
        this.age += 1;
    }

    greeting(this: {name: string, age: number}){
        console.log(`Hello! My name is ${this.name}`);
        console.log(`I am ${this.age} years old`);
    }
}


const Json = new Person('Json', 21);

Json.incrementAge();
// 直接代入できてしまう
// Json.age = 42;
// Json.greeting();
// console.log(Username);

// const anotherJson = {
//     name: 'anotherJson',
//     anotherGreeting: Json.greeting
// }
// anotherJson.anotherGreeting();