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
