'number型'
'JavaScriptのnumber型は、1や-1などの整数と0.1などの少数を含めた数値の型です。PHPなどの言語では、数値について整数を表す型(int)と少数を表す型(fload, double)の2つの型を持ちます'
'Javaなどの言語では、整数型をさらに32ビットと64ビットに細分化する言語もあります。JavaScriptには、整数と少数を型レベルで区別するものはありません。どちらもnumber型で表現します。'
123
-123
20.123
0.1 === .1
5.0 === 5.

'number型の型注釈'
'TypeScriptでnumber型の型注釈'
const count1: number = 123;

'string型'
'Javクウォーとクウォールクウォートで文字列リテラル(String型)を表現し、シングルクウォートで文字リテラル(char型を表現するといったように、使うクウォート出方が変わります。)'
'一方JavaScriptでは、ダダブルクォートでもシングルクォートでもまったく同じstring型になります。この点はPHPと同様です。'
"hello";
'hello';
`hello`;

'文字列中に同じ引用符が含まれてい場合は。バックスラッシュでエスケープしなければなりません。'
'He said "madam, I\'m Adam."'
"He said \"madam, I'm Adam.\""

'文字列の型注釈'
'JavaScriptのstring型の型注釈はstringを用います'
const message: string = "hello";


'null型'
'JavaScriptのnullは値がないことを示す値です。'


'nullリテラル'
'JavaScriptのnullリテラルはnullです。'
const x = null;

'nullの型注釈'
'TyapeScriptでnull型を型注釈するにはnullを用います。'
const x2: null = null;

'Typeof演算子の注意点'
'JavaScriptには値の型を調べるtypeof演算子があります。nullに対してtypeofを用いると"object"が返るので注意が。必要です'
console.log(typeof null);


'undefined型'
'JavaScriptのundefinedは未定義を表すプリミティブな値です。変数に値がセットされていないとき、戻り値がない関数、オブジェクトに存在しないプロパティにアクセスしたとき、配列に存在しないインデックスでアクセスした時に現れる。'
let name2;
console.log(name2);

function func(){
    console.log(func());
}

// const obj2 = {};
// console.log(obj2.name2);

// const arr3 = [];
// console.log(arr3[1]);

'undefinedリテラル'
'JavaScriptでは同じプリミティブ型でも、boolean型やnumber型がリテラルがあるのに対し、undefinedにはリテラルはありません。'
'実はundefinedは変数です。グローバル定数のようなもとの理解してかまわない'

'undefinedの型注釈'
'TypeScriptでundefined型の型注釈を行うには、undefinedを用います。'
const x3: undefined = undefined;

'戻り値のない関数はundefinedになりますが、TypeScriptで戻り値無しを型注釈で表現する場合、undefinedではなくvoidをもちいます。'


'undefinedとnullの違い'
'多くのプログラミング言語で「値がない」を表現する方法は、nullなど1通りです。しかし、JavaScriptでは「値がない」に相当する表現にnullとundefinedの2通りがあります。他の言語からJavaScriptに来た人が驚き、使い分けに悩む部分です。ここでは、nullとundefinedの仕様上の違い、実際のコーディングでどう使い分けるべきかについて説明します。'

'意味合いの違い'
'undefinedとnullは大きなくくりで「値がない」ことを意味する点は共通しています。意味的な違いがあるとしたら、undefinedは「値が代入されていないため、値がない」、nullは「代入すべき値が存在しないため、値がない」という微妙な違いです。'
'この意味的な違いを厳密につきつめてコーディングするのは、入門者には難しいものです。使い分けに客観的な基準があるわけではないためです。もしどちらを使うべきか迷ったらundefinedを使っておくほうが無難です。'

'nullは自然発生しない'
'undefinedは言語仕様上、プログラマーが明示的に使わなくても、自然に発生してくるものです。たとえば、変数を宣言したときに初期値がなければJavaScriptはその変数にundefinedを代入します。'
let value;
console.log(value);

