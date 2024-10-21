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
'「値がない」ことを意味するものがundefinedとnullの2種類あることが混乱の元なので、どちらか一方を使うようにするほうがコーディング上の意思決定を減らせます。なので、nullに寄せていく方法も考えられます。しかし、それはお勧めしません。undefinedはいたるところで自然に発生してくるので、それらをすべてnullにしようとすると、記述量がどんどん増えていくからです。'