'async';
'Promiseを利用した非同期処理をより簡単に書ける構文としてasync/awaitが存在します。';
'この構文を利用することで、非同期処理をより同期処理と同じような文脈で書くことができるようになります。';
'async/awaitは基本セットで使いますが、本ページではasyncを主に取り上げます。';
'async関数、asyncメソッド';
'関数、メソッドの前にasyncキーワードをつけると、たとえその関数内でPromiseが返されていなくても、戻り値の型をPromiseで包んで返します。async関数、メソッドの中ではawaitキーワードを使うことができます。awaitについてはawaitのページをご参照ください。';
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
'async関数の宣言';
'JavaScriptには3つの関数の宣言方法がありますが、それらをasync関数として宣言することもできます。';
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
'async関数、メソッドをreject(拒否)する';
'async関数、メソッドを拒否するためにはasync関数、メソッド内でthrowを使うだけです。';
// async function requestAsync(): Promise<number> {
//   throw new Error("error");
// }
'これでrequestAsyncが返すPromiseはreject(拒否)されます。';
'await';
'Promiseを利生した非同期処理より簡単に書ける構文としてasync/awaitが存在します。';
'この構文を利用することで、非同期処理と同じような文脈で書くことができるようになる。';
'awaitはPromiseの値が解決されるまで実行を待機して、解決された値を返します。';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// 1秒後に値を返す
function request() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("hello");
        }, 1000);
    });
}
// この書き方はできない
// const result = await request();
// console.log(result);
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request()];
                case 1:
                    result = _a.sent();
                    console.log(result);
                    return [2 /*return*/];
            }
        });
    });
}
main();
'async/awaitで書き直す';
'最後に3つのAPI呼び出しのコードをasync/awaitを利用して書き直してみます。';
'このようにasync/awaitを利用することで、非同期の処理を同期処理のようにすっきり書くことができる';
// 非同期でAPIにリクエストを投げて値を取得する処理
function request1() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(1);
        }, 1000);
    });
}
// 受け取った値を別のAPIにリクエストを投げて値を取得する処理
function request2(result1) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(result1 + 1);
        }, 1000);
    });
}
// 受け取った値を別のAPIにリクエストを投げて値を取得する処理
function request3(result2) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(result2 + 1);
        }, 1000);
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var result1, result2, result3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request1()];
                case 1:
                    result1 = _a.sent();
                    return [4 /*yield*/, request2(result1)];
                case 2:
                    result2 = _a.sent();
                    return [4 /*yield*/, request3(result2)];
                case 3:
                    result3 = _a.sent();
                    console.log(result3); // 4
                    return [2 /*return*/];
            }
        });
    });
}
main();
