var fareA = [];
var input = require('readline-sync');

for (let i = 0; i < 5; i++) {
    var faree = input.question("enter the fare: ");
    fare = parseFloat(faree)
    fareA.push(fare);
}
console.log(fareA);


for (let i = 0; i < fareA.length; i++) {
    for (let j = 0; j < fareA.length - i - 1; j++) {
        if (fareA[j] > fareA[j + 1]) {
            var temp = fareA[j]
            fareA[j] = fareA[j + 1]
            fareA[j + 1] = temp
        }
    }
}
console.log("ascending order of array: \n");
console.log(fareA);
///////////////////////////////////////////////////////////////////
for (let i = 0; i < fareA.length; i++) {
    for (let j = 0; j < fareA.length - i - 1; j++) {
        if (fareA[j] < fareA[j + 1]) {
            var temp = fareA[j]
            fareA[j] = fareA[j + 1]
            fareA[j + 1] = temp
        }
    }
}
console.log("descending order of array: \n");
console.log(fareA);
//////////////////////////////////////////////////////////////////
const read = require('readline-sync')
let search = read.question('Enter fare for search: ');
let f = 0;
for (let i = 0; i < fareA.length; i++) {
    if (fareA[i] == search) {
        f = 1;
        break;
    }
    else {
        f = 0;
    }
}
if (f == 1) {
    console.log(search)
    console.log("Fare found");
}
else
    console.log("Fare not found");
/////////////////////////////////////////////////////////////////
for (let i = 0; i < fareA.length; i++) {
    for (let j = 0; j < fareA.length - i - 1; j++) {
        if (fareA[j] > fareA[i]) {
            max = fareA[j]
        }
        else {
            max = fareA[i]
        }
    }
}
console.log('Max fare:', max)

for (let i = 0; i < fareA.length; i++) {
    for (let j = 0; j < fareA.length - i; j++) {
        if (fareA[j] < fareA[i]) {
            min = fareA[j]
        }
        else {
            min = fareA[i]
        }
    }
}
console.log('Min fare:', min)
//////////////////////////////////////////////////////////////
dupArray = []
for (let i = 0; i < fareA.length; i++) {
    for (let j = i; j < i + 1; j++) {
        if (fareA[j] == fareA[j + 1]) {
            if (!(fareA[j] in dupArray)) {
                dupArray.push(fareA[j])
            }
        }
    }
}
console.log("\nDuplicated fare : ")
console.log(dupArray)