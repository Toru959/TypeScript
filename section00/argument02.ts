'デフォルト引数'
'TypeScriptで、型注釈とデフォルト引数の両方を書く場合は、型注釈の方を先に書く'
// 関数宣言
function say(str: string = "Hello"){};
// アロー関数
const say2 = (str: string = "Hello") => {};

'JavaScriptのデフォルト引数は、デフォルト値を持たない引数の前に書くことができる'
// function foo(x, y = 2, z){
//     console.log(x. y, z);
// }
// foo(1, undefined, 3)

'JavaScriptのデフォルト値には式が書ける'
// function foo(x = 2 * 2){}
// function foo(x = parseInf("1.5")){}

'正し非同期処理は書けない'

'TypeScriptでは、デフォルト引数があると、引数の型推論が効きます。そのため、デフォルト引数が型注釈を両役することもできる。'


'残余引数/可変長引数'
'通常の関数は引数の数が決まっています。JavaScriptでは引数の数に決まりがない関数もつくれます。'
// function func(...params: (number | string)[]): void {
//     console.log(params);
// }
// func(1, 2, 3);

'普通の引数と残余引数を持つ関数も作れる'
// function func2(param1: number, ...params: (number | string)[]){
//     console.log(param1, params);
// }
// func(1, 2, 3);


'残余引数の型注釈'
'TypeScriptで残余引数に型注釈するには、配列の型を書きます。例えば、残暑引数がnumber型ならnumber[]とかく'
function func3(...params: number[]){}


'配列を残余引数として渡す'
'JavaScriptに組み込みのメソッドにMath.max()があります。これは、引数に与えられた数値の中から最大値を返します。この関数は残余関数を要求します'
Math.max(1, 10, 100);

'残余引数は、引数受け取り時には配列になりますが、関数呼び出しの時に一つの配列にまとめて渡せない'
const scores: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const highest = Math.max(scores);

'配列を余剰引数に渡す場合は、スプレッド構文を用います。スプレッド構文は...と書きます'
const scores2: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const highest = Math.max(...scores2);