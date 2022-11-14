const read = require('readline-sync');
var fareArray = [];
var destiArray = [];
m = 1
for (let i = 0; i <= m; i++) {
    var fare = read.question('Enter fare:');
    var desti = read.question('Enter destination:');
    fareArray.push(fare);
    destiArray.push(desti);
}
var index = read.question('enter any number between 0 and' + m + ':');
for (let i = 1; i <= m; i++) {
    if (index == i) {
        console.log("selected details\n")
        console.log('fare:', +fareArray[i])
        console.log('destination:' + destiArray[i])
    }
}

