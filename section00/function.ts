// 関数宣言
function increment(num: number): number {
    return num + 1;
}

// returnが複数あり違いう型を返している場合
function getFirst(items: number[]){
    if(typeof items[0] === "number"){ // typeofは型を文字列として返す
        return items[0];
    }
    return null;
}

const answer = getFirst([1, 2, 3]);
console.log(answer);



// 関数式
// 関数式の構文は、関数宣言と同じ
// 関数宣言は分でしたが、関数式は式です。式とは、不要化した結果が値になるもをいいます。
// 関数式は値になるので、変数に直接代入できます。
//  const 変数名 = function 関数名(引数){
//     処理内容
//  };

// 関数式は、関数名を省略できます。名前がない関数なので、匿名関数や無名関数とも呼ばれる。
const 変数名 = function () {};
変数名(); // 呼び出し

// 関数宣言
function increment2(num: number){
    return num + 1;
}
// 関数式
const increment3 = function (num: number){
    return num + 1;
}
// 関数式を、オブジェクトのプロパティに直接代入
const addNumber = {
    add: function(){}
}
// 関数式は、別の関数の引数に直接渡す。
// button.addEventListener("click", function(event){
//     console.log("クリックされました");
// });


//関数式と型注釈
const increment4 = function(num: number){ // 引数の型注釈 省略するとany
    return num + 2;
};
// 関数型の変数に関数式を代入する場合は、引数の型注釈を省略しても、型推論が効きます。
type UseString = (value: string) => void;
let useString: UseString; // 関数型の変数
useString = function(value){}; // 関数型変数に関数式を代入
// 関数式は戻り値の型注釈もかける
const setZero = function(): number { // 戻り値の型ちゅ
    return 0;
}
// 戻り値の型注釈を省略した場合、型推論される
const getZero2 = function(){
    return 0;
};
const num = getZero2();


// 関数式の関数名
// function式に関数名を書いた場合、その関数名は関数の処理内部からのみ参照できます。これは再帰関数を書く時に活用されます。
const factorial = function fact(num: number): number{
    if (num <= 1) {
        return 1;
    }
    return num * fact(num - 1); // 関数名を使い再起呼び出し
};



