let response_Code=2010;


if(response_Code >=200 && response_Code<=299)
{
    console.log("GOT Success")
}


else if(response_Code >=300 && response_Code<=299)
{
    console.log("Redirection ")
}
else if(response_Code >=400 && response_Code<=499)
{
    console.log("Redirection ")
}
else if(response_Code >=500 && response_Code<=599)
{
    console.log("Redirection")
}
else
{
    console.log("Invalid API  code check again");
}