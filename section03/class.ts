class Person {

    readonly id: number = 1;

    // privateはクラス内では読み書きできる。
    // readonlyはクラス内外でも読み取りだけ
    constructor(public readonly name: string, protected age: number){
        // this.name = "Tom"
        // this.age = 31;
        this.id = 2;
        this.id = 3;
    }

    incrementAge(){
        this.age += 1;
        // this.id = 2;
    }

    greeting(this:Person){
        console.log(`Hello! My name is ${this.name}`);
        console.log(`I am ${this.age} years old`);
    }
}

class Teacher extends Person {
    constructor(name: string, age: number, public subject: string){
        super(name, age);
    }

    greeting(){
        console.log(`Hello! My name is ${this.name}`);
        console.log(`I am ${this.age} years old`);
        console.log(`I teach ${this.subject}`);
    }
}

const teacher = new Teacher('Eric', 43, 'Music');
console.log(teacher.greeting());

