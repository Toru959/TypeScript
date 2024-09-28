"use strict";
const John = {
    name: 'John',
    role: 'front-end',
    follower: 200
};
function toUpperCase(x) {
    if (typeof x === 'string') {
        return x.toUpperCase();
    }
    return x;
}
const upperHello = toUpperCase('hello');
function describeProfile(nomadWorker) {
    console.log(nomadWorker.name);
    if ('role' in nomadWorker) {
        console.log(nomadWorker.role);
    }
    if ('follower' in nomadWorker) {
        console.log(nomadWorker.follower);
    }
}
class Dog {
    kind = 'dog'; //  tag
    speak() {
        console.log('bow-bow');
    }
}
class Bird {
    kind = 'bird'; // tag
    speak() {
        console.log('tweet-tweet');
    }
    fly() {
        console.log('flutter');
    }
}
function havePet(pet) {
    pet.speak();
    switch (pet.kind) {
        case 'bird':
            pet.fly();
        case 'dog':
            pet.speak();
    }
    if (pet instanceof Bird) {
        pet.fly();
    }
}
havePet(new Bird());
havePet(new Dog());
// 型アサーション
const input = document.getElementById('input');
// const input = document.getElementById('input') as HTMLInputElement;
input.value = 'initial input value';
const designer = {
    name: 'John',
    role: 'web',
    age: '24'
};
const downloadedData = {
    id: 1
};
// downloadedData.userがundefinedかnullだったらundefinedを返す
console.log(downloadedData.user?.name?.first);
// downloadedData.userがundefinedかnullだったらno-userを代入する
const userData = downloadedData.user ?? 'no-user';
