//　オブジェクトのみのタイプエイリアス
// 変数のようにオブジェクトをまとめることで、使い回す時に便利
interface Human {
    name: string;
    age: number;
    // greeting: (message: string) => void; 関数の型定義
    greeting(message: string): void;
}

const human: Human = {
    name: 'Jeff',
    age: 34,
    greeting(message: string){
        console.log(message);
    }
}

let developer: Human;