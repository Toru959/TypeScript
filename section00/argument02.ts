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
