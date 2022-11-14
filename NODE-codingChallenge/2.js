const read = require('readline-sync');
var fare = read.question('enter fare:');
var time = read.question('enter time in 24 hr:');
if (time > 6 && time < 9) {
    fare = (parseInt(fare) * 10) / 100;
}
else
    if (time > 9 && time < 17) {
        fare = (parseInt(fare) * 20) / 100;
    }
    else
        if (time > 17 && time < 23) {
            fare = (parseInt(fare) * 7) / 100;
        }
        else
            if (time > 23 && time < 6) {
                fare = (parseInt(fare) * 5) / 100;
            }
console.log(fare)
