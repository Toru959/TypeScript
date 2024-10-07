"use strict";
'アクセス修飾子 (access modifier)';
'JavaやPHPなどの言語では、フィールドやメソッドにprivate, protected, publicを指定できます。JavaScriptでもprivateのようなプロパティを実現するためにプライベートクラスフィールドという仕様がありますが、Javaのようなアクセス修飾子とはやや様相が異なります。TypeScriptにはJava風のアクセス修飾子があります。';
'アクセス修飾子は、フィールド、コンストラクタ、メソッドに宣言することができます。';
'public';
'publicアクセス修飾子はどこからもアクセス可能です。アクセス修飾子を省略した場合もpublicを指定したものと同等として扱われます。';
class Animal {
    name; // フィールドにpublicアクセス修飾子
    // コンストラクターにpublicアクセス修飾子
    constructor(theName) {
        this.name = theName;
    }
    // メソッドにpublicアクセス修飾子
    move(distanceInMeters) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
        // publicアクセス修飾子である`this.name`を使用することが可能
    }
}
const gorilla = new Animal("ゴリラ");
gorilla.move(10);
gorilla.name = "ゴリラゴリラ";
gorilla.move(20);
'nameプロパティはpublic宣言されているため、インスタンスされた変数(gorilla)からの読み書きが可能になっています。「ゴリラ」から「ゴリラゴリラ」に変更することができます。';
'protected';
'protectedアクセス修飾子は自身のクラスとサブクラスからアクセス可能です。';
'Animalクラスmoveメソッドのアクセス修飾子をpublicからprotectedに変更しエラーを出してみます。';
class Animal2 {
    name;
    constructor(theName) {
        this.name = theName;
    }
    // `public`から`protected`に変更
    move(distanceInMeters) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
const gorilla2 = new Animal2("ゴリラ");
// gorilla2.move(10);
'gorilla.move()メソッドはprotected宣言されているため、自身のクラスとサブクラスのみアクセスとなります。つまりインスタンスされたgorillaからはアクセスが拒否され、コンパイルエラーが発生します。';
'protectedで保護されたmove()メソッドを新たに実装し、10倍速く動くゴリラを作ってみます。';
class Animal3 {
    name;
    constructor(theName) {
        this.name = theName;
    }
    // `public`から`protected`に変更
    move(distanceInMeters) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
class Gorilla extends Animal3 {
    move(distanceInMeters) {
        super.move(distanceInMeters * 10);
    }
}
const gorilla3 = new Gorilla("速いゴリラ");
gorilla3.move(10);
'Animalスーパークラスを持つGorillaクラスを定義しmove()を実装しています。Gorillaクラスのmove()メソッド内でsuperキーワードを利用してスーパークラスのmove()メソッドを呼び出しています。';
'private';
'privateアクセス修飾子は自身のクラスのみアクセス可能です。';
'protected move()をprivate move()に変更してみます。privateに変更されたことによりGorillaクラスのsuper.moveにアクセスすることが許されずエラーとなります。';
class Animal4 {
    name;
    constructor(theName) {
        this.name = theName;
    }
    // `public`から`private`に変更
    move(distanceInMeters) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
// class Gorilla2 extends Animal4 {
//   move(distanceInMeters: number) {
//     super.move(distanceInMeters * 10);
//   }
// }
