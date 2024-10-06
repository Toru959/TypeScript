'async'
'Promiseを利用した非同期処理をより簡単に書ける構文としてasync/awaitが存在します。'
'この構文を利用することで、非同期処理をより同期処理と同じような文脈で書くことができるようになります。'
'async/awaitは基本セットで使いますが、本ページではasyncを主に取り上げます。'

'async関数、asyncメソッド'
'関数、メソッドの前にasyncキーワードをつけると、たとえその関数内でPromiseが返されていなくても、戻り値の型をPromiseで包んで返します。async関数、メソッドの中ではawaitキーワードを使うことができます。awaitについてはawaitのページをご参照ください。'
// async function requestAsync(): Promise<number> {
//     return 1;
// }

// // requestAsyncはこれと同じ
// function request(): Promise<number> {
//     return new Promise((resolve) => {
//       resolve(1);
//     });
// }  

// const fetchAsync = async (): Promise<number> => {
// return 1;
// };

// class UserRepository {
//     async find(id: string): Promise<User> {
//         const { name, age } = await findById(id);

//         return {
//             id, name, age,
//         };
//     }
// }


'async関数の宣言'
'JavaScriptには3つの関数の宣言方法がありますが、それらをasync関数として宣言することもできます。'

// async function requestAsync1(): Promise<number> {
//   return 1;
// }
 
// const requestAsync2 = async function (): Promise<number> {
//   return 1;
// };
 
// const requestAsync3 = async (): Promise<number> => {
//   return 1;
// };


// 'async関数、メソッドの戻り値'
// 'async関数はPromiseを戻り値として返すことも可能です。このときPromise<Promise<T>>のようにPromiseが二重に包まれることはなく、Promise<T>となります。'

// async function requestAsync(): Promise<number> {
//   return new Promise((resolve) => {
//     resolve(1);
//   });
// }
 
// requestAsync().then((result) => {
//   console.log(result);
//   // @log: 1
// });

'async関数、メソッドをreject(拒否)する'
'async関数、メソッドを拒否するためにはasync関数、メソッド内でthrowを使うだけです。'

// async function requestAsync(): Promise<number> {
//   throw new Error("error");
// }
'これでrequestAsyncが返すPromiseはreject(拒否)されます。'


'await'
'Promiseを利生した非同期処理より簡単に書ける構文としてasync/awaitが存在します。'
'この構文を利用することで、非同期処理と同じような文脈で書くことができるようになる。'
'awaitはPromiseの値が解決されるまで実行を待機して、解決された値を返します。'
// 1秒後に値を返す
// function request(): Promise<string> {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve("hello");
//       }, 1000);
//     });
// }
  
// この書き方はできない
// const result = await request();
// console.log(result);

// async function main() {
// const result = await request();
// console.log(result);
// // @log: "hello"
// }

// main();


'async/awaitで書き直す'
'最後に3つのAPI呼び出しのコードをasync/awaitを利用して書き直してみます。'
'このようにasync/awaitを利用することで、非同期の処理を同期処理のようにすっきり書くことができる'
// 非同期でAPIにリクエストを投げて値を取得する処理
// function request1(): Promise<number>{
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(1);
//         }, 1000);
//     });
// }

// // 受け取った値を別のAPIにリクエストを投げて値を取得する処理
// function request2(result1: number): Promise<number>{
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(result1 + 1);
//         }, 1000);
//     });
// }

// // 受け取った値を別のAPIにリクエストを投げて値を取得する処理
// function request3(result2: number): Promise<number>{
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(result2 + 1);
//         }, 1000);
//     });
// } 

// async function main(){
//     const result1 = await request1();
//     const result2 = await request2(result1);
//     const result3 = await request3(result2);
//     console.log(result3); // 4
// }

// main();


// 'Promiseを直接awaitする'
// '関数を作らずにPromiseを直接awaitすることもできる'
// async function main(){
//     await new Promise((resolve) => {
//         setTimeout(() => {
//             resolve
//         }, 1000);
//     });
// }

'async関数をawaitする'
// async function request(): Promise<number>{
//     return "hello";
// }

// async function main(){
//     const result = await request();
//     console.log(result);
// }

'awaitした時の型注釈'
'Promise, async関数の戻り値の型注釈はPromise<T>のTになる'
// async function request(): Promise<string>{
//     return "hello";
// }
// async function main(){
//     const result: string = await request();
//     // stringになる
//     console.log(result);
//     // "hello"
// }

'then-catchをtry-catchに書き換える'
'Promiseのthenとcatchをtry-catchに書き換えることができます。'
async function request(): Promise<string>{
    return "hello";
}

function main1(){
    request()
        .then((result: string) => {
            console.log(result);
        })
        .catch((error: unknown) => {
            console.log(error);
        });
}

async function main2(){
    try {
        const result: string = await request();
        console.log(result);
    } catch (error: unknown){
        console.log(error);
    }
}