'インターフェース (interface)'
'インターフェースはクラスが実装すべきフィールドやメソッドを定義した型です。クラスはインターフェースを実装することで、インターフェースが求めるメソッド名や引数の型に則っているかをチェックすることができます。'

'JavaやPHPなどの言語では、インターフェースが定義できますが、JavaScriptにはそれに相当する構文がありません。一方、TypeScriptにはインターフェースがあります。'

'TypeScriptで定義されたインターフェースは、コンパイルチェックに活用された後、JavaScriptコードを生成する過程で消されるため、インターフェースがJavaScript実行時に影響することはありません。'

'インターフェースを定義する'
'TypeScriptではinterfaceキーワードでインターフェースを定義できます。'
interface SomeInterface {
  method1(): void;
  method2(arg: string): void;
}

'TypeScriptではメソッドだけでなく、パブリックフィールドも定義できます。'
interface SomeInterface {
  field: string;
}

'インターフェースと構造的部分型'
'Javaなどのオブジェクト指向言語ではクラスの抽象的な型定義として利用されます。そのため、インターフェース単体では利用されず、特定のクラスがインターフェースを継承し実装を追加することで初めて効果を発揮します。'

'TypeScriptでもインターフェースをクラスに実装させることはできますが、それに加えて、TypeScriptは構造的部分型なので、インターフェースと実装関係がないオブジェクトの型注釈としても利用できます。'
// interface Person {
//   name2: string;
//   age2: number;
// }

// const taro: Person = {
//   name: "太郎",
//   age: 12,
// };


'インターフェースを実装する'
'TypeScriptでは、クラスがインターフェースを実装できます。実装するにはinplementsキーワードを用います。'
// interface Human {
//   think(): void;
// }

// class Developer implements Human {
//   think(): void {
//     console.log("どういう実装にしようかなー");
//   }
// }

'インターフェースを複数してすることもできます。そのときは、でインターフェースを区切り列挙します。'
// interface Human {
//   think(): void;
// }

// interface Programmer {
//   writeCode(): void;
// }

// class TypeScriptProgrammer implements Human, Programmer{
//   think(): void{
//     console.log("どういうコードにしようかな");
//   }
//   writeCode(): void{
//     console.log("カタカタ");
//   }
// }

'インターフェースで定義されたフィールドをクラスで実装するには、クラス側にはフィールドを定義します。'
// interface Human {
//   name: string;
// }

// class Developer implements Human {
//   name: string = "Bob";
// }


'interfaceのreadonly修飾子'
// 'TypeScriptのインターフェースでは、フィールドにreadonly修飾子をつけることで読み取り専用のフィールドが定義できます。'
// interface SomeInterface {
//   readonly field: number;
// }