var name = 'prafull';
var age  =  29;
var hobbies = true ;

//  function without parameters/arguments
function summerizeUser(userName, userAge, userHobbies) {
    if (userName) {
    return ('Name is ' + userName + ' age is ' +  userAge + ' user has hobbies ' + userHobbies) ;
    }
    else{
        return (name + " " + age + " " + " " + hobbies)
    }
}

console.log(summerizeUser());
console.log(summerizeUser(name, age, hobbies))
