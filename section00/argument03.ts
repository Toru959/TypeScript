'this引数'
'あろー関数以外の関数とクラスのメソッドの第一引数はthisという特殊な引数を受ける子ができます。'
'これは使用するコンテキストによってthisの意味するところが変わってしますため、これらがどのコンテキストで使用されるべきなのかをTypeScriptに使えるために使います。'
class Male {
    private name: string;

    public constructor(name: string){
        this.name = name;
    }

    public toString(): string{
        return `Monsieur ${this.name}`;
    }
}

class Female {
    private name: string;

    public constructor(name: string){
        this.name = name;
    }

    // Femaleはクラスですが、this: Femaleは、そのクラスから生成さらたインスタンスに対応します。
    // new Female("Maria")で生成されたインスタンスの型がFemaleです。thisは、そのインスタンスを指します。
    public toString(this: Female): string { 
        return `Madame ${this.name}`; 
    }
}

const male: Male = new Male("Frederic");
const female: Female = new Female("Maria");

male.toString(); // Monsieur Frederic
female.toString(); // Madame Maria

'各インスタンスのtoString()を変数に代入すると意味が変わる。'
'male.toString, female.toStringメソッドを直接maleToStr, femaleToStrに代入すると、メソッド内でのthis参照が途切れるためエラーが出る'
const maleToStr: () => string = male.toString;
const femaleToStr: (this: Female) => string = female.toString;

maleToStr(); 
// femaleToStr();


'分割代入引数'
'JavaScriptは分割代入構文は関数の引数も使えます。引数がオブジェクトや配列の場合、そのオブジェクトや配列の一部だけを関数で利用したい場合に、分割代入引数が便利'

'分割代入引数の構文'
'JavaScriptでは、オブジェクトの分割代入引数の構文は中括弧内に、オブジェクトのプロパティ名を書きます。引数名はプロパティ名と一致する必要があります。'
// function foo({ a, b }){
//     console.log(a, b);
// }
// foo({ a: 1, b: 2, c: 3}); // 1 2

'プロパティ名をべtの引数名で受け取るには, ：の後ろに引数名を指定する'
// function foo({a: x, b: y}){
//     console.log(x, y);
// }
// foo({a: 1, b: 2}); // 1 2

'配列の分割代入引数は、鉤括弧の中に配列要素を代入する変数名を書きます。配列要素に対応する引数名は自由に決められる'
// function bar([a, b]){
//     console.log(a, b);
// }
// bar([1, 2, 3]); // 1 2

'分割代入引数はアロー関数でも使用できる'
// const foo = ({a, b}) => {};
// const bar = ([a, b]) => {};


'分割代入引数の型注釈'
'TypeScriptでオブジェクトを分割代入する場合、分割代入引数の右にオブジェクトの型注釈を書きます'
function foo({a, b}: {a: number; b: number}){}

'配列を分割代入する場合も、分割代入引数の右に配列型の型注釈を書きます'
function bar([num1]: number[]){}


'既定値とコンパイルエラー'
'JavaScriptでは、分割代入引数に対応するオブジェクトプロパティや配列要素がはい場合、undefinedが代入される'
// function foo({ a }){
//     console.log(a);
// }
// function bar([ a ]){
//     console.log(a);
// }
// foo({}); // undefined
// bar([]); // undefined

'一方、typeScriptでは分割代入引数に対応するオブジェクトプロパティや配列要素がないと、コンパイルエラーになる'
// function foo({a}: {a: number}){}
// function bar([a]: [number]){}
// foo({}); // エラー
// bar([]); // エラー


'分割代入引数のデフォルト引数'
'JavaScriptで分割代入引数のデフォルト引数を指定する場合、引数名のあとに=と既定値を書きます。'
// function foo({ a = 0 }){
//     console.log(a);
// }
// function bar([ a = 0 ]){
//     console.log(a);
// }
// foo({}); // 0
// bar([]); // 0

'TypeScriptでフォルト引数を型注釈する場合、オブジェクトではプロパティを?でオプションにします。'
// function foo({ a = 0 }): { a?: number | string}){}


'分割代入引数の全体の既定値'
'分割代入引数の全体の既定値を指定する場合、分割代入構文の後に=既定値を書きます。この規定値は、引数全体が無い、または、undefinedの場合に採用されます。'
// function foo({a, b} = {a: 0, b: 0}){
//     console.log(a, b);
// }
// foo(); // 0 0
// foo({a: 1}); // 1 undefined

// function bar([a, b] = [0, 0]){
//     console.log(a, b);
// }
// bar(); // 0 0 
// bar([1]); // 1 undefined

'TypeScriptでは、引数全体の規定値は型注釈の後に書きます'
// function foo({ a }: { a?: number } = { a: 0 }){}

'各プロパティの既定値と引数全体の既定値の両方を指定することもできます。この場合、引数全体を省略すると、各プロパティの規定値が使われます'
// type Obj = { a?: number; b?: number};
// function foo({ a = 0, b = 0}: Obj = {}){
//     console.log(a + b);
// }
// foo(); // 0
// foo({}); // 0
// foo({ a: 1 }); // 1
// foo({ a: 1, b: 2 }); // 3


'呼び出し時のプロパティ名の省略'
'JavaScriptでは、分割代入引数の引数名と同じ変数が定義済みであれば、オブジェクトリテラエルのプロパティ名を省略し、変数だけ渡すことができます。'
function bmi({ height, weight }: { height: number, weight: number }){}
// プロパティメイト同じ変数
const height = 180;
const weight = 80;
// プロパティ名を省略しない呼び出し
bmi({ height: height, weight: weight});
// プロパティ名を省略した呼び出し
bmi({ weight, height});