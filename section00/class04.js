'メソッド戻り値のthis型とメソッドチェーン';
'fluent interface';
'fluent interfaceとは「流れるようなインターフェース」という意味で、method chaining(メソッドの連鎖)とういう小技をつかって、';
'可読性の高いコード実現するメソッドの作り方のことです。よくドメイン固有言語を提供するようなクラスを作るときに使われます。';
var Operator = /** @class */ (function () {
    function Operator(value) {
        this.value = value;
    }
    Operator.prototype.sum = function (value) {
        this.value += value;
    };
    Operator.prototype.subtract = function (value) {
        this.value -= value;
    };
    Operator.prototype.multiply = function (value) {
        this.value *= value;
    };
    Operator.prototype.divide = function (value) {
        this.value /= value;
    };
    return Operator;
}());
var op = new Operator(0);
op.sum(5); // 5
op.subtract(3); // 2
op.multiply(6); // 12
op.divide(3); // 4
'演算ごとにステートメントを分ける必要があります。このような場合メソッドチェーンを使って処理を連続させることができます。';
var Operator2 = /** @class */ (function () {
    function Operator2(value) {
        this.value = value;
    }
    Operator2.prototype.sum = function (value) {
        this.value += value;
        return this;
    };
    Operator2.prototype.subtract = function (value) {
        this.value -= value;
        return this;
    };
    Operator2.prototype.multiply = function (value) {
        this.value *= value;
        return this;
    };
    Operator2.prototype.divide = function (value) {
        this.value /= value;
        return this;
    };
    return Operator2;
}());
var op2 = new Operator2(0);
op2.sum(5).subtract(3).multiply(6).divide(3); // 4
