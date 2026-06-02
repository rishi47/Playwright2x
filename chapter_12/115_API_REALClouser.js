function makeretry(max)
{
    let attempts=0;
    function tryagain(testnname)
    {
        attempts++;
        if(attempts>max)
        {
            return `${testnname} exceeded max retries (${max})`;
        }
        return `Attempt ${attempts}/${max} for ${testnname}`;
    }
    return tryagain;
}

let retry=makeretry(3);
console.log(retry("Login"));
console.log(retry("Login"));
console.log(retry("Login"));
console.log(retry("Login"));
console.log(retry("Login"));