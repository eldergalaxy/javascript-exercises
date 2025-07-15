const leapYears = function(number) {

    if (number % 100 === 0 && number % 400 != 0) {
        console.log(number + ' is not a leap Year')
    }else{
        if (number % 400 === 0) {
            console.log(number + ' is a leap year')
        }else{
            if (number % 4 === 0) {
            console.log(number + ' is a leap Year');
            }else{
                console.log(number + " is not a leap year.");
            }
            }
        }

    };

    

leapYears(1900);
// Do not edit below this line
module.exports = leapYears;
