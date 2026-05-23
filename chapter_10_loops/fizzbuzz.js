
for(let start=1;start<=100;start++)
{

    if(start % 3===0 && start%5===0)
    {
        console.log("Fizz Buzz")
    }
    else if(start % 3==0)
    {
        console.log("Fizz ")
    }
    else if(start % 5===0)
    {
        console.log("Buzz")
    }
    else
    {
        console.log(start)
    }
}