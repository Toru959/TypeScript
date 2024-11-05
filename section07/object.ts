
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