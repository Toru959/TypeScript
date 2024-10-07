'クラスの継承 (inheritance)'
'JavaScriptのクラスも他のクラスを持つ言語と同じように、extendsキーワードで継承できます。'
class Parent {}
class Child extends Parent{}

'サブクラスにコンストラクタを書く場合、スーパークラスのコンストラクタは必ず呼び出す必要があります。'
'スーパークラスのコンストラクタはsuper()で呼び出します。'
class Parent2 {}
class Child2 extends Parent2{
    constructor(){
        super();
    }
}

