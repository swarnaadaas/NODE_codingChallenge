var input = require('readline-sync');
passenger_age = []
generation = [];
const today_date = new Date();
for (let i = 0; i < 3; i++) {
  var date = new Date(input.question('enter the date of birth: '));
  var year = today_date.getFullYear() - date.getFullYear();
  passenger_age.push(year);
}
passenger_age.forEach((passenger_age)=>{
   if(passenger_age < 10){
       gen = 'kid'
       generation.push(gen);
   }
   else if(passenger_age > 10 && passenger_age < 30){
       gen = 'youth';
       generation.push(gen);
   }
   else if(passenger_age > 30 && passenger_age < 60){
       gen = ' adult';
       generation.push(gen);
   }
   else if(passenger_age > 60){
       gen = 'old';
       generation.push(gen);
   }
   
})
console.log(generation);



