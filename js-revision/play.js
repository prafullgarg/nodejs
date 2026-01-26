// arrow functions allows to use properties of the object it is defined in using this keyword.
// const name = "garg"
const person = {
    name: 'prafull',
    age: 29,
    greet() { 
        console.log("Hi " + this.name)
    }
}

person.greet()