const leapYears = function(year) {
    let leapYear = 1;
    if (year % 4 == 0) {
        if (year % 100 != 0) {
            year = 1;
         } 
         else if (year % 400 == 0) {
                year = 1;
            } 
            else {
                year = 0;
            }
        }
        else {
            year = 0;
    } 
    return year === leapYear;
    }


// Do not edit below this line
module.exports = leapYears;
