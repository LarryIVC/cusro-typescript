export {}
// console.log('my name is Jhon')
// let num:number = 20
// // num= 'Jhon'
// num=55


// let age:number = 200
// const age:number = 200
// // age = 400
// const value:string = 'Jhon'
// console.log(age, value + 100)

//datatypes
// String
// Number
// Boolean
// Array
// null
// undefined
// Object


// let statement:boolean = true
// console.log(statement)

// const names:string[] = ['Jhon', 'Doe', 'Smith']
// console.log(names)

// const user: {name:string, age:number} = {
//   name: 'Jhon',
//   age: 20
// }

// console.log(user)

//Functions with anotations

// let a:number | string = "20"
// let a:any = true
// console.log(a)

// function userId(x:number):number {
// const userId = (x:number):number => {
//   return 20 +30 +x
// }

// console.log(userId(10))

// Interfaces

// interface User { Username: string; Age: number; email: string, UserId: () => string}

// const person: User = {
//   Username: 'Jhon',
//   Age: 20,
//   email: 'jhon@gmail.com',
//   UserId: function() {
//     return "Jhon"
//   }
// }


// console.log(person)

//Classes

// class user {
  
//   name : string
//   constructor(name) {
//     this.name = name
//   }
//   getName() {
//     console.log(this.name)
//   }
// }

// const person = new user('Larry')
// person.getName()

// Arrays

let colors: string[] = ['red', 'green', 'blue']
colors.push('yellow')
console.log(colors)

let shifted = colors.shift()
console.log(shifted)

colors.unshift('black')
console.log(colors)

let array1: number[] = [1,2,3,4,5]
let array2: number[] = [6,7,8,9,10]
let array3: number[] = array1.concat(array2)

console.log(array3)

let sliced: string[] = colors.slice(1,3)

console.log(sliced)