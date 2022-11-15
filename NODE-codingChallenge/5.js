var flight_fare = [];
var input = require('readline-sync');

for (let i = 0; i < (5 * 2); i++) {
    if (i % 2 == 0) {
        var flight = parseFloat(input.question("enter the flight fare: "));
        flight_fare[i] = flight
    }
    else {
        flight_fare[i] = ' '
    }
}
console.log("Flight fare: ")
console.log(flight_fare);
