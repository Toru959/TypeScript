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

'instanceof演算子'
'instanceof演算子は、特定のオブジェクトがクラスのインスタンスかをチェックするJavaScriptの演算子です。'
class ClassA {}
class ClassB {}
const a = new ClassA();
console.log(a instanceof ClassA); // true
console.log(a instanceof ClassB); // false

'継承とinstanceof'
'instanceofは継承関係をチェックすることもできます。たとえば、つぎのようにChildクラスのインスタンスがParentクラスのインスタンスかどうか確認できる'
class Parent3 {}
class Child3 extends Parent3{}
const child = new Child3();
console.log(child instanceof Parent3); // true

'instanceofの反転'
'instanceof演算子の結果を反転させる場合は、値 instanceof クラス名の句全体をカッコで囲ったうえで、否定演算子を先頭につける'
// if (!(myInstance instanceof MyClass)){
//     // myInstanceがMyClassではないときの処理
// }

'抽象クラスとinstanceof'
'TypeScriptには抽象クラスがあります。instanceof演算子は抽象クラスについても使うことができます。'
abstract class AbstraactClass {}
class ConcreteClass extends AbstraactClass{}
const obj = new ConcreteClass();
console.log(obj instanceof AbstraactClass); // true

'公称型クラス'
'TypeScriptでは、クラスに1つでも非パブリックなプロパティがあると、そのクラスだけ構造的部分型ではなく公称型(nominal typing)になります。'
'例えば、UserIdクラスとGroupIdクラスで同名になってしまっているidプロパティをプライベートにするだけで、相互の代入が不可能になります。'
class UserId {
    private readonly id: string;

    constructor(id: string){
        this.id = id;
    }
}

class GroupoId {
    private readonly id: string;

    constructor(id: string){
        this.id = id;
    }
}

// const userId: UserId = new GroupoId("...");

'この方法はフィールドに限らず、プライベートメソッドやprotectedプロパティでも同じ効果があります。'

'抽象クラス(abstract class)'
'JavaやPHPなどの言語では、abstract修飾子を使って抽象クラスを定義できます。抽象クラスは、直接インスタンスを作れないクラスのことです。'
'JavaScriptには抽象クラスを定義する構文はありません。TypeScriptにはabstract修飾子があり抽象クラスを表現できます。'
abstract class Food {
    constructor(protected name: string, protected calorie: number){}
    showDebug(){
        console.log(`name = ${this.name}`);
        console.log(`calorie = ${this.calorie}kcal`);
    }
    abstract keepRefrigerated(): Boolean;
}
//  class Meat extends Food{};
'Foodクラスを抽象クラスに変更し、“要冷蔵”メソッドkeepRefrigerated()を抽象メソッドとして追加するとMeetクラスでエラーがでる。'
'これはMeetクラスにkeepRefrigeratedメソッドが実装されていないから'

'keepRefrigerated()メソッドを実装するとエラーがなくなる'
class Meat extends Food{
    keepRefrigerated(): Boolean {
        return true;
    }
}


'JavaScriptへのコンパイルしたときに起こること'
'TypeScriptの抽象クラスは、JavaScriptにコンパイルしたとき、消されることなく残ります。何も中身がない抽象クラスを定義してコンパイルしてみるとどうなるか'
abstract class AbstractClass {}

'TypeScript->JavaScript'
// class AbstraactClass {}

'このように、抽象クラスはabstract修飾子が外され、ただのクラスとしてコンパイルされます。'
'抽象メソッドは、コンパイル時に消されます。中身は残る'
