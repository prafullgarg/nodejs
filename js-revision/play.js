const name = 'prafull';
// let changes the scoping behaviour of the variable.
let age  =  29;
const hobbies = true ;

//  function without parameters/arguments
function summerizeUser(userName, userAge, userHobbies) {
    if (userName) {
    return ('Name is ' + userName + ' age is ' +  userAge + ' user has hobbies ' + userHobbies) ;
    }
    else{
        return (name + " " + age + " " + " " + hobbies)
    }
}

// name = "garg"
// age = "prafull"
// console.log (age)

console.log(summerizeUser());
console.log(summerizeUser(name, age, hobbies))
