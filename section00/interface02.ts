'オープンエンドと宣言マージ'
'JavaやPHPなど、ほかの言語にもinterface構文がある言語があります。TypeScriptのinterfaceには、'
'オープンエンドと宣言マージという珍しい特徴があります。'

'ほかの言語のinterface構文は、同じ名前のインターフェースを宣言するとエラーになるものが多いです。たとえば、PHPでFooインターフェースを2つ宣言すると、エラーになる'
'TypeScriptでは、同じ名前のインターフェースを宣言してもエラーにはならない'
interface foo {}
interface foo{} // エラーにならない
'これがオープンエンド'

'同じなまえのインターフェースを宣言した場合、それぞれのインターフェースの型がマージされます。例えば、プロパティaをもつインターフェースと、プロパティbをもつインターフェースを宣言した場合を考える'
interface Foo {
    a: number;
}
interface Foo {
    b: number;
}

'この宣言は、プロパティaとプロパティbをもつインターフェースを、ひとつ定義したことと同じになる'
interface Foo {
    a: number;
    b: number;
}
'このように同じ名前のインターフェースがマージされる仕組みを宣言マージという'


'インターフェースとinstanceof'
'instanceof演算子は、オブジェクトがクラスのインスタンスかを判定するJavaScriptの演算子です'
'ここでは、interfaceof演算子がTypeScriptのインターフェースとどのような関係にあるのかを解説する'

'TypeScriptはinstanceofインターフェース名で型をはんてすることはできない。コンパイルエラーになる'
'なぜかというと、インターフェースがTypeScrtipt固有のきのうでコンパイル時にコードから消えるためです。インターフェースは型レベルのモノです。'
'コンパイル時に消えるということは、JavaScript実行時にインターフェースの情報が、どこにもないので、エラーになる'

'インターフェースの判定には型ガード関数をつかう'
'実行時に値にインターフェースと互換しているかを判定するには、型ガード関数を使用します。'
interface Student {
    name: string;
    grade: number;
}

// function isStudent(valur: unknown): value is Student {
//     if(typeof value !== "object" || value === null){
//         return false;
//     }
//     const { name, grade } = value as Record<keyof Student, unknown>;
//     if(typeof name !== "string"){
//         return false;
//     }
//     if(typeof grade !== "number"){
//         return false;
//     }
// }

// const tom: object = { name: "Tom", grade: 2 };
// if(isStudent(tom)){
//     tom;
// }

'複雑なインターフェースの判定はzodが便利'
'型ガード関数の例として、上でisStudentの実装を示しましたが、中身を見てみるとプロパティーごとに型を判定するロジックが必要なのが分かります。プロパティーが少なければ、型ガード関数の実装は短く保守可能な範囲に収まりますが、プロパティーが多くなると保守困難なコードになると想像されます1。'
'そのようなケースで便利なのがzodです。zodはオブジェクトの構造をチェックするライブラリで、TypeScript向けに作られています。zodでは、オブジェクトの構造を定義すると、構造をチェックする型ガード関数が得られます。次は、isStudentをzodで実装した例です。'
// import z from "zod";

// // zodによるスキーマの定義
// const studentSchema = z.object({
//   name: z.string(),
//   grade: z.number(),
// });
// // インターフェースの型を導出
// type Student = z.infer<typeof studentSchema>;
// // 型ガード関数
// function isStudent(value: unknown): value is Student {
//   return studentSchema.safeParse(value).success;
// }
// // 型の判定
// const tom: object = { name: "Tom", grade: 2 };
// if (isStudent(tom)) {
//   tom;
// }
'zodを用いると、宣言的なコードになることで、型ガード関数の細かい実装を自分で書かなくてよくなることがわかるかと思います。プロパティーの数が多いインターフェースや、プロパティーがネストされて構造化されたインターフェースの型ガード関数が必要になった場合は、zodの導入を検討してみるといいでしょう。'

'抽象クラスとinstanceof' 
'TypeScriptにはインターフェースの似たものに抽象クラスがあります。抽象クラスはインターフェースと異なり、instanceof演算子が使えます。これは、抽象クラスはコンパイルしても、クラスとして残るためです'
// abstract class AbstractClass {}
// class ConcreateClass extends AbstractClass{}
// const obj = new ConcreateClass();
// console.log(obj instanceof AbstractClass);


