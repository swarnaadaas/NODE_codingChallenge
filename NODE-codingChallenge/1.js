var passenger = [];
var read = require('readline-sync');

for (let i = 0; i < 10; i++) {
    var name = read.question("enter the name: ");
    passenger.push(name);
}
console.log(passenger);

//a)printing ascending order of array

for (let i = 0; i < passenger.length; i++) {
    for (let j = 0; j < passenger.length - i - 1; j++) {
        if (passenger[j] > passenger[j + 1]) {
            var temp = passenger[j]
            passenger[j] = passenger[j + 1]
            passenger[j + 1] = temp
        }
    }
}
console.log("ascending order of array: \n");
console.log(passenger);

//b)printing descending order of array

for (let i = 0; i < passenger.length; i++) {
    for (let j = 0; j < passenger.length - i - 1; j++) {
        if (passenger[j] < passenger[j + 1]) {
            var temp = passenger[j]
            passenger[j] = passenger[j + 1]
            passenger[j + 1] = temp
        }
    }
}
console.log("descending order of array: \n");
console.log(passenger);

//c)searching name

const read = require('readline-sync')
let search = read.question('Enter  name for search: ');
let s = 0;
for (let i = 0; i < passenger.length; i++) {
    if (passenger[i] == search) {
        s = 1;
        break;
    }
    else {
        s = 0;
    }
}
if (s == 1) {
    console.log(search)
    console.log("Passenger name  found");
}
else
    console.log("Passenger name not found");

//d)printing length

for (i = 0; i < passenger.length; i++) {
    console.log(passenger[i] + '-' + passenger[i].length);
}

//e)splitting

console.log("Splitted names : ")
spArray = [];
passenger.forEach((i) => {
    var spArray = i.split(' ')
    spArray.forEach((item) => {
        process.stdout.write(`${item}, `)
    })
})

//f)printing duplicates

for (let i = 0; i < passenger.length; i++) {
    for (let j = i; j < i + 1; j++) {
        if (passenger[j] == passenger[j + 1]) {
            if (!(passenger[j] in spArray)) {
                spArray.push(passenger[j])
            }
        }
    }
}
console.log("\nDuplicated name : ")
console.log(spArray)
/////////////////////////////////////////////////////
