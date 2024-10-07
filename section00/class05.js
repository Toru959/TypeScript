"use strict";
'クラスの継承 (inheritance)';
'JavaScriptのクラスも他のクラスを持つ言語と同じように、extendsキーワードで継承できます。';
class Parent {
}
class Child extends Parent {
}
'サブクラスにコンストラクタを書く場合、スーパークラスのコンストラクタは必ず呼び出す必要があります。';
'スーパークラスのコンストラクタはsuper()で呼び出します。';
class Parent2 {
}
class Child2 extends Parent2 {
    constructor() {
        super();
    }
}
'instanceof演算子';
'instanceof演算子は、特定のオブジェクトがクラスのインスタンスかをチェックするJavaScriptの演算子です。';
class ClassA {
}
class ClassB {
}
const a = new ClassA();
console.log(a instanceof ClassA); // true
console.log(a instanceof ClassB); // false
'継承とinstanceof';
'instanceofは継承関係をチェックすることもできます。たとえば、つぎのようにChildクラスのインスタンスがParentクラスのインスタンスかどうか確認できる';
class Parent3 {
}
class Child3 extends Parent3 {
}
const child = new Child3();
console.log(child instanceof Parent3); // true
'instanceofの反転';
'instanceof演算子の結果を反転させる場合は、値 instanceof クラス名の句全体をカッコで囲ったうえで、否定演算子を先頭につける';
// if (!(myInstance instanceof MyClass)){
//     // myInstanceがMyClassではないときの処理
// }
'抽象クラスとinstanceof';
'TypeScriptには抽象クラスがあります。instanceof演算子は抽象クラスについても使うことができます。';
class AbstraactClass {
}
class ConcreteClass extends AbstraactClass {
}
const obj = new ConcreteClass();
console.log(obj instanceof AbstraactClass); // true
