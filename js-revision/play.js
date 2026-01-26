// arrow functions allows to use properties of the object it is defined in using this keyword.
// const name = "garg"
const person = {
    name: 'prafull',
    age: 29,
    greet() { 
        console.log("Hi " + this.name)
    }
}

const hobbies = ['Music', 'Cooking', 'Coding']
// for (let hobby of hobbies){
//     console.log(hobby) 
// }

console.log(hobbies.map(hobby => 'Hobby ' + hobby));
console.log(person)
person.greet();