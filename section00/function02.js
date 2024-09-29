"use strict";
'関数は値';
'JavaScriptの関数は値です。関数を変数に代入することができます。';
// function hello(){}
//     return "hello world";
// }
// const helloWorld = hello; //  関数を変数に代入
// helloWorld(); // 問題なく関数を呼び出せる
'JavaScriptでは定義済みの関数と同じ名前の関数を宣言することができます。';
'これはエラーにならない。実質、再代入のような振る舞いになる';
// function hello(){
//     return "Hello";
// }
// function hello(){
//     return "KONNICHIWA";
// }
// hello();
'JavaScriptで関数の再代入によるバグを未然に回避したい場合は、constと関数を組み合わせる';
// const hello = function(){
//     return "Hello";
// }
'関数のスコープ';
'関数は値なので、関数名のスコープも変数と同じようにスコープの概念があります。';
'関数スコープの中で定義された関数は、そのローカルスコープでのみ使うことができます。';
function main() {
    //  ローカルスコープの関数
    function hello() {
        console.log("hello");
    }
    hello();
}
main();
// ローカルスコープで宣言された関数にはアクセスできない
// hello();
'関数はオブジェクト';
'JavaScriptの関数はオブジェクトです。したがって、関数にプロパティを持たせることができます。';
// function hello(){
//     return "Hello World";
// }
// hello.prop = 123 ;
