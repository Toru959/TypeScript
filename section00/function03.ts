'型ガード関数'
'型ガードを使用することによってifのブロックで特定の型に絞る混むことができます。'
'TypeScriptにもともと用意されている型ガードとしてはtypeof, instanceofがありますが、これ以外にもユーザが独自に型ガードを定義できる'

'ユーザ定義の型ガード関数'
'ユーザ定義の型ガードを作るためにはtype predicateを使用します。Type predicateの宣言は戻り値がboolean型の関数に対して適応でき、戻り値の型の部分を次のように書き換える'
// function isDuck(animal: Animal): animal is Duck{
//     return animal instanceof Duck;
// }

'animal is Duckの部分がType predicateです。これで関数isDuck()がtrueを返す時のifのブロックの中ではanimalはDuck型として解釈されるようになります。'
