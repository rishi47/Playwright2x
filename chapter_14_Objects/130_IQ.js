

const user={
name:"John", age:30,email:"exmaple@mail.com"

}

console.log(user)
console.log(user.name)
console.log(user.age)

console.log(user["age"])

const key="age"
console.log(user[key])

const key1="name"
console.log(user[key1])  // dynamic porperty access

const eidchange="email"
console.log(user[eidchange])

//adding values in same 

user.city="Delhi"
user.age="29"

console.log(user);

let obj={name : "login"}
console.log(Object.getOwnPropertyDescriptors(obj,"name"))
// {
//   name: {
//     value: 'login',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }
// }