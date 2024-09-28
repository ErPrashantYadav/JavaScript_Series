const accountId = 211224
let accountEmail = "prashant@google.com"
var accountPassword = "12345"
accountCity = "Kathmandu"
let accountState;

// accountId = 2 // not allowed


accountEmail = "py@hp.com"
accountPassword = "121212"
accountCity = "Siraha"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])