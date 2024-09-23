"use strict";
// boolean
let hasValue = true;
// number
let count = 10;
let float = 3.14;
let negative = -0.12;
// string
let single = 'Hello';
let double = "Hello";
let back = `Hello`;
//オブジェクトに型を付ける
const person = {
    name: 'Jack',
    age: 21
};
console.log(person.name);
// 配列
const fruits = ['Apple', 'Banana', 'Grape'];
const fruits2 = ['Apple', 'Banana', 'Grape', 1, 2];
// 型注釈、型推論
// name: string. age:number (型注釈)明示的
// name: 'Jack' age = 21 (型推論)明示的に型を提唱しなくても勝手に判断される
// Tuple型 決まった内容の配列を作る
const book = ['manga', 500, false];
// Enum 列挙型 (特定のまとまったグループのみを受け入れる)
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["SHORT"] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
    CoffeeSize["GRANDE"] = "GRANDE";
    CoffeeSize["VENTI"] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
const coffee = {
    hot: true,
    size: CoffeeSize.TALL
};
coffee.size = CoffeeSize.GRANDE;
// any型
let anything = true;
anything = 'hello';
anything = ['hello', 123, true];
anything = {};
anything.abc = 'abc';
let banana = 'banana';
banana = anything;
// Union型 (複数の型)
let unionType = 10;
let unionTypes = [21, 'hello'];
// Literal型 (特定の値を取り扱う) enumよりシンプル
const apple = 'apple';
const A = 'A';
let clothSize = 'large';
const cloth = {
    color: 'white',
    size: 'medium'
};
let clothSize2 = 'large';
const cloth2 = {
    color: 'black',
    size: 'medium'
};
// 関数に型を付ける
function add(num1, num2) {
    return num1 + num2;
}
// 関数の戻り値にvoid型を使う方法
function sayHello() {
    console.log('Hello');
}
console.log(sayHello());
// undefined型とnull型
let tmpUndefined = undefined;
let tmpNull = null;
// 関数型を使って、特定の関数のみを代入できる変数を作る
const anotherAdd = add;
const doubleNumber = (number) => number * 2;
// コールバック関数の型の書き方
function doubleAndHandle(num, cb) {
    const doubleNum = cb(num * 2);
    console.log(doubleNum);
}
doubleAndHandle(21, doubleNum => { return doubleNum; });
// unknown型
let unknownInput;
let anyInput;
let text;
unknownInput = 'hello';
unknownInput = 21;
unknownInput = true;
text = anyInput;
if (typeof unknownInput === 'string') {
    text = unknownInput;
}
// never型を使用して、起こり得ない値の型を使用する方法
function error(message) {
    throw new Error(message);
}
console.log(error('This is an error'));