'オブジェクトに存在しないプロパティや配列にない要素にアクセスしたときも、自動的にundefinedになります。'
// const obj = {};
// console.log(obj.foo);

// const arr = [];
// console.log(arr[0]);

'戻り値がない関数の戻り値を取得したときもundefinedになります。'
// function func(){}
// console.log(func());

'一方、nullはプログラマーが意図的に使わない限り発生しません。JavaScriptとしてはnullを提供することがないということです。ただし、一部のDOM系のAPIはnullを返すこともあるため、ライブラリによってはnullと出会うことはあります。'

'undefinedとnullの使い分け'
'undefinedとnullをどう使い分けたらいいかは大きな論争を呼ぶテーマです。プログラマーの中には、undefinedだけを使うべきと言う人もいれば、nullを使うべきという人もいます。'
'また、undefinedとnullの意味合いの違いをしっかり理解して、使い分けるべきと主張する人もいます。逆に、深く考えすぎずに使うというスタンスの人もいます。'

'特にこだわりがないのなら、TypeScriptではnullは使わずにundefinedをもっぱら使うようにするのがお勧めです。とは言っても、nullを返すAPIがなくはないので、自分が新たにコードを書く部分においては、nullは使わずにundefinedにできるだけ寄せるといったイメージです。'

'使い分け意識を育てる労力は、それに見合うメリットが少ない'

'undefinedに統一するほうが簡単'
'「値がない」ことを意味するものがundefinedとnullの2種類あることが混乱の元なので、どちらか一方を使うようにするほうがコーディング上の意思決定を減らせます。なので、nullに寄せていく方法も考えられます。しかし、それはお勧めしません。undefinedはいたるところで自然に発生してくるので、それらをすべてnullにしようとすると、記述量がどんどん増えていくからで'

'symbol型 (シンボル型)'
'JavaScriptのsymbol型はプリミティブ型の一種で、その値が一意になる値です。boolean型やnumber型は値が同じであれば、等価比較がtrueになります。一方、シンボルはシンボル名が同じであっても、初期化した場所が違うとfalseになります。'
const s1 = Symbol("foo");
const s2 = Symbol("foo");
console.log(s1 === s1);
// 

'シンボルの型注釈'
'TypeScriptでシンボルの型注釈はsymbolを用います。'
const s: symbol = Symbol();

'symbol型を使う上での注意点'
'symbol型を直接JSON.stringify()に渡すとundefinedが返ります。'
console.log(JSON.stringify(Symbol("many")));

'また、symbol型をプロパティに含むオブジェクトをJSON.stringify()に渡すと、symbol型をプロパティに含むキーは消滅します。'
console.log(
    JSON.stringify({
        x: Symbol("many"),
        y: "hello",
    })
);

'様に、symbol型をキーに含むオブジェクトをJSON.stringify()に渡すと、symbol型のキーは消滅します。'
console.log(
    JSON.stringify({
        [Symbol("many")]: "hello",
        y: "hello",
    })
);

'型強制(type coercion)'
'JavaScriptにはデータ型がありますが、型が異なる2つの値に対し演算してもエラーにならない場合があります。'
'たとえば、string型の"1"からnumber型の1を減算した場合、number型の0が計算結果としてでてきます。'
// "1" - 1;

'これは型強制と呼ばれる仕組みがあるためです。型強制とは、型が異なる2つんお値を処理する時、暗黙的に別の型へ変換されることを言います。'
'上の例では文字列の1が数値の1に型強制されたうえで、-1が演算されたため0が健さん結果になるわけです。'

