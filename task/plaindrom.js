let out=revString("madam","madam")
let ins=revString("abc","rat")

function revString(str,str1) {
    let result = "";

    for (const ch of str) {
        result = ch + result;
    }
    if(result===str1){
        console.log(`given ${str}" String match"`)
        return true;
    }
    else{
        console.log(`given ${str} String not match`)
         return false;
    }
}