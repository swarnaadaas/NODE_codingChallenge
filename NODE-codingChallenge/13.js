const readline = require("readline-sync");
var fnumber = 0;
var fnumbers = [];
console.log("Enter flight numbers:")
while (true) {
    fnumber = readline.question();
    if (fnumber == "q") {
        break;
    }
    else {
        fnumbers.push(fnumber);
    }
}
console.log(fnumbers);