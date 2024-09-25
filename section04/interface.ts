//　オブジェクトのみのタイプエイリアス
// 変数のようにオブジェクトをまとめることで、使い回す時に便利
interface Human {
   name: string,
   age: number,
   greeting(message: string): void,
}

class Developer implements Human{
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
