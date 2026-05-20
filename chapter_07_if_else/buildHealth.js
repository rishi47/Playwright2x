let build_Health=100;


if(build_Health>100)
{
    console.log("Stable Build Greeen ")
}

else if (build_Health<=99 && build_Health >=90 )
{
     console.log(" (Stable )investigate failures")
}
else if (build_Health < 89 && build_Health > 70)
{
    console.log("Stable Build Greeen ")
}
else if (build_Health < 70)
{
    console.log("Build broken")
}
else 
{
    console.log("Something error")
}
