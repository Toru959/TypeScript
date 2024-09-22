// boolean
var hasValue = true;
// number
var count = 10;
var float = 3.14;
var negative = -0.12;
// string
var single = 'Hello';
var double = "Hello";
var back = "Hello";
//オブジェクトに型を付ける
var person = {
    name: 'Jack',
    age: 21
};
console.log(person.name);
// 配列
var fruits = ['Apple', 'Banana', 'Grape'];
var fruits2 = ['Apple', 'Banana', 'Grape', 1, 2];
// 型注釈、型推論
// name: string. age:number (型注釈)明示的
// name: 'Jack' age = 21 (型推論)明示的に型を提唱しなくても勝手に判断される
// Tuple型 決まった内容の配列を作る
var book = ['manga', 500, false];
// Enum 列挙型 (特定のまとまったグループのみを受け入れる)
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["SHORT"] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
    CoffeeSize["GRANDE"] = "GRANDE";
    CoffeeSize["VENTI"] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
var coffee = {
    hot: true,
    size: CoffeeSize.TALL
};
coffee.size = CoffeeSize.GRANDE;
// any型
var anything = true;
anything = 'hello';
anything = ['hello', 123, true];
anything = {};
anything.abc = 'abc';
var banana = 'banana';
banana = anything;
// Union型 (複数の型)
var unionType = 10;
var unionTypes = [21, 'hello'];
// Literal型 (特定の値を取り扱う) enumよりシンプル
var apple = 'apple';
var A = 'A';
var clothSize = 'large';
var cloth = {
    color: 'white',
    size: 'medium'
};
var clothSize2 = 'large';
var cloth2 = {
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
var tmpUndefined = undefined;
var tmpNull = null;
// 関数型を使って、特定の関数のみを代入できる変数を作る
var anotherAdd = add;
var doubleNumber = function (number) { return number * 2; };
// コールバック関数の型の書き方
function doubleAndHandle(num, cb) {
    var doubleNum = cb(num * 2);
    console.log(doubleNum);
}
doubleAndHandle(21, function (doubleNum) { return doubleNum; });
// unknown型
var unknownInput;
var anyInput;
var text;
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
