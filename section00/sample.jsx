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

