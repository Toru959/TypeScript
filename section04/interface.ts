interface Nameable {
    name: string;
}

//　オブジェクトのみのタイプエイリアス
// 変数のようにオブジェクトをまとめることで、使い回す時に便利
// interfaceを継承 interfaceの場合いくつも継承できる（classは１つだけ）
interface Human extends Nameable {
   readonly name: string,
   age: number,
   greeting(message: string): void,
}

class Developer implements Human, Nameable {
    constructor(public name: string, public age: number, public experience: number){}  
    greeting(message: string) {
        console.log(message);
    }  
}

const temDeveloper = {
    name: 'Jeff',
    age: 32,
    experience: 4,
    // greeting: (message: string) => void; 関数の型定義
    greeting(message: string){
        console.log(message)
    }
}
const user: Human = temDeveloper;
let developer = new Developer('Mark', 23, 5);
developer.name = 'Tom'
