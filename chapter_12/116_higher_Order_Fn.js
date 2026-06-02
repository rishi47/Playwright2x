// higher order function 

function runwithlogin(testFn,testName){

    console.log(`Starting: ${testName}`)
    let result=testFn();
    console.log(`Finished: ${testName}->${result}`);
    return result;
}

function loginTest(){
    return "pass";
}

function loginTestFailed(){
    return "Fail";
}

runwithlogin(loginTest,"Login Test");
runwithlogin(loginTestFailed,"Dashbaord failes  Test");