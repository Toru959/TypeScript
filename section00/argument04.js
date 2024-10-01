"use strict";
'キーワード引数とOptions Objectパターン';
'JavaScriptやTypeScriptの関数には、Pythonにあるキーワード引数のような機能はありません。';
'その代わり、分割代入引数を応用することで、キーワード引数と同じようなことができます。';
'キーワード引数とは';
'キーワード引数は、Pythonの機能です。関数呼び出し時に、値だけを」指定するのではなく、引数名を使って「名前=値」の形式で引数を指定する方法です';
// #python
// def func(x, y, z):
//     print(x, y, z)
// func(x=1. y=2, z=3) // 1 2 3
// func(z=3, y=2, x=1) // 1 2 3
'Options Objectパターン';
'JavaScriptやTypeScriptにはキーワード引数ような言語仕様はありませんが、Options Objectパターンというデザインパターンで似たようなことができます。';
'Options Objectパターンは複数の一引数を受け取る代わりに、一つのオブジェクトを引数に受け取るように設計された関数を言います。';
// 位置引数の関数
// function normalFunc(x, y, z){
//     console.log(x, y, z);
// }
// オブジェクト一つだけを引数にもつ関数
// function func(options){
//     console.log(options.x, options.y, options.z);
// }
// func({ x: 1, y: 2, z: 3 }); // 1 2 3
'Options Objectパターンでは分割代入引数を応用すると、引数の部分をよりシンプルに書ける';
// function func({x, y, z}){
//     console.log(x, y, z);
// }
'Options Objectパターンの型注釈';
'TypeScriptでOptions Objectパターンを使うときは、引数の型注釈が必要になります。型注釈はオブジェクトの型を書きます。';
function func({ x, y, z }) { }
'オブジェクトの型の記述が長すぎる場合には、TypeScriptの型エイリアスを用いて、引数の型を分けて書くと可視性が高まります。';
function func({ x, y, z }) { }
'Options Objectパターンの利点';
'引数の値が何を指すのかわかりやすい';
'引数追加時に古いコードを壊さない';
'デフォルト引数が省略できる';
'引数の値が何を指すのかわかりやすい';
'位置引数3つ持つような関数の呼び出しコードはわかりにくさがあります。';
// findProducts(true, true, true);
'trueが3つ並んでいるが、それが何を指すのかは見ただけではわからない。それを知るには関数の実装を見に行かなくてはならない。';
'Options Objectパターンの場合、関数呼び出しコードを見ただけで、引数の意味が理解できます。';
// findProducts({ isSale: true, withDetails: true, freeShipping: true});
'引数追加時に古いコードを壊さない';
'位置引数の関数は変更に弱い側面がある。例えば、ユーザを検索する関数を実装したとする。最初の要件は国と都市でユーザを絞り込めること、そして、ユーザ属性でソートできることだとする。';
'その場合、次のようなコードを実装すでば要件ば満たせる';
// findUsers("JP", "Tokyo", "id", "asc");
'その後、年齢の範囲でも絞り込みたいという要望が出たとする。年練範囲を指定できる引数を追加する必要があります。';
'この場合2つの選択制がある。1つ目は、呼び出し側のコードを壊さないよう、引数の最後に返礼範囲を追加する';
// function findUsers(country, city, order, sort, ageMin, ageMax);
'2つ目は、呼び出し側のコードを壊す代わりに、引数の並びは綺麗に保つ方法です。';
// function findUsers(country, city, ageMin, ageMax, order, sort);
'Options Objectパターンを用いれば、呼び出しコードを壊さずに、追加引数を適切な位置に足せます。';
// findUsers({
//     country: "JP",
//     city: "Tokyo",
//     ageMin: 10,
//     ageMax: 20,
//     order: "id",
//     sort: "asc",
// });
'デフォルト引数が省略できる';
'位置引数を採用した関数では、場合によってはデフォルト引数が省略できません。例えば、デフォルト引数を持つ位置引数3つを持つ関数で、1番目を2番目をデフォルトにしたい場合、それぞれにundefinedを書く必要がります。';
// function findProducts(
//     isSale = false,
//     withDetails = false,
//     freeShipping = false
// ){
//     console.log(isSale, withDetails, freeShipping);
// }
// findProducts(undefined, undefined, true); // false, false, true
'Options Objectパターンを用いた場合は、デフォルトにしたい引数については何も書く必要はない';
// function findProducts({
//     isSale = false,
//     withDetails = false,
//     freeShipping = false,
// }) {
//     console.log(isSale, withDetails, freeShipping);
// }
// findProducts({ freeShipping: true }); // false false true
'引数名を変更する方法';
'位置引数の利点は引数名の変更に強いことです。関数呼び出し側を壊すことなく、関数宣言側の引数名を自由にお変更できます。';
// function func({ hoge: huga }){
//     console.log(hoge);
// }
// func({ hoge: 123 }); // 123
'デフォルト引数の型注釈';
'TypeScriptでOptions Objectにデフォルト引数を持たせたい場合は、引数名のところにデフォルト値を書いた上で、オブジェクトの型注釈にてオプションプロパティを指定する?を書きます';
// funcrtion func({ x, y = 0, z = 0}: {x: number, y?: number, z?: number}) {
//     console.log(x, y, z);
// }
// func({ x: 1, y: undefined }); // 1 0 0
'Options Object自体をオプショナルにする方法';
'TypeScriptでOptions Object自体を渡さなくても関数を呼び出せるようにするには、Options Objectのデフォルト値としてからのオブジェクト{}を指定するとできます';
// type Options = {
//     x?: number;
//     y?: number;
//     z?: number;
// };
// function func({ x = 0, y = 0, z = 0}: Options = {}){
//     console.log(x, y, z);
// }
// func(); // 0 0 0
