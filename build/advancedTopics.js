"use strict";
// Inheritance
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
class Parent {
    constructor() {
        this.name = '';
    }
    setMyName(name) {
        this.name = name;
    }
}
class Child extends Parent {
    myName() {
        return this.name;
    }
}
const name1 = new Child();
name1.setMyName('Jhon');
console.log(name1.myName());
// Modules
console.log('Modules');
const login_1 = __importDefault(require("./login"));
const signup_1 = __importDefault(require("./signup"));
let login = new login_1.default();
let signup = new signup_1.default();
console.log(login.data);
console.log(signup.data);
console.log(signup.name);
// Explicit vs anotation
console.log('Explicit vs anotation');
// Void
console.log('Void');
// Unknow Type
console.log('Unknow');
