'JSX'
'JSX(JavaScript XML)は、コンポ―ネント指向のJavaScriptライブラリやフレームワーク(特にReact)で一般的に使用されている、JavaScriptの拡張構文です。'
'JSXを用いると、JavaScriptのコード内にHTMLタグのような構文が埋め込み可能となり、より直観的かつ読みやすい形でUIコードを表現することができます。それによって、開発社のコーディング体験や開発、デバッグの効率が上がります。'

'JSXとECMAScriptと違い'
'JavaScriptの文法はECMAScriptという言語使用で規定されています。一方、JSXはJavaScriptの構文を独自に拡張した言語です。'
'そのため、JSXはECMAScriptの言語使用に盛り込まれていない。ブラウザがJavaScriptエンジンを実装する場合は、ECMAScriptに準拠するため、ブラウザで直接JSXを解釈し、実行することができない現状があります。'
'この問題を解消するためには、JSXをブラウザが認識できるJavaScriptに変換するトランスパイルという過程が必要となる。'
'このトランスパイル作業を助けるツールとして、BabelやTypeScriptコンパイラーが使われます。'

'JSX構文'
'JSXでもっとも一般定期な形式は、ネスト可能な要素(タグ)を使ってコンポーネントを表現するものです。'
const element = <br />;
// 描写結果:　<br/>

'入れ子の要素'
'JSX要素はHTMLのようにネストすることができます。例えば, dir要素内に2っつのbr要素が根うsとされている状態を考える'
const element2 = (
    <div>
        <br />
        <br />
    </div>
);
// 描写結果:　<div><br/><br/></div>

'テキスト要素'
'JSX内では、要素に直接テキストを書くことができます。'
const element3 = <h1>I'm a text element.</h1>
// 描写結果:　<h1>I'm a text element.</h1>

'空白と要素'
'JSXでは、要素間のスペースは自動的に無視される。'
const element4 = (
    <p>
        This is a
        <strong>pen</strong>
        .
    </p>
);
// 描写結果: <p>This is a <strong>pen</strong>.</p>
'上記のコードは[This is apen]として[a]と[pen]の分かち書きがない状態でレンダリングされていまします。'
'これを回避するには、文字列をJavaScriptの式として書くことです。'
const element5 = (
    <p>
        This is a{" "}
        <strong>pen</strong>
        .
    </p>
);
'こうすると、正しく[This is a pen.]としてレンダリングされます。'

'属性'
'JSX属性の名前は、JavaScriptの命名規則に従いcamelCaseで記述することが推奨されています。この命名規則は、HTML内のアトリビュートとは異なる点に注意です。'

'標準HTML属性'
'JSXでは、HTML属性と同じように要素に属性を与えることができます。'
const element6 = <img src="image.jpg" alt="A beautiful scene" />
const element7 = <a href="http://example.com">Visit our website</a>

'ただし、class属性はJavaScriptの予約語であるために、かわりにclassNameを使用します。'
const element8 = <h1 className="greeting">Hello, World!</h1>;

'スタイル属性'
'HTMLでは、スタイル属性は一般的に文字列です。'
{/* <div style="background-color: yellow: color: blue;">Hello!</div> */}

'一方、JSXではスタイル属性はオブジェクトでなくてはならない'
{/* <div style={{ backgroundColor: "yellow", color: "blue" }}>hello!</div>; */}

'真偽属性'
'真偽属性は、要素に特定の特性を指定します。例えば、input要素には"disabled"というboolean型の属性があり、その値に真をしていするとinput要素は無効になります。'
const element9 = <input disabled />;

'属性の値として{true}をつけて明示的に指定することもできる。'
const element10 = <input disabled={true} />;

'しかし、一般的には属性値がtrueの場合、値の部分を省略することが推奨されます。このように記述すると、コードが短くシンプルになるためです。'
'したがって、上記の例のように属性名のみを指定することで、その属性を有効にすることができます。'

'式'
'JSX内では、JavaScriptの式を埋め込むことが可能です。これにより、動的な値をJSX内に簡単に導入することができます。'

'基本的な式'
'JavaScriptの式をJSX内部に埋め込むには、波カッコ{}を使います。'
const name = "Josh Perz";
const greeting = <h1>Hello, {name}</h1>;

'ここでは、JavaScriptの変数を埋め込んでいますが、っ式としての評価結果が挿入されるので、JavaScriptの演算やメソッドの呼び出しも可能です。'
const a = 10;
const b = 20;
const sum = <h1>{a + b}</h1>;

const name2 = "Josh Perez";
const greeting2 = <h1>Hello, {name.toUpperCase()}</h1>;



