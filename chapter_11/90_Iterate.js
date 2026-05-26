let arrars=["jump","lump","hump"];

for(let a=0;a<arrars.length;a++)
{
    console.log(arrars[a]);

}
console.log("---")


for (test of arrars){
    console.log(test)

    if(test%2==0)
    {
        console.log(test)
    }
}

console.log("---")

arrars.forEach((test,index) =>
{
    console.log(test,index)
});
console.log("---")

let students=["ram","shaym","kaam"];

for(let student in students)
{
    console.log(student,"->",students[student])
}
console.log("---")



for(let [i ,test] of students.entries()){

    console.log(i,test)
}