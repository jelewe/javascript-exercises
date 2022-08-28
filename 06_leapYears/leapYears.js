const leapYears = function(year) {
    let leapYear = 1;
    if (year % 4 == 0) {
        year = 1
    } else {
        year = 0;
    }
return year === leapYear;
};

// Do not edit below this line
module.exports = leapYears;
