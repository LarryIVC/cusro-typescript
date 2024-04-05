// Access modifiers

class newUser {
  private name = ""

  setMyName(name: string) {
    this.name = name
  }

  displayName() {
    console.log(this.name)
  }

  private getLength() {
    console.log(this.name.length)
  }

}

let user1 = new newUser()

user1.setMyName('Jhon')
user1.displayName()
// user1.name = 'Doe' -> no se puede por private
user1.setMyName('Doe')
user1.displayName()
// user1.getLength() -> no se puede por private

class Person {
  name: string
  age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  greeting() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
  }
}

let person1 = new Person('Jhon', 30)
person1.greeting()

function fetchData(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = 'This is the fetched data'
      resolve(data)
    }, 2000)
  }
  )
}

fetchData()
  .then(data => {
    console.log("Data received: ", data)
  })
  .catch(err => {
    console.log(err)
  })

  // Promises whit async/await

  async function fetchDataAsync() {
    try {
      let data = await fetchData()
      console.log("Data received with async await: ", data)      
    } catch (error) {
      console.log(error) 
    }
  }

  fetchDataAsync()