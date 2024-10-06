'アクセス修飾子 (access modifier)';
'JavaやPHPなどの言語では、フィールドやメソッドにprivate, protected, publicを指定できます。JavaScriptでもprivateのようなプロパティを実現するためにプライベートクラスフィールドという仕様がありますが、Javaのようなアクセス修飾子とはやや様相が異なります。TypeScriptにはJava風のアクセス修飾子があります。';
'アクセス修飾子は、フィールド、コンストラクタ、メソッドに宣言することができます。';
'public';
'publicアクセス修飾子はどこからもアクセス可能です。アクセス修飾子を省略した場合もpublicを指定したものと同等として扱われます。';
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
