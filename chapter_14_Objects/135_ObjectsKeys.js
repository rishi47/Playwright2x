const obj={a:1,b:2,c:3}

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

const username = {
    name: "jhon",
    age: 30
};

for (const key in username) {
    console.log(`${key}: ${username[key]}`);
}

Object.keys(username).forEach(key=>{
    console.log(key)
});