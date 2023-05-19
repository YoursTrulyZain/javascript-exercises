const leapYears = function(year) {
    
    //(Years divisible by 4 and not divisible by 100) or (Years divisible by 100 and divisible by 400)
    if(((year % 4 == 0) && !(year % 100 == 0) ) || ((year % 100 == 0) && (year % 400 == 0))){

        return true;

    }else{

        return false;

    }
};

// Do not edit below this line
module.exports = leapYears;

