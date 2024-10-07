'メソッド戻り値のthis型とメソッドチェーン'
'fluent interface'
'fluent interfaceとは「流れるようなインターフェース」という意味で、method chaining(メソッドの連鎖)とういう小技をつかって、'
'可読性の高いコード実現するメソッドの作り方のことです。よくドメイン固有言語を提供するようなクラスを作るときに使われます。'
class Operator {
    protected value: number;

    public constructor(value: number){
        this.value = value;
    }

    public sum(value: number): void {
        this.value += value;
    }

    public subtract(value: number): void {
        this.value -= value;
    }

    public multiply(value: number): void {
        this.value *= value;
    }

    public divide(value: number): void {
        this.value /= value;
    }
}

const op: Operator = new Operator(0);
op.sum(5); // 5
op.subtract(3); // 2
op.multiply(6); // 12
op.divide(3); // 4


'演算ごとにステートメントを分ける必要があります。このような場合メソッドチェーンを使って処理を連続させることができます。'
class Operator2 {
    protected value: number;

    public constructor(value: number){
        this.value = value;
    }

    public sum(value: number): Operator2 {
        this.value += value;
        return this;
    }

    public subtract(value: number): Operator2 {
        this.value -= value;
        return this;
    }

    public multiply(value: number): Operator2 {
        this.value *= value;
        return this;
    }

    public divide(value: number): Operator2 {
        this.value /= value;
        return this;
    }
}

const op2: Operator2 = new Operator2(0);
op2.sum(5).subtract(3).multiply(6).divide(3); // 4

'op.sum(), op.subtrawect(), op.multiply(), op.divide()の戻り値の型をOperatort2に変更しました。'
'これによりメソッドチェーンが可能になりました。'
'ここで、このクラスOperator2を拡張して累乗の計算を追加したいとします。すると新しいクラスNewOperatorは次のようになる。'
class NewOperator extends Operator2 {
    public constructor(value: number){
        super(value);
    }

    public power(value: number): NewOperator {
        this.value **= value;
        return this;
    }
}

'ですが、このクラスでは次の演算ができない'
const op3: NewOperator = new NewOperator(2);
// op3.power(3).multiply(2).power(3);

'これはop.multiply()の戻り値がOperator2だからです。Operatorにはpower()というメソッドがないためこのような問題が発生します。'
'このような時、戻り値にthisを設定することができます。上記のクラスの戻り値のOperator2, NewOperatorを全てthisに置き換えると問題が解消されます。'
