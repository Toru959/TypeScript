'値渡しと参照渡し'

'値渡しは、変数が関数に渡すタイミングで変数が別の変数にコピーされます。もともと同じ変数でも、関数の呼び出し元と関数の内部処理では独立した値になります。'
'そんため、関数の処理で引数に値を代入しても、関数呼び出し元の変数に影響しません。'
// C言語
// #include <stdio.h>
// void ChannelMergerNode(int n){
//     n = 2;
// }
// int main(){
//     int a = 1;
//     Change(a);
//     pringf("%d", a); // 1
// }

'参照渡しは、関数呼び出し元の変数が関数の処理でも共有されます。もし、関数の処理で引数に当たりを代入すると、関数呼び出し元の変数も変化します。'
// C言語
// #include <stdio.h>
// void ChannelMergerNode(int *n){ // aのアドレスを引数として受け取る
//     *n = 2; // aのアドレスに2を代入する。
// }
// int main(){
//     int a = 1;
//     ChannelMergerNode(&a); // aのアドレス
//     printf("%d", a); // aの値が2になる。
// }


'JavaScriptでは関数の引数はすべて値渡しになる。'
'ところが、オブジェクトについては少し特殊です。オブジェクトはどこでも参照になります。オブジェクトに別の変数名をつけても、オブジェクトが複製されて新たなオブジェクトができるのではなく、'
'異なる変数名同士で一つのオブジェクトを指すということです'
// const x = { n: 1 }
// const y = x;
// y.n = 2;
// console.log(x); // { n: 2}

'ただし、yに別の値を代入した場合は、x, yは共通のオブジェクトを参照しなくなり、yへの変更はxには影響しなくなる。'
// const x = { n: 1 };
// let y = x;
// y = { n: 2 }; // yに別のオブジェクトを再代入
// y.n = 3;
// console.log(x); // { n: 1 }
// console.log(y); // { n: 3 }

'共有されたオブジェクトはプロパティを変更した場合、他の変数にもその変更が影響します。この仕様は引数にも同じことが言えます。'
// function change(y){
//     y.n = 2;
// }
// const x = { n: 1};
// change(x);
// console.log(x); // { n: 2 }

'引数の場合も、変数の再代入の使用と同様に、yに別の値を代入した場合は、x, yは同じオブhジェクトを参照しなくなるため、yへの影響はxに影響しなくなる。'
// function change(y){
//     y = { n: 2};
//     y.n = 3;
//     console.log(y) // { n: 3 }
// }
// const x = { n: 1 };
// change(x);
// console.log(x); // { n: 1 }

'オブション引数'
'オブション引数とは、渡す引数を省略できるようにするTypeScript固有の機能です。オブション引数は疑問符?を引数名の後ろに書くことで表現します。'
// function hello(person?: string){}
// hello(); // 引数を省略して呼び出せる
// hello("alice"); // 省略しない呼び出しももちろんOK

'オブション引数の型は、型とundefinedのユニオン型になります。ユニオン型は日本語で言うと「いずれか」の意味です。'
'引数を省略し他場合、オプション引数の実行時の値はundefinedになります。'


'オブション引数の取り回し'
'オブション引数は、型が、undefinedとユニオン型になるため、そのままでは使用できない。'
// function hello(person?: string){
//     return "Hello" + person?.toUpperCase(); 
// }

'デフォルト値を代入する'
// function hello(person?: string){
//     if ( typeof person === "undefined"){
//         person = "anonymous";
//     }
//     return "Hello" + person.toUpperCase();
// }

'Null合体代入演算子??= でデフォルト値を代入する方法もある'
// function hello(person?: string){
//     person ??= "anonymous";
//     return "Hello" + person.toUpperCase(); 
// }

'デフォルト引数を指定することでも同じことができる。多くのケースではデフォルト引数を使う方がいい'
// function hello(person: string = "anonymous"){
//     return "Hello" + person.toUpperCase();
// }


'T | undefinedとの違い'
'オブション引数はユニオン型T | undefinedとして解釈されます。であれば、引数の型をT | undefinedとかけば同じなはず。なぜ?を使用するのか'
'これには呼び出す側で、引数を省略できるかどうかという違いが生まれます。オプション引数は引数自体を省略できますが、T | undefinedは省略できない'
// function hello(person: string | undefined){}
// hello(); // 引数がないためコンパイルエラー

'オプション引数の後に普通の引数は書けない'
'オプション引数は必ず最後に書かないといけない。コンパイルエラーになる'
// function func(foo?: string, bar: string)