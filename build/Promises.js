"use strict";
// Access modifiers
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
