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