'ボックス化 (boxing)'
'多くの言語では、プリミティブは一般的にフィールドやメソッドを持ちません。プリミティブをオブジェクトのように扱うには、プリミティブをオブジェクトに変換する必要があります。プリミティブからオブジェクトへの変換をボックス化(boxing)と言います。'
// プリミティブ型
const str5 = "abc";
// ラッパーオブジェクトに入れる
const strObject = new String(str5);
// オブジェクトのように扱う
strObject.length; // フィールドの参照
strObject.toUpperCase(); // メソッド呼び出し
'上の例は、JavaScriptでボックス化のイメージを書いたものです。実際のコードでは、プリミティブ型をStringのようなラッパーオブジェクトにわざわざ入れる必要はありません。JavaScriptには自動ボックス化という仕組みがあるからです。'

'自動ボックス化'
'JavaScriptでは、プリミティブ型の値でもフィールドを参照できたり、メソッドが呼び出せます。'
const str4 = "abc";
// オブジェクトのように扱う
str4.length; // フィールドの参照
str4.toUpperCase(); // メソッド呼び出し
'プリミティブ型の値はオブジェクトではないため、このような操作ができるのは変です。ボックス化する必要があるように思えます。しかし、このようなことができるのは、JavaScriptが内部的にプリミティブ型の値をオブジェクトに変換しているからです。この暗黙の変換を自動ボックス化(auto-boxing)と呼びます。'

'リテラル型'
'TypeScriptではプリミティブ型の特定の値だけを代入可能にする型を表現できます。そのような型をリテラル型と呼びます。'
'例えば、次の例は数値が代入可能な型注釈です。数値であれば、1でも100でもなんでも代入できます。'
let x5: number;
x5 = 1;

'リテラル型を用いると、1だけが代入可能な型が作れます。'
let x6: 1;
x6 = 1;
// x6 = 100;  代入できない。

'リテラル型として表現できるもの'
'リテラル型として表現できるプリミティブ型はつぎのとおり'
'boolean型のtrueとfalse'
'number型の値'
'string型の文字列'
const isTrue: true = true;
const num2: 123 = 123;
const str: "foo" = "foo";

'リテラル型の用途'
'一般的にリテラル型はマジックナンバーやステートの表現に用いられます。その際、ユニオン型とb組み合わせることがおおい'
let num3: 1 | 2 | 3 = 1;

'any型'
'TypeScriptのany型は、どんな型でも代入できます。プリミティブ型であれオブジェクトであれ何を代入してもエラーにならない。'
let value2: any;
value2 = 1;
value2 = "string";
value2 = { name: "object"};

'また、any型の変数については、これ以上コンパイラーが型チェックを行いません。実行してみるとエラーになるようなコードでも、コンパイラーはその問題を指摘しない。'
'数値を変数strに代入しています。しかし、2行目のtoLowerCaseはstring型のメソッドでnumber型にはそんざいしないため、実行してみるとエラーになります。このような単純な矛盾はTypoeScriptコンパイラーではっけんできるが、型注釈でanyにした値についてはコンパイラーが警告しなくなる'
const str3: any = 234;
str3.toLowerCase(); // NO error

'沈黙のany'
'型を省略してコンテキストから型が推論できないとき、TypeScriptは暗黙的に型をany型として扱います。例えば、引数の型注釈を省略した場合です。'
'name変数がany型として判定されるため、型チャックは問題なく通ってしまいます。しかし、number型の値でtoUpperCace()のメソッドの呼び出しが実行されるため、未定義メソッドとしてエラーが発生します。'
// function hello2(name){ // error
//     console.log(`Hello, ${name.toUpperCase()}`);
// }
// hello2(1);

'このように暗黙のanyは型チェックをすり抜けて実行時エラーを引き起こす可能性があります。TypeScriptでは暗黙のanyを規制するオプションとしてnoImplicitAnyが用意されています。'
'tsconfig.jsonにてnoImplicitAny: trueを設定することで, TypeScriptが型をany型と推測した場合にエラーが発生するようになります。'
// function hello3(name){
//     console.log(`Hello ${name.toUpperCase()}`);
// }

