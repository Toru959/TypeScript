"use strict";
'コールバック関数';
'コールバック関数とは、関数の引数として渡される関数です。関数の中で引数で指定した関数を呼び出すことで関数の振る舞いを制御したり、非同期な結果を受け取ることができます。';
'コールバック関数の使い方';
'コールバック関数はある関数の振る舞いの一部を外部から制御したいときに利用できます。';
// function greeNewUser(func: (name: string) => {
//     console.log(func("ご新規"));
// });
// function hello(name: string){
//     return `こんにちは！${name}さん！！`;
// };
// function goodMorning(name: string){
//     return `おはようございます！${name}さん!`;
// }
// // こんにちは！ご新規さん
// greeNewUser(hello);
// // おはようございます！ご新規さん！
// greeNewUser(goodMorning);
'非同期な結果の受け取り';
'コールバック関数は非同期な関数の結果を受け取って処理したい場合にも利用できる';
// import js from "js";
// fs.readFile("./user.txt", "utf-8", (err, data) => {
//     if (err){
//         console.error(err);
//     }
//     console.log(data);
// });
'コールバック関数地獄';
'コールバック関数の中でコールバック関数を呼び出すことで、ネストが深くなり、コードが読みづらくなる';
// import fs from "fs";
// fs.readFile("./a.txt", "utf-8", (err, data) => {
//     fs.readFile(data, "utf-8", (err, data) => {
//         fs.readFile(data, (err, data) => {
//             console.log(data);
//         });
//     });
// });
'このような場合には、コールバック関数を使用せずにPromiseを利用することができます。';
// import { promises as fs } from "fs";
// fs.readFile("a.txt", "utf-8")
//     .then((data) => fs.readFile(data, "utf-8"))
//     .then((data) => fs.readFile(data, "utf-8"))
//     .then((data) => console.log(data))
'コールバック関数の型定義';
'コールバック関数の型は(arg: [引数の型]) => [戻り値の型]と記述します。';
'コールバック関数はただの関数なので、引数の方として関数の型宣言をしているだけです。';
function greetNewUser(func) {
    console.log(func("ご新規さん"));
}
'同期型と非同期型';
'同期型のコールバック関数は同期的にすぐに呼ばれるコールバック関数です。';
const numbers = [1, 2, 3];
const doubles = numbers.map((n) => {
    return n * 2;
});
console.log(doubles); // 2, 4, 6
'非同期型のコールバック関数';
'非同期型のコールバック関数はAPIリクエストなど非同期に呼ばれるコールバック関数です。';
setTimeout(() => {
    console.log("This is callback function!");
}, 1000);
console.log("hello");
