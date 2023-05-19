const sumAll = function(number1, number2) {

    if(((typeof number1) != "number") || ((typeof number2) != "number") || (number1 < 0) || (number2 < 0)){

        return "ERROR";

    }else{

        let totalSum = 0;
        let i;
        let j;

        if(number1 < number2){

            i = number1;
            j = number2;

        }else {

            i = number2;
            j = number1;

        }

        for(i; i <= j; i++) {

            totalSum += i;

        }

        return totalSum;

    }
};

// Do not edit below this line
module.exports = sumAll;
