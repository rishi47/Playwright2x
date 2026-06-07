const user={name:"Jhon",age:30,city:"NYC"}

//Baisc Destructuring
const{name,age}=user
console.log(name)
console.log(age)

const{name:userName,age:userAge}=user;

console.log(userName)
console.log(userAge)

// Destructuring
const {age:userage}=user ;
console.log(userage)

const {country="USA"}=user
console.log(country)

const data=
{
 username:
    {
        name:"John",City:
        {ssn:"112"}
    }

}

const {username:{City:{ssn}}}=data

console.log(data.username)
console.log(data.username.City)
