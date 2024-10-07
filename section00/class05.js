'クラスの継承 (inheritance)';
'JavaScriptのクラスも他のクラスを持つ言語と同じように、extendsキーワードで継承できます。';
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Parent = /** @class */ (function () {
    function Parent() {
    }
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Child;
}(Parent));
'サブクラスにコンストラクタを書く場合、スーパークラスのコンストラクタは必ず呼び出す必要があります。';
'スーパークラスのコンストラクタはsuper()で呼び出します。';
var Parent2 = /** @class */ (function () {
    function Parent2() {
    }
    return Parent2;
}());
var Child2 = /** @class */ (function (_super) {
    __extends(Child2, _super);
    function Child2() {
        return _super.call(this) || this;
    }
    return Child2;
}(Parent2));
'instanceof演算子';
'instanceof演算子は、特定のオブジェクトがクラスのインスタンスかをチェックするJavaScriptの演算子です。';
var ClassA = /** @class */ (function () {
    function ClassA() {
    }
    return ClassA;
}());
var ClassB = /** @class */ (function () {
    function ClassB() {
    }
    return ClassB;
}());
var a = new ClassA();
console.log(a instanceof ClassA); // true
console.log(a instanceof ClassB); // false
'継承とinstanceof';
'instanceofは継承関係をチェックすることもできます。たとえば、つぎのようにChildクラスのインスタンスがParentクラスのインスタンスかどうか確認できる';
var Parent3 = /** @class */ (function () {
    function Parent3() {
    }
    return Parent3;
}());
var Child3 = /** @class */ (function (_super) {
    __extends(Child3, _super);
    function Child3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Child3;
}(Parent3));
var child = new Child3();
console.log(child instanceof Parent3); // true
'instanceofの反転';
'instanceof演算子の結果を反転させる場合は、値 instanceof クラス名の句全体をカッコで囲ったうえで、否定演算子を先頭につける';
// if (!(myInstance instanceof MyClass)){
//     // myInstanceがMyClassではないときの処理
// }
'抽象クラスとinstanceof';
'TypeScriptには抽象クラスがあります。instanceof演算子は抽象クラスについても使うことができます。';
var AbstraactClass = /** @class */ (function () {
    function AbstraactClass() {
    }
    return AbstraactClass;
}());
var ConcreteClass = /** @class */ (function (_super) {
    __extends(ConcreteClass, _super);
    function ConcreteClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ConcreteClass;
}(AbstraactClass));
var obj = new ConcreteClass();
console.log(obj instanceof AbstraactClass); // true
'公称型クラス';
'TypeScriptでは、クラスに1つでも非パブリックなプロパティがあると、そのクラスだけ構造的部分型ではなく公称型(nominal typing)になります。';
'例えば、UserIdクラスとGroupIdクラスで同名になってしまっているidプロパティをプライベートにするだけで、相互の代入が不可能になります。';
var UserId = /** @class */ (function () {
    function UserId(id) {
        this.id = id;
    }
    return UserId;
}());
var GroupoId = /** @class */ (function () {
    function GroupoId(id) {
        this.id = id;
    }
    return GroupoId;
}());
// const userId: UserId = new GroupoId("...");
'この方法はフィールドに限らず、プライベートメソッドやprotectedプロパティでも同じ効果があります。';
'抽象クラス(abstract class)';
'JavaやPHPなどの言語では、abstract修飾子を使って抽象クラスを定義できます。抽象クラスは、直接インスタンスを作れないクラスのことです。';
'JavaScriptには抽象クラスを定義する構文はありません。TypeScriptにはabstract修飾子があり抽象クラスを表現できます。';
var Food = /** @class */ (function () {
    function Food(name, calorie) {
        this.name = name;
        this.calorie = calorie;
    }
    Food.prototype.showDebug = function () {
        console.log("name = ".concat(this.name));
        console.log("calorie = ".concat(this.calorie, "kcal"));
    };
    return Food;
}());
//  class Meat extends Food{};
'Foodクラスを抽象クラスに変更し、“要冷蔵”メソッドkeepRefrigerated()を抽象メソッドとして追加するとMeetクラスでエラーがでる。';
'これはMeetクラスにkeepRefrigeratedメソッドが実装されていないから';
'keepRefrigerated()メソッドを実装するとエラーがなくなる';
var Meat = /** @class */ (function (_super) {
    __extends(Meat, _super);
    function Meat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Meat.prototype.keepRefrigerated = function () {
        return true;
    };
    return Meat;
}(Food));
'JavaScriptへのコンパイルしたときに起こること';
'TypeScriptの抽象クラスは、JavaScriptにコンパイルしたとき、消されることなく残ります。何も中身がない抽象クラスを定義してコンパイルしてみるとどうなるか';
var AbstractClass = /** @class */ (function () {
    function AbstractClass() {
    }
    return AbstractClass;
}());
'TypeScript->JavaScript';
// class AbstraactClass {}
'このように、抽象クラスはabstract修飾子が外され、ただのクラスとしてコンパイルされます。';
'抽象メソッドは、コンパイル時に消されます。中身は残る';
