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

