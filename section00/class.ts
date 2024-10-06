'class'
'クラスはオブジェクトの雛形を定義したもので、javaScriptとTypeScriptではclass構文クラスを用いてクラスが定義できます。'
// class Person{};

'クラスに対してnewキーワードを使うと、オブジェクトを生成できます'
// const person = new Person();

'クラスの型注釈'
'TypeScriptでは、クラスを定義するとクラス名と同じ名前の方が同時に定義されます。'
'インスタンスを代入する変数に方注釈するには、クラス名を使います。'
// const person: Person = new Person();


'constructor'
'コンストラクタはクラスをnewしたときに実行される関数です。コンストラクタは、インスタンスプロパティの初期化する処理を実装する場所です。'
'JavaScriptのコンストラクタは、constructor構文で書きます。'
// class Person {
//     constructor(name){
//         // ...
//     }
// }

'コンストラクタの型注釈'
'TypeScriptでコンストラクタ引数の型注釈は、関数の型注釈のやり方と同じ'
// class Person {
//     constructor(name: string){
//         // ...
//     }
// }
'コンストラクタの戻り値は型注釈できません。コンストラクタの戻り値は、当然クラスのインスタンスなので、型注釈でコンパイラに教える必要がない'

'コンストラクタに引数を渡す'
'JavaScriptでコンストラクタに引数を渡す方法は、関数呼び出しの書き方とほぼ同じです。違いはnew演算子をつけることです。'
// new Person("Alice");

'field'
'JavaScriptでインスタンスにフィールドを持たせるには、インスタンス化したオブジェクトのプロパティに値を代入します。'
// class Person {}
// const alice = new Person();
// alice.name = "Alice";

'TypeScriptでは、これに加えてフィールドの型注釈を書く必要があ必要があります。'
// class Person {
//     name: string;
// }
// const alice = new Person();
// alice.name = "Alice";

'フィールドは宣言時に型を省略した場合でも、コンストラクタで値が代入される場合は、代入される値で型が推論されます。'
// class Person {
//     private name;

//     constructor(name: string){
//         this.name = name
//     }
// }

'コンストラクタを用いたフィールドの初期化'
'フィールドへの代入は、コンストラクタを用いて行えます。コンストラクタの中では、thisを用いて値を代入したいフィールドにアクセスします。'
// class Person{
//     name: string;

//     constructor(){
//         this.name = "Alice";
//     }
// }

'コンストラクタに引数を持たせれば、フィールドの値を動的に指定できるようにもできます。'
// class Person {
//     name: string;

//     constructor(personName: string){
//         this.name = personName;
//     }
// }
// const alice = new Person("Alice");

