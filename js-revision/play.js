const hobbies = ['Music', 'Cooking', 'Coding']
// for (let hobby of hobbies){
//     console.log(hobby) 
// }

// for reference types const only keeps the location and type const where variable is pointing it doesnt keep the value constent
hobbies.push('Programming')
console.log(hobbies.map(hobby => 'Hobby: ' + hobby));

const copyhobbies1 = hobbies.slice();
console.log(copyhobbies1);

// if using ... for breaing array in individual elements then its called spread operator.
const copyhobbies2 = [...hobbies]
console.log(copyhobbies2)

// if using ... for merging multiple arguments into single array then its called rest operator.
const toArray = (...args) => {
    return args;
}

console.log(toArray(1,2,3,45,56,2));