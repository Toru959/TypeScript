// アロー関数の構文
// アロー関数は式です、評価した結果が値になるものが式。関数名をつけるには、変数に代入します。
const increment5 = () => {};


// アロー関数の型注釈 ()や{return}を省略すると型注釈かけない
const increment6 = (num: number): number => { // 引数と戻り値の型注釈
    return num + 1;
}


// 関数の型の宣言
// 関数の型宣言とは、関数の実装を示さずに、関数のインターフェースを定義すること。

// 関数の型宣言構文
// 型エイリアス
type Increment7 = (num: number) => number;
// 定義した関数の型宣言は、アロー関数の型注釈に使用できる
const incrementBy7: Increment7 = (num: number) => {
    return num + 1;
};
// 関数式の型注釈にも使える
const incrementBy: Increment7 = function (num: number): number {
    return num + 1;
};
console.log(incrementBy7(10));

// 関数の型宣言を型注釈に使った場合、関数の実装側の引数と戻り値の型注釈は省略できる
const f1: Increment7 = (num: number): number => num + 1;
const f2: Increment7 = (num) => num + 1;

// メソッド構文による関数の型宣言
type Increment8 = {
    (num: number): number;
}

// 関数から関数の型を宣言する
// 関数の実装
function increment9(num: number): number{
    return num + 1;
};
// 関数の型を宣言する
type Increment9 = typeof increment9;
console.log(increment9(4));