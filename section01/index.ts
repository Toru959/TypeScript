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

// Union型 (複数の型)
let unionType: string | number = 10;
let unionTypes: (string | number)[] = [21, 'hello'];

// Literal型 (特定の値を取り扱う) enumよりシンプル
const apple: 'apple' = 'apple';
const A: 'A' = 'A';

let clothSize: 'small' | 'medium' | 'large' = 'large';
const cloth: {
    color: string,
    size: 'small' | 'medium' | 'large'
} = {
    color: 'white',
    size: 'medium'
}

// Typeエイリアス
type ClothSize = 'small' | 'medium' | 'large';
let clothSize2: ClothSize = 'large'
const cloth2: {
    color: string,
    size: ClothSize
} = {
    color: 'black',
    size: 'medium'
}

// 関数に型を付ける
function add(num1: number, num2: number): number {
    return num1 + num2
}

// 関数の戻り値にvoid型を使う方法
function sayHello():void {
    console.log('Hello');
}

console.log(sayHello());

// undefined型とnull型
let tmpUndefined: undefined = undefined;
let tmpNull: null = null;

// 関数型を使って、特定の関数のみを代入できる変数を作る
const anotherAdd: (num1: number, num2: number) => number = add;
const doubleNumber = (number: number):number => number * 2;

// コールバック関数の型の書き方
function doubleAndHandle(num: number, cb:(num: number) => number): void {
    const doubleNum = cb(num * 2);
    console.log(doubleNum);
}

doubleAndHandle(21, doubleNum => { return doubleNum });

// unknown型
let unknownInput: unknown;
let anyInput: any;
let text: string;
unknownInput = 'hello';
unknownInput = 21;
unknownInput = true;
text = anyInput;
if (typeof unknownInput === 'string'){
    text = unknownInput
}

// never型を使用して、起こり得ない値の型を使用する方法
function error(message: string): never {
    throw new Error(message);
}

console.log(error('This is an error'));