const read = require('readline-sync');
var fareArray = []
var fareEven = []
var fareOdd = []
let l = 4;
let fare;
for (i = 0; i < l; i++) {
    fare = read.question('Enter flight fare :')
    fareArray.push(fare)
}
console.log(fareArray)
for(i=0; i<=l; i++){
if ((i % 2) == 0) {
    fareEven.push(fareArray[i])
}
else {
    fareOdd.push(fareArray[i])
}
}
console.log('Even fare array:' + fareEven)
console.log('Odd fare array:' + fareOdd)