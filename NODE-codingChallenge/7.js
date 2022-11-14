const read = require('readline-sync');
var pname = read.question('Enter Passenger Name:');
var tmiles = read.question('Enter total miles travelled:');
// var flyerPoints = 0;
if (tmiles >= 10000 && tmiles < 20000) {
    flyerPoints = 10;
    console.log('flyer points:' + flyerPoints)
}
else
    if (tmiles >= 20000 && tmiles < 50000) {
        flyerPoints = 20;
        console.log('flyer points:' + flyerPoints)
    }
    else
        if (tmiles >= 50000 && tmiles < 100000) {
            flyerPoints = 30;
            console.log('flyer points:' + flyerPoints)
        }
        else
            if (tmiles >= 100000) {
                flyerPoints = 50;
                console.log('flyer points:' + flyerPoints)
            }
