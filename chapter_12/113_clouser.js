function outer(){
    let message="Hello"
    console.log("outer call")
    function inner(){
        console.log(message);
    }
    return inner;
}

let fn_inner=outer();
fn_inner();