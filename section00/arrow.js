"use strict";
// アロー関数の構文
// アロー関数は式です、評価した結果が値になるものが式。関数名をつけるには、変数に代入します。
const increment5 = () => { };
// アロー関数の型注釈 ()や{return}を省略すると型注釈かけない
const increment6 = (num) => {
    return num + 1;
};
// 定義した関数の型宣言は、アロー関数の型注釈に使用できる
const incrementBy7 = (num) => {
    return num + 1;
};
// 関数式の型注釈にも使える
const incrementBy = function (num) {
    return num + 1;
};
console.log(incrementBy7(10));
// 関数の型宣言を型注釈に使った場合、関数の実装側の引数と戻り値の型注釈は省略できる
const f1 = (num) => num + 1;
const f2 = (num) => num + 1;
// 関数から関数の型を宣言する
// 関数の実装
function increment9(num) {
    return num + 1;
}
;
console.log(increment9(4));
