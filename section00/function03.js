"use strict";
'型ガード関数';
'型ガードを使用することによってifのブロックで特定の型に絞る混むことができます。';
'TypeScriptにもともと用意されている型ガードとしてはtypeof, instanceofがありますが、これ以外にもユーザが独自に型ガードを定義できる';
'ユーザ定義の型ガード関数';
'ユーザ定義の型ガードを作るためにはtype predicateを使用します。Type predicateの宣言は戻り値がboolean型の関数に対して適応でき、戻り値の型の部分を次のように書き換える';
// function isDuck(animal: Animal): animal is Duck{
//     return animal instanceof Duck;
// }
'animal is Duckの部分がType predicateです。これで関数isDuck()がtrueを返す時のifのブロックの中ではanimalはDuck型として解釈されるようになります。';
'アサーション関数';
'ユーザ定義の型ガード関数として使われるのはType predicateがおもですが、Assertion functionという方法もあります。';
'Type predicateはboolean型の戻り値に対して使ったが、こちらは関数が例外を投げるかどうかで判断します。型ガード関数のページで作った関数isDuck()をAssertion functionsで書き換えると次のようになる';
// function isDuck(animal: Animal): asserts animal is Duck{
//     if(walksLikeDuck(animal)){
//         if(quacksLikeDuck(animal)){
//             return;
//         }
//     }
//     throw new Error("YOU ARE A FROG!!!");
// }
// ここではquacks()は存在しない。
// animal.quacks();
// isDuck(animal);
// animal.quacks();
