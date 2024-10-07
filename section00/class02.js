'アクセス修飾子 (access modifier)';
'JavaやPHPなどの言語では、フィールドやメソッドにprivate, protected, publicを指定できます。JavaScriptでもprivateのようなプロパティを実現するためにプライベートクラスフィールドという仕様がありますが、Javaのようなアクセス修飾子とはやや様相が異なります。TypeScriptにはJava風のアクセス修飾子があります。';
'アクセス修飾子は、フィールド、コンストラクタ、メソッドに宣言することができます。';
'public';
'publicアクセス修飾子はどこからもアクセス可能です。アクセス修飾子を省略した場合もpublicを指定したものと同等として扱われます。';
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
var Animal = /** @class */ (function () {
    // コンストラクターにpublicアクセス修飾子
    function Animal(theName) {
        this.name = theName;
    }
    // メソッドにpublicアクセス修飾子
    Animal.prototype.move = function (distanceInMeters) {
        console.log("".concat(this.name, " moved ").concat(distanceInMeters, "m."));
        // publicアクセス修飾子である`this.name`を使用することが可能
    };
    return Animal;
}());
var gorilla = new Animal("ゴリラ");
gorilla.move(10);
gorilla.name = "ゴリラゴリラ";
gorilla.move(20);
'nameプロパティはpublic宣言されているため、インスタンスされた変数(gorilla)からの読み書きが可能になっています。「ゴリラ」から「ゴリラゴリラ」に変更することができます。';
'protected';
'protectedアクセス修飾子は自身のクラスとサブクラスからアクセス可能です。';
'Animalクラスmoveメソッドのアクセス修飾子をpublicからprotectedに変更しエラーを出してみます。';
var Animal2 = /** @class */ (function () {
    function Animal2(theName) {
        this.name = theName;
    }
    // `public`から`protected`に変更
    Animal2.prototype.move = function (distanceInMeters) {
        console.log("".concat(this.name, " moved ").concat(distanceInMeters, "m."));
    };
    return Animal2;
}());
var gorilla2 = new Animal2("ゴリラ");
// gorilla2.move(10);
'gorilla.move()メソッドはprotected宣言されているため、自身のクラスとサブクラスのみアクセスとなります。つまりインスタンスされたgorillaからはアクセスが拒否され、コンパイルエラーが発生します。';
'protectedで保護されたmove()メソッドを新たに実装し、10倍速く動くゴリラを作ってみます。';
var Animal3 = /** @class */ (function () {
    function Animal3(theName) {
        this.name = theName;
    }
    // `public`から`protected`に変更
    Animal3.prototype.move = function (distanceInMeters) {
        console.log("".concat(this.name, " moved ").concat(distanceInMeters, "m."));
    };
    return Animal3;
}());
var Gorilla = /** @class */ (function (_super) {
    __extends(Gorilla, _super);
    function Gorilla() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Gorilla.prototype.move = function (distanceInMeters) {
        _super.prototype.move.call(this, distanceInMeters * 10);
    };
    return Gorilla;
}(Animal3));
var gorilla3 = new Gorilla("速いゴリラ");
gorilla3.move(10);
'Animalスーパークラスを持つGorillaクラスを定義しmove()を実装しています。Gorillaクラスのmove()メソッド内でsuperキーワードを利用してスーパークラスのmove()メソッドを呼び出しています。';
'private';
'privateアクセス修飾子は自身のクラスのみアクセス可能です。';
'protected move()をprivate move()に変更してみます。privateに変更されたことによりGorillaクラスのsuper.moveにアクセスすることが許されずエラーとなります。';
var Animal4 = /** @class */ (function () {
    function Animal4(theName) {
        this.name = theName;
    }
    // `public`から`private`に変更
    Animal4.prototype.move = function (distanceInMeters) {
        console.log("".concat(this.name, " moved ").concat(distanceInMeters, "m."));
    };
    return Animal4;
}());
