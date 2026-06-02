
function retry(testname , maxtries=3, delay=1000){
    console.log(`retrying ${testname} up to ${maxtries} times,${delay} ms apart`);
}

retry("Login Test");

retry("Reginstraion Test",5,2000);

