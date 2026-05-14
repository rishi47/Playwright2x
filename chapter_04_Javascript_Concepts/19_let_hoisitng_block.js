let x="global";

if(true){

    // Temporal Dead Zone (TDZ) for 'x' starts here
    //TDZ ends here
    let x="block";
    console.log(x,"inside boock scope"); // block
}
 console.log(x,"referting to the outre scope");