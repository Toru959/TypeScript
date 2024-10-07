'constructor shorthand'
'メソッドの引数にはアクセス修飾子を設定することはできないがコンストラクタは特別です。'
class constructorInAccessModifier {
    constructor(
        arg0: number,
        public arg1: number,
        protected arg2: number,
        private arg3: number
    ){
        console.log({ arg0, arg1, arg2, arg3 });
    }
}

class constructorOutAccessModifier {
    public arg1: number;
    protected arg2: number;
    private arg3: number;
    constructor(arg0: number, arg1: number, arg2: number, arg3: number){
        this.arg1 = arg1;
        this.arg2 = arg2;
        this.arg3 = arg3;

        console.log({ arg0, arg1, arg2, arg3 });
    }
}

'TypeScriptで記述する際は、各アクセス修飾子のスコープ機能が有効になるため、インスタンスからのアクセスが可能なプロパティはpublic宣言されたものだけ'
