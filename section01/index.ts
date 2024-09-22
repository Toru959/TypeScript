// boolean
let hasValue: boolean = true;

// number
let count: number = 10;
let float: number = 3.14;
let negative: number = -0.12;

// string
let single: string = 'Hello';
let double: string = "Hello";
let back: string = `Hello`; 

//オブジェクトに型を付ける
const person: {
    name: string,
    age: number
} = {
    name: 'Jack',
    age: 21
}

console.log(person.name);

// 配列
const fruits: string[] = ['Apple', 'Banana', 'Grape'];
const fruits2: any[] = ['Apple', 'Banana', 'Grape', 1, 2];

// 型注釈、型推論
// name: string. age:number (型注釈)明示的
// name: 'Jack' age = 21 (型推論)明示的に型を提唱しなくても勝手に判断される

// Tuple型 決まった内容の配列を作る
const book: [string, number, boolean] = ['manga', 500, false];

// Enum 列挙型 (特定のまとまったグループのみを受け入れる)
enum CoffeeSize {
    SHORT = 'SHORT',
    TALL = 'TALL',
    GRANDE = 'GRANDE',
    VENTI = 'VENTI'
}

const coffee = {
    hot: true,
    size: CoffeeSize.TALL
}

coffee.size = CoffeeSize.GRANDE;

// any型
let anything: any = true;
anything = 'hello';
anything = ['hello', 123, true];
anything = {};
anything.abc = 'abc';
let banana = 'banana';
banana = anything;

