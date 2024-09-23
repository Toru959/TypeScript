class Person {

    name: string;

    constructor(initName: string){
       this.name = initName; 
    }

    greeting(this: {name: string}){
        console.log(`Hello! My name is ${this.name}`);
    }
}

const Username = new Person('Json');
Username.greeting();
// console.log(Username);

const anotherUsername = {
    name: 'anotherJson',
    anotherGreeting: Username.greeting
}
anotherUsername.anotherGreeting();