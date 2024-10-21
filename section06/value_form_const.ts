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
