abstract class Person {
    static species = 'Homo sapiens';
    static isAdult(age: number){
        if(age > 17) return true;
        return false;
    }

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
        // Person.species;
        // Person.isAdult(99);
    }

    greeting(this:Person){
        console.log(`Hello! My name is ${this.name}`);
        console.log(`I am ${this.age} years old`);
        this.explainJob();
    }

    abstract explainJob(): void;
  
}

class Teacher extends Person {
    private static instance: Teacher;

    explainJob(){
        console.log(`I am a teacher and I teach ${this._subject}`);
    }
    // getter 何かデータを取得したときに何かの関数を実行する
    get subject(){
        if (!this._subject){
            throw new Error('There is no subject.');
        }
        return this._subject;
    }

    // setter 何かの値を変更したいときに
    set subject(value){
        if (!value){
            throw new Error('There is no value');
        }
        this._subject = value;
    }

    private constructor(name: string, age: number, private _subject: string){
        super(name, age);
    }

    greeting(){
        console.log(`Hello! My name is ${this.name}`);
        console.log(`I am ${this.age} years old`);
        console.log(`I teach ${this._subject}`);
    }

    static getInstance(){
        if(Teacher.instance){
            return Teacher.instance;   
        }
        Teacher.instance =  new Teacher('Eric', 43, 'Music');
        return Teacher.instance;
    }
}
const teacher = Teacher.getInstance();
const teacher2 = Teacher.getInstance();
console.log(teacher, teacher2);
// const teacher = new Teacher('Eric', 43, 'Music');
// teacher.subject = 'Guitar';
// teacher.explainJob();
// getterは関数だがプロパティのように扱える
// console.log(teacher.subject);

console.log(Person.species);
console.log(Person.isAdult(19));

console.log(Teacher.species);
console.log(Teacher.isAdult(19));


