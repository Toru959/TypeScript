'オーバーロード関数'
'オーバーロード関数は、TypeScriptの機能で、一つの関数に異なる関数シグネチャを複数持つ関数です。'
'関数シグネチャとは、どのような引数を取るか、どのような戻り値を返すかといった関数の型のことです。'

// 関数シグネチャ部分
// function hello(person: string): void; // シグネチャ1
// function hello(person: string[]): void; // シグネチャ2
// // 関数の実装部分
// function hello(person: string | string[]): void{
//     if(typeof === 'string'){
//         console.log(`Hello ${person}`);
//     } else {
//         console.log(`Hello ${person.join(",")}`);
//     }
// }
'関数シグネチャの部分は、オーバロードのパターン数だけ複数書きます。この部分はインターフェースを定義するところなので、ボディはかけない'
'関数シグネチャと実装部分の関数名は同じにする必要があります。'


'オーバーロード関数のコンパイル結果'
'オーバーロード関数はTypeScriptからJavaScriptにコンパイルすると、関数シグネチャ部分と型注釈が消される'
// function hello(person){
//     if(typeof person === "string"){
//         console.log(`Hello ${person}`);
//     } else {
//         console.log(`Hello ${person.join(",")}`);
//     }
// }


'アロー関数とオーバーロード'
'オーバーロード関数の構文が用意されているのは関数宣言だけです。アロー関数にはオーバードロードの構文がありません。'
'アロー関数でオーバーロード関数を作るには、関数呼び出しシグネチャで型注釈する必要があります。'
// 関数呼び出しシグネチャでHello型を定義
// type Hello = {
//     (person: string): void;
//     (person: string[]): void;
// };
// // Hello型で型注釈
// const hello: Hello = (person: string | string[]): void => {
//     if(typeof person === "string"){
//         console.log(`Hello ${person}`);
//     } else {
//         console.log(`Hello ${person.join(",")}`);
//     }
// };


'関数シグネチャは詳しい順に書く'
'オーバーロードの関数シグネチャは順番が重要になる。typeScriptは関数シグネチャを上から順にためしていき、最初にマッチしたシグネチャを採用する。'
'より詳しい関数シグネチャが上に、詳しくないものが下に来るように書き並べなければならない。'
// function func(pram: 1 | 2): 1 | 2; // 詳しい関数
// function func(pram: number): number; // そこそこ詳しい関数
// function func(pram: any): any; // 詳しくない関数

// const result1 = func(1);
// const result2 = func(100);
// const result3 = func("others");


'オーバーロード以外も検討しよう'
'引数の数が違うだけの場合、オーバーロードよりオプション引数を使った方がいい。'
// function func(one: number): void;
// function func(one: number, two: number): void;
// function func(one: number, two?: number): void{}
// func(1, undefined);

// function func(one: number, two?: number): void{}
// func(1, undefined);

'引数の方だけが異なる場合はユニオン型を使った方がシンプル'
// function func(x: string): void;
// function func(x: string): void;
// function func(x: string | number){}

// function func(x: string | number){}

'引数の型と戻り値の型に一定の対応関係がある場合は、ジェネリクスを使った方がシンプルになる'
// function func(x: boolean): boolean;
// function func(x: number): number;
// function func(x: string): string;
// function func(x: boolean | string | number): boolean | string | number{
//     return x;
// }

// function func<T extends boolean | number | string>(x: T): T {
//     return x;
// }