'Promiseがなかった時代のこと'
// API1. 非同期でAPIにリクエストを送って値を取得する処理
// function request1(callback) {
//     setTimeout(() => {
//       // 1 は適当な例、なんでもいいです
//       callback(1);
//     }, 1000);
// }
//   // API2. 受け取った値を別のAPIにリクエストを送って値を取得する処理
// function request2(result1, callback) {
//     setTimeout(() => {
//       callback(result1 + 1);
//     }, 1000);
// }
//   // API3. 受け取った値を別のAPIにリクエストを送って値を取得する処理
// function request3(result2, callback) {
//     setTimeout(() => {
//       callback(result2 + 2);
//     }, 1000);
// }

// request1((result1) => {
//     request2(result1, (result2) => {
//       request3(result2, (result3) => {
//         console.log(result3);
//         // @log: 4
//       });
//     });
// });


'Promiseが解決してくれること'
// 非同期でAPIにリクエストを投げて値を取得する処理
// function request1() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(1);
//       }, 1000);
//     });
// }

// // 受け取った値を別のAPIにリクエストを投げて値を取得する処理
// function request2(result1) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//         resolve(result1 + 1);
//         }, 1000);
//     });
// }

// // 受け取った値を別のAPIにリクエストを投げて値を取得する処理
// function request3(result2) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//         resolve(result2 + 2);
//         }, 1000);
//     });
// }

// request1()
//     .then((result1) => {
//     return request2(result1);
//     })
//     .then((result2) => {
//     return request3(result2);
//     })
//     .then((result3) => {
//     console.log(result3);
//     // @log: 4
//     });


'TypeScriptでPromise'
'Promiseとジェネリクスを伴いPromise<T>と書きます。TにはPromiseが履行された(fulfilled)ときに返す値の型を指定します。'
type User = {
    name: string;
    age: number;
};

function getUser(): Promise<User> {
return new Promise((resolve) => {
    const user: User = {
    name: "太郎",
    age: 10,
    };
    resolve(user);
});
}

getUser().then((user: User) => {
console.log(user);
// @log: { "name": "太郎", "age": 10 }
});

'Promiseのメソッド'
'Promise<T>には覚えておくべきメソッドが３つあります。'

'待ち受けた非同期処理の結果をコールバックで実行する - Promise.prototype.then()'
'Promise<T>が履行された(fulfilled)ときに呼び出されます。引数に使われるコールバックの第1引数はT型の値です。'
'コールバックの戻り値としてS型またはPromise<S>型の値を返すとPromise<S>型を返します。'

// const promise1: Promise<number> = Promise.resolve(1);
// const promise2: Promise<string> = promise1.then((value) => `${value}`);

'上記例はPromise.prototype.then()のたびに新しく定数を定義していますが。上述のとおりPromise.prototype.then()でメソッドチェーンできます。'

// const promise: Promise<boolean> = Promise.resolve("1")
//   .then((value) => Number(value)) // Promise<number>型になる
//   .then((value) => value > 0); // Promise<boolean>型になる

'待ち受けた非同期処理の拒否の結果をコールバックで実行する - Promise.prototype.catch();'
'Promise<T>が拒否された(rejected)ときに呼び出されます。引数に使われるコールバックの第1引数はany型の値です。'
'これもコールバックの戻り値としてS型またはPromise<S>型の値を返すとPromise<S>型を返します。'

// const promise1: Promise<number> = Promise.reject(new Error());
// const promise2: Promise<string> = promise1.catch((e) => e.message);
'Promise.prototype.catch()はPromiseが履行されている状態だと実行されません。そのためPromise.prototype.catch()のあとにPromise.prototype.then()をつなげると実行されたときの型と実行されなかったときの型の両方を考える必要があります。'

// Promise.resolve(1)
//   .catch(() => {
//     return "1";
//   })
//   // string | number型になる
//   .then((value: string | number) => {
//     console.log(value);
//   });

'待ち受けた非同期処理が終了次第コールバックを実行する - Promise.prototype.finally()'
'Promise<T>が決定された(settled)ときに呼び出されます。コールバックに引数はありません。'
'このメソッドは戻り値を設定することはできません。'
'Promise.prototype.finally()はES2018になって追加されました。'

'Promiseの静的メソッド'
'静的メソッドでも覚えておくべき大事なメソッドがあります。'

'すべての非同期処理の結果を待ち受ける - Promise.all()'
'第1引数に要素がPromiseの配列を取り、それらの実行結果を非同期で待ち受けます。戻り値はPromiseが解決される時間にかかわらず配列に与えられた順番どおりにPromiseの結果が返ります。'

// function request1(): Promise<number> {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(1);
//     }, 4000);
//   });
// }
 
// function request2(): Promise<number> {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(2);
//     }, 2000);
//   });
// }
 
// function request3(): Promise<number> {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(3);
//     }, 1000);
//   });
// }
 
// Promise.all([request1(), request2(), request3()]).then(([num1, num2, num3]) => {
//   // request1が一番終了するまで遅いが結果の順番は保持され、num1がrequest1の結果になる
//   console.log(num1, num2, num3);
//   // @log: 1, 2, 3
// });