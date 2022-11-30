const input = require('readline-sync')
const fs = require('fs')
let input = input.question("Enter an alphabet(F,W,Q,N,A) : ")
{
    if (input == 'F') {
        for (let i = 101; i <= 110; i += 2) {
            // if(i%2!=0)
            process.stdout.write('F' + i + "  ")
        }
    }

    if (input == 'W') {
        for (let i = 100; i <= 110; i += 2) {
            process.stdout.write('W' + i + "  ")
        }
    }

    if (input == 'Q') {
        for (let i = 100; i <= 110; i += 2) {
            process.stdout.write('W' + i + "  ")
        }
    }
}