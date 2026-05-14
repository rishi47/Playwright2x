
let first_name="Ravi";

let fullname= `Hi ${first_name} Kumar`;

console.log(fullname)
 
let env="Staging"
env="prod"
const userId=12345;

const apiUrl=`https://api=${env}.tekion.com/users/${userId}`
console.log(apiUrl)

// Playwight 
const rowIndex= 3;
const columnName="email";
//await page.locator('data-row="${rowIndex}"][data-col="${columnName}"]').click();

//logs
const testName="login Test";
const status="FAILED"
const duartion=2.3;
console.log('[${status}] ${testName} completed in ${duartion}s');