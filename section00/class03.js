"use strict";
'constructor shorthand';
'メソッドの引数にはアクセス修飾子を設定することはできないがコンストラクタは特別です。';
class constructorInAccessModifier {
    arg1;
    arg2;
    arg3;
    constructor(arg0, arg1, arg2, arg3) {
        this.arg1 = arg1;
        this.arg2 = arg2;
        this.arg3 = arg3;
        console.log({ arg0, arg1, arg2, arg3 });
    }
}
class constructorOutAccessModifier {
    arg2;
    arg1;
    arg3;
    constructor(arg0, arg1, arg2, arg3) {
        this.arg1 = arg1;
        this.arg2 = arg2;
        this.arg3 = arg3;
        console.log({ arg0, arg1, arg2, arg3 });
    }
}
'TypeScriptで記述する際は、各アクセス修飾子のスコープ機能が有効になるため、インスタンスからのアクセスが可能なプロパティはpublic宣言されたものだけ';
'クラスのreadonly修飾子';
'TypeScriptではフィールドにreadonly修飾子をつけると、そのフィールドを読み取り専用にできる。';
'読み取り専用フィールドは、コンストラクタかフィールド初期化子でのみ値を代入できます。';
class Octopus {
    name;
    legs = 8; // フィールド初期化子での代入はOK
    constructor() {
        this.name = "たこちゃん"; // コンストラクタ―での代入はOK
    }
}
'読み取り専用フィールドは、再代入しようとするとコンパイルエラーになる';
const octopus = new Octopus();
// octopus.legs = 16; // Error
'メソッド内の処理であっても、読み取り専用フィールドへの再帰代入は許されない';
class Octopus2 {
    name = "たこちゃん";
    setName(newName) {
        // this.name = newName;  // Error
    }
}
'クラスはオブジェクト';
'JavaScriptのクラスの特徴は、クラスもオブジェクトの一種というところです。';
'JavaScriptのオブジェクトはプロパティの集合体です。クラスもオブジェクトなのでプロパティの集合体としての性質を持ちます。';
'したがって、定義したクラスはプロパティを追加したり、変更したりできます。';
// const myObject = {};
// myObject.key = "value"; // プロパティを追加
// class MyClass {};
// MyClass.key = "value"; // プロパティを追加
'一方、TypeScriptでは型安全のためにこうした動的な拡張ができないようになっています。';
// class MyClass {}
// MyClass.key = "value";
'静的フィールド (static field)';
'JavaやPHPには静的フィールド(static field)という概念があります。通常のフィールドはインスタンスのプロパティですが、静的フィールドはクラスのプロパティです。JavaやPHPではstaticキーワードで静的フィールドを宣言できます。';
'AJavaScriptにはJavaのような静的フィールドの機能がありません。代わりに、クラスのプロパティに後から値を代入することで似たようなことができます。';
// class SomeClass {}
// SomeClass.field = 123;
// console.log(SomeClass.field); // 123
'TypeScriptでは、Java風の静的フィールドの書き方ができるようになっています。TypeScriptで静的フィールドを宣言するにはstaticキーワードを用います。';
class SomeClass {
    static field = 123;
}
console.log(SomeClass.field); // 123
'静的フィールドの型推論';
'TypeScriptの静的フィールドは初期値がセットされている場合、その初期値からフィールドの型が型推論されます。そのため、フィールドの型注釈が省略できます。';
class SomeClass2 {
    static field = 123;
}
'静的フィールドとアクセス修飾子';
'TypeScriptの静的フィールドはアクセス修飾子を組み合わせられます。';
class SomeClass3 {
    static field;
}
'読み取り専用の静的フィールド';
'TypeScriptの静的フィールドはreadonly修飾子をつけると読み取り専用になります。';
class SomeClass4 {
    static field;
}
'静的メソッド(static method)';
'JavaやPHPには静的メソッドという概念があります。Rubyではクラスメソッドに相当します。通常のメソッドはインスタンスに属しますが、静的メソッドはクラスに属す';
'JavaScriptにはJavaのような静的メソッドの機能がありません。代わりに、くらすのプロパティに後から関数を代入することで、似たようなことができます。';
// class SomeClass5 {}
// SomeClass5.doSomething = function(){
//     // ...
// };
// SomeClass5.doSomething();
'TypeScriptでは、java風の静的メソッドの書き方ができるようになっています。';
class SomeClass6 {
    static doSomething() {
        // ...
    }
}
SomeClass6.doSomething();
'静的メソッドとアクセス修飾子';
'TypeScriptの静的メソッドはアクセス修飾子を組み合わせられます。';
class SomeClass7 {
    static doSomething() {
        // ...
    }
}
