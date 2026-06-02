//function as normal
function validateStatusCode(status){
    if(status>=200 && status<=300)
    {
        console.log("Reqiest is Fine")
    }
}
//function as expression 
let ok=validateStatusCode(220)

const validateStatusCode_Exp=function(status)
{
    if(status>=200 && status<=300)
    {
        console.log("Reqiest is Fine")
    }
}

//  arrow Function
const validateStatusCode_Arrow=(Status) =>{
     if(status>=200 && status<=300)
    {
        console.log("Reqiest is Fine")
    }
}