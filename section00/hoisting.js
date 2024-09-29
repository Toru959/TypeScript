"use strict";
'関数宣言と巻き上げ(hoisting)';
'関数宣言には巻き上げがあり、関数式には巻き上げがない。';
'関数の定義前で関数を呼び出しているのにエラーにならない。';
// hello();
// function hello(){
//     console.log("Hello World!");
// };
'エラーになる';
// hello();
// const hello = function(){
//     console.log("Hello World!");
// }
"JavaScriptの関数は、関数宣言、関数式、アロー関数の3通りの方法で作れます。";
// thisの指すもの
"従来の関数では、変数thisの指すものが実行時の文脈で決まるという仕様があります。言い換えると、同じ関数であっても、";
"関数の予備う出し方や呼び出される環境によってthisが別のものを参照するようになります。";
// function showThis(){
//     console.log(this);
// }
" このshowThis関数を普通に実行した場合、thisが刺すのはグローバルオブジェクトです。グローバルオブジェクトとはブラウザでは";
" Windowオブジェクトです。Windowオブジェクトはページのサイズや URL、表示するHTML(DOM)などを操作するAPIエオ提供するオブジェクトです";
" 関数はオブジェクトのメソッドとして呼び出すこともできます。showThis関数をメソッド呼び出しした場合、thisがさす値はメソッドが紐づくオブジェクトになる";
// const foo = {
//     name: "Foo"
// };
// foo.showThis = showThis; // 関数をオブジェクトのメンバーにする
// foo.showThis();
// アロー関数のthisはレキシカルスコープで静的です。つまり定義した時にthisが刺すものが決定し、関数の呼び出し方に左右されない。
const oneSecond = 1000;
const timer = {
    message: "時間です！",
    start: function () {
        console.log(this); // このthisはtimerを指す
        // 従来の関数
        // setTimeout(function(){
        //     console.log(this.message); // このthisはWindowを指すため、undefined
        // }, oneSecond);
        // アロー関数
        setTimeout(() => {
            console.log(this.message); // このthisはtimerを指す
        }, oneSecond);
    }
};
timer.start();
'アロー関数は、従来の関数にあった危険な使用が改善されている';
'JavaScriptの従来の関数は、引数名の重複が許される。引数が重複した場合、最後の引数に渡された値が採用される。';
// function foo(a, a, a){
//     console.log(a);
// }
// foo(1, 2, 3);
// function foo(a, a) => {} アロー関数ではエラーになる
'アロー関数はコールバック関数と相性がいい。';
const nums = [1, 2, 3, 4];
const even = nums.filter(function (n) {
    return n % 2 === 0;
});
console.log(even);
const nums2 = [1, 2, 3, 4];
const even2 = nums2.filter(n => n % 2 === 0);
console.log(even);
'処理の中でクリックされたボタンを参照する場合';
// <button id="save">保存</button>
// <script>
//     const button = document.getElementById('save');
//     button.addEventListener("click", function(){
//         this.innerText = "保存中...";
//     });
// </script>
'アロー関数でもbuttonを参照すれば大丈夫';
// <button id="save">保存</button>
// <script>
//     const button = document.getElementById('save');
//     button.addEventListener("click", function(){
//         button.innerText = "保存中...";
//     });
// </script>
'オブジェクトのメソッドとして関数を作る場合は、従来の関数を選ぶ理由になります。thisでオブジェクトを参照できるからです。';
'例えば、fullName1メソッドのように、メソッドでオブジェクトのプロパティを用いる場合、thisで参照するのが便利です。';
const toroYamada = {
    firstName: "Taro",
    lastName: "Yamada",
    // 従来の関数
    fullName1: function () {
        return this.firstName + " " + this.lastName;
    },
    // アロー関数
    fullName2: () => {
        // return this.firstName + " " + this.lastName;
    },
};
console.log(toroYamada.fullName1()); // 正常に機能する
console.log(toroYamada.fullName2()); // undefined
'アロー関数を用いたfullName2はthisがオブジェクトを指さないため、期待通りの動作になりません。';
'もし、アロー関数を使う場合は、thisではなくtaroYamada.firstNameのようにオブジェクトの変数名を参照する必要がある。';
const taroYamada = {
    firstName: "Taro",
    lastName: "Yamada",
    fullName: () => {
        return taroYamada.firstName + " " + toroYamada.lastName;
    }
};
console.log(taroYamada.fullName());
