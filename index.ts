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
let a:any = true
console.log(a)

// function userId(x:number):number {
const userId = (x:number):number => {
  return 20 +30 +x
}

console.log(userId(10))
