"use strict";
// Access modifiers
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class newUser {
    constructor() {
        this.name = "";
    }
    setMyName(name) {
        this.name = name;
    }
    displayName() {
        console.log(this.name);
    }
    getLength() {
        console.log(this.name.length);
    }
}
let user1 = new newUser();
user1.setMyName('Jhon');
user1.displayName();
// user1.name = 'Doe' -> no se puede por private
user1.setMyName('Doe');
user1.displayName();
// user1.getLength() -> no se puede por private
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greeting() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
let person1 = new Person('Jhon', 30);
person1.greeting();
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = 'This is the fetched data';
            resolve(data);
        }, 2000);
    });
}
fetchData()
    .then(data => {
    console.log("Data received: ", data);
})
    .catch(err => {
    console.log(err);
});
// Promises whit async/await
function fetchDataAsync() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let data = yield fetchData();
            console.log("Data received with async await: ", data);
        }
        catch (error) {
            console.log(error);
        }
    });
}
fetchDataAsync();
