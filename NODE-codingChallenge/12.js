var passArray = []
var destiArray = []
var input = require('readline-sync')
for (let i = 0; i < 2; i++) {
    var pname = input.question("Enter the passenger name: ")
    passArray.push(pname)
}
for (let i = 0; i < 2; i++) {
    var desti = input.question("Enter the passenger destination: ")
    destiArray.push(desti)
}
const combineArray = passArray.concat(destiArray);
console.log(combineArray);