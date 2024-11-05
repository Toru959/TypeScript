'プリミティブ以外はすべてオブジェクト'
'JavaScriptでは、プリミティブ型以外のものは全てオブジェクトです。オブジェクトには、クラスから作ったインスタンスだけでなく、クラスそのもや配列、正規表現もあります。'
'プリミティブ型は値が同じであれば、同一のモノと判定できますが、オブジェクトはプロパティのあたいが同じであっても、インスタンスが異なると同一のものとは判定されない。'
const value3 = 123;
const value4 = 123;
console.log(value3 == value4); // true

const object1 = { value: 123};
const object2 = { value: 123};
console.log(object1 == object2); // false

