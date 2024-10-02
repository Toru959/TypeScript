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
'即時実行関数式';
'IIFEとは定義と同時に実行される関数です。デザインパターンの1種で、Self-Executing Anonymous Function; 自己実行匿名関数とも呼ばれる';
// (() => {
//     console.log("IIFE");
// })();
// const result1 = (function(arg: string){
//     console.log(`IIFE with args:${arg}`);
//     return "IIFE with args";
// })("hoge");
// const result2 = await(async () => {
//     console.log("async IIFE");
//     return "async IIFE";
// })();'
'TypeScriptでの利用シーン';
'ReactのuseEffectなど、非同期関数を受け取らない引数に非同期処理を渡したい場合';
'ReactのuseEffectなど、非同期関数を受け取らない引数に非同期処理を渡したい場合、即時実行関数を使用することで、非同期処理を弾きうすに渡すことができる';
// useEffect(() => {
//     (async () => {
//         const result = await fetch("https://hoge.com");
//         console.log(result);
//     })();
// }, []);
'ifやswitchなどを式として扱いたい場合';
'TypeScriptでのifやswitchは構文であり式でないため、判定結果を変数に代入することができせん。そのため、擬似的にifやswitchを式として扱うときにIIFEを使用できます。';
// const result = ((type: string) => {
//     if (type === "Apple"){
//         return "リンゴ";
//     } else if (type === "Orange"){
//         return "オレンジ";
//     } else {
//         return "謎の果物";
//     }
// })(fruit.type);
'スコープ内での変数汚染を防ぐ';
'汎用的な変数の場合、同じスコープ内で複数回使いまわしたい場合があるかと思います。';
'その際に、IIFEを利用することで変数名のスコープを限定し名前の重複を回避できます。';
// async function callApiAAndB(){
//     await (async() => {
//         const result = await fetch("api1");
//         if(result !== "OK"){
//             console.log(result);
//         }
//     })();
//     await (async () => {
//         const result = await fetch("api2");
//         if(result !== "Success"){
//             console.log(result);
//         }
//     })();
// }
