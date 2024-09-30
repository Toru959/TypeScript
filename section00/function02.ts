'関数は値'
'JavaScriptの関数は値です。関数を変数に代入することができます。'

// function hello(){}
//     return "hello world";
// }

// const helloWorld = hello; //  関数を変数に代入
// helloWorld(); // 問題なく関数を呼び出せる

'JavaScriptでは定義済みの関数と同じ名前の関数を宣言することができます。'
'これはエラーにならない。実質、再代入のような振る舞いになる'
// function hello(){
//     return "Hello";
// }

// function hello(){
//     return "KONNICHIWA";
// }

// hello();

'JavaScriptで関数の再代入によるバグを未然に回避したい場合は、constと関数を組み合わせる'
// const hello = function(){
//     return "Hello";
// }


'関数のスコープ'
'関数は値なので、関数名のスコープも変数と同じようにスコープの概念があります。'
'関数スコープの中で定義された関数は、そのローカルスコープでのみ使うことができます。'
function main(){
    //  ローカルスコープの関数
    function hello(){
        console.log("hello");
    }

    hello();
}

main();
// ローカルスコープで宣言された関数にはアクセスできない
// hello();


'関数はオブジェクト'
'JavaScriptの関数はオブジェクトです。したがって、関数にプロパティを持たせることができます。'
// function hello(){
//     return "Hello World";
// }
// hello.prop = 123 ;

'関数の引数'
'JavaScriptの関数では、関数が期待する引数の個数と、関数を呼び出した際に渡した数が一致していなくても、関数が呼び出せます。'
'つまり、JavaScriptは引数のチェックを行わないということです。'
// function increment10(num){
//     return num + 1;
// }
// increment10(1, 2)

'逆にJavaScriptでは、引数が少ない場合であっても関数が実行されます。その際、渡されなかった引数の値はundefinedになる。'
// function foo(a, b){
//     console.log(b);
// }
// foo(1); // 引数が足りない

'基本的に引数が多く渡される分には、関数の実行が問題になることはない。余分な引数は無視して仕舞えばいいからです。'
'TypeScriptでは関数の引数の数が一致していないとコンパイルエラーになります。'


'引数の型'
'JavaScriptは、引数の型についてもチェックしない。関数の実行自体は行われ、nullに存在しないlengthプロパティへの参照を試みる段階でエラーが出る。'
// function len(str){
//     return str.length;
// }
// console.log(len(null));

'引数の型を厳密にする場合、チェック処理を書く必要があります。'
// function len(str){
//     if (typeof str !== "string"){
//         throw new Error("strは文字列型にしてください");
//     }
//     return str.length;
// }
// len("a"); // OK
// len(1); // エラー