const name = 'prafull';
let age  =  29;
const hobbies = true ;

//  name function can be created withor without function keyword, fucntion without function keywords are arrow functions.
const summerizeUser = (userName, userAge, userHobbies) => {
    if (userName) {
    return ('Name is ' + userName + ' age is ' +  userAge + ' user has hobbies ' + userHobbies) ;
    }
    else{
        return (name + " " + age + " " + " " + hobbies)
    }
}

// const add = (a,b) => {
//     return a + b ;
// } 
// if function is has onle single line return statment then it can be written as

const add = (a,b) => a + b;

console.log(add(1,2))
console.log(summerizeUser(name, age, hobbies))
