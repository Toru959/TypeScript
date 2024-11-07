
'プリミティブ以外はすべてオブジェクト'
'JavaScriptでは、プリミティブ型以外のものは全てオブジェクトです。オブジェクトには、クラスから作ったインスタンスだけでなく、クラスそのもや配列、正規表現もあります。'
'プリミティブ型は値が同じであれば、同一のモノと判定できますが、オブジェクトはプロパティのあたいが同じであっても、インスタンスが異なると同一のものとは判定されない。'
const value3 = 123;
const value4 = 123;
console.log(value3 == value4); // true

const object1 = { value: 123};
const object2 = { value: 123};
console.log(object1 == object2); // false

'オブジェクトリテラル(object literal)'
'JavaScriptの特徴はオブジェクトリテラル{}という記法を用いて、簡単にオブジェトを生成できる点です。'
// 空っぽのオブジェクトを生成
const object3 = {};
// プロパティを指定しながらオブジェクトを生成
const person2 = { name: "Bob", age: 23};

'JavaやPHPなどの言語では、オブジェクトを生成するにはまずクラスを定義し、そのクラスを元にインスタンスを生成するのが普通ですが、JavaScriptはクラス定義が無くてもこのようにオブジェクトリテラルを書くと、オブジェクトをインラインで作れます。'
'オブジェクトリテラルがあるおかげで、JavaScriptでは自由度の大会コードが書けるようになっています。'
'次の例のように、JavaScriptでのObjectをnewすることでオブジェクトを作ることができでます。しかし、オブジェクトリテラルを使ったほうが端的で読みやすいコードになります。'
const person3 = new Object();
person.name = "Bob";
person.age = 23;

'ちなみに、広く使われるデータシリアライズ形式にJSONがあるのはご存じでしょう。JSONは多くのプログラミング言語で用いられていますが、JSONはJavaScriptObjectNotationの略で、JSONの由来はJavaScriptのオブジェクトリテラルにあります。'
'そして、JavaScriptではJSONをそのままオブジェクトリテラルとして解釈できます。'

'オブジェクトの型注釈'
'TypeScriptでオブジェクトの型注釈は、JavaScriptオブジェクトリテラルのような書き方で、オブジェクトプロパティをキーと値の型のペアを書きます。'
let box: { width: number; height: number};
box = { width: 1080, height: 720}

'オブジェクトの型注釈をしておくと、型の誤りをコンパイラーが警告してくれる'
let box2: { width: number; height: number};
//box2 = { width: "1080", height: 720} // error
//box2 = { width: 1080} // error

'プロパティの区切り文字には、オブジェクトリテラルのようにカンマ、も使えるが、セミコロンを用いるほうを推奨します。'
'オブジェクトの型注釈は途中で改行することもできます。改行した場合、プロパティの区切り文字は両尺できる'
let box3: {
    width: number;
    heigh: number;
};
box3 = { width: 1080, heigh: 720};

'インラインの型注釈の代わりに、型エイリアスを使った型注釈の書き方もできます。'
// 型エイリアス
type Box = { width: number; height: number};
let box4: Box = { width: 1080, height: 720};

'メソッドの型注釈'
'オブジェクトの型注釈には、メソッドの型注釈を書くこともできます。書き方はJavaScriptのメソッド構文にひきうすうと戻り値の型注釈を加えたようなものになります。'
let calculator: {
    sum(x: number, y: number): number;
};

calculator = {
    sum(x, y){
        return x + y;
    }
}

'メソッドの型注釈は関数構文の書き方でもできます。'
let calculator2: {
    sum: (x: number, y: number) => number;
}

'メソッド構文の型注釈と関数構文の型注釈は、基本的におfな字意味ですが、コンパイラーオプションのstrictFunctionTypesを有効にした場合に関数構文の書き方は、メソッド引数のチェックが厳格になる。'

'オブジェクトの型推論'
'オブジェクトの値を変数宣言で代入する場合、型注釈を省略できます。値から型が自動的に判別されます。これを型推論といいます。'
let box5 = { width: 1080, height: 730 };

'メソッドを持つオブジェクトリテラルでも型推論が働きます。但し、メソッドの場合は引数の型注釈は必要です。'
let calculator3 = {
    sum(x: number, y: number){
        return x + y;
    }
};
calculator3;