const input = require('readline-sync')
const fs = require('fs')
let n = input.question("Total number of passengers : ")
let over = []
let asc = []
let total = 0
for (let i = 1; i <= n; i++) {
    let we = input.question("Enter total weigth for " + i + "th passenger : ")
    we = we - 23;
    let amt = we * 15
    over.push(amt)

} console.log("Total weights : " + over)

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
        if (over[j] > over[j + 1]) {
            temp = over[j + 1];
            over[j + 1] = over[j];
            over[j] = temp;
        }
    }
}
for (let i = 0; i < n; i++) {
    asc.push(over[i])
    total += over[i]

}
console.log("Weights after sorting : ")
console.log(asc);
console.log("Total overweight : " + total)
let charge = total * 15
console.log("Total additional charge : " + charge)

