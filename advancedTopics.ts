// Inheritance

class Parent {
  name = ''
  setMyName(name: string) {
    this.name = name
  }
}

class Child extends Parent {
  
  myName() {
    return this.name
  }
}

const name1 = new Child()

name1.setMyName('Jhon')
console.log(name1.myName())

// Modules

console.log('Modules')

import myLogin from './login'
import mySignup from './signup'

let login = new myLogin()
let signup = new mySignup()

console.log(login.data)
console.log(signup.data)
console.log(signup.name)

// Explicit vs anotation

console.log('Explicit vs anotation')

// Void

console.log('Void')

// Unknow Type

console.log('Unknow')

