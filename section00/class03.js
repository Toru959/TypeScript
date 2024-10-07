'constructor shorthand';
'メソッドの引数にはアクセス修飾子を設定することはできないがコンストラクタは特別です。';
var constructorInAccessModifier = /** @class */ (function () {
    function constructorInAccessModifier(arg0, arg1, arg2, arg3) {
        this.arg1 = arg1;
        this.arg2 = arg2;
        this.arg3 = arg3;
        console.log({ arg0: arg0, arg1: arg1, arg2: arg2, arg3: arg3 });
    }
    return constructorInAccessModifier;
}());
var constructorOutAccessModifier = /** @class */ (function () {
    function constructorOutAccessModifier(arg0, arg1, arg2, arg3) {
        this.arg1 = arg1;
        this.arg2 = arg2;
        this.arg3 = arg3;
        console.log({ arg0: arg0, arg1: arg1, arg2: arg2, arg3: arg3 });
    }
    return constructorOutAccessModifier;
}());
'TypeScriptで記述する際は、各アクセス修飾子のスコープ機能が有効になるため、インスタンスからのアクセスが可能なプロパティはpublic宣言されたものだけ';
'クラスのreadonly修飾子';
'TypeScriptではフィールドにreadonly修飾子をつけると、そのフィールドを読み取り専用にできる。';
'読み取り専用フィールドは、コンストラクタかフィールド初期化子でのみ値を代入できます。';
var Octopus = /** @class */ (function () {
    function Octopus() {
        this.legs = 8; // フィールド初期化子での代入はOK
        this.name = "たこちゃん"; // コンストラクタ―での代入はOK
    }
    return Octopus;
}());
'読み取り専用フィールドは、再代入しようとするとコンパイルエラーになる';
var octopus = new Octopus();
// octopus.legs = 16; // Error
'メソッド内の処理であっても、読み取り専用フィールドへの再帰代入は許されない';
var Octopus2 = /** @class */ (function () {
    function Octopus2() {
        this.name = "たこちゃん";
    }
    Octopus2.prototype.setName = function (newName) {
        // this.name = newName;  // Error
    };
    return Octopus2;
}());
