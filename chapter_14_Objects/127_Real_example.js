let config={};

config.browser="chrome"
config.timeout=3000
config.testname="Login Test"

console.log(config)

delete config.browser

if(config.browser==="chrome")
{
    console.log("I will execute my test case ")
}