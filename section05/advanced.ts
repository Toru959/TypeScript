type Engineer = {
    name: string,
    role: string,
}

type Blogger = {
    name: string,
    follower: number,
}

type EngineerBlogger = Engineer & Blogger;
const John: EngineerBlogger = {
    name: 'John',
    role: 'front-end',
    follower: 200
}

interface Engineer2 {
    name: string,
    role: string
}

interface Blogger2 {
    name: string,
    follower: number,
}

interface EngineerBlogger2 extends Engineer2, Blogger2 {
    name: 'Eric',
    role: 'Back-end',
    follower: 90
}

type NumberBoolean = number | boolean;
type StringNumber = string | number;
type Mix = NumberBoolean & StringNumber;


// 型を絞り込む方法　タイプガード
//typeof
function toUpperCase(x: string): string; // 関数オーバーロード
function toUpperCase(x: number): number;
function toUpperCase(x: string | number){
    if (typeof x === 'string'){
        return x.toUpperCase();
    } 

    return x;
}

const upperHello = toUpperCase('hello');

// in演算子
type NomadWorker = Engineer | Blogger;
function describeProfile(nomadWorker: NomadWorker){
    console.log(nomadWorker.name);
    if ('role' in nomadWorker){
        console.log(nomadWorker.role);
    }
    if('follower' in nomadWorker){
        console.log(nomadWorker.follower);
    }
}

class Dog {
    kind: 'dog' = 'dog'; //  tag
    speak(){
        console.log('bow-bow');
    }
}

class Bird {
    kind: 'bird' = 'bird'; // tag
    speak(){
        console.log('tweet-tweet');
    }
    fly(){
        console.log('flutter');
    }
}

// instanceof
type Pet = Dog | Bird;
function havePet(pet: Pet){
    pet.speak(); 
    switch (pet.kind){
        case 'bird':
            pet.fly();
        case 'dog':
            pet.speak();
    }
    if (pet instanceof Bird){
        pet.fly();
    }
}

havePet(new Bird());
havePet(new Dog());

// 型アサーション
const input = <HTMLInputElement>document.getElementById('input');
// const input = document.getElementById('input') as HTMLInputElement;
input.value = 'initial input value';

interface Designer {
    name: string;
    age: string; 
    [index: string]: string; // 全てstringの型になる
}
const designer: Designer = {
    name: 'John',
    role: 'web',
    age: '24'
}

