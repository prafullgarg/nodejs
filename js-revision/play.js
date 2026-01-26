// Array and Object destructuring 
const person = {
    name: 'prafull',
    age: 29
} 

const hobbies = ['Music', 'Cooking', 'Coding']

const printName = ({ name }) => console.log(name);
printName(person)

const { name, age} = person
console.log ( name, age );

const [hobby1, hobby2] = hobbies
console.log(hobby1, hobby2)

