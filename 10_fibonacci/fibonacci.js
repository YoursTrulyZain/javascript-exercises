const fibonacci = function(number) {

    if(Number(number) < 0){

        return "OOPS";

    }else{

        let var1 = 0;
        let var2 = 1;
        let var3 = 1;

        for(let i = 1; i < Number(number); i++){

            var3 = var1 + var2;
            var1 = var2;
            var2 = var3;

        }

        return var3;

    }

};

// Do not edit below this line
module.exports = fibonacci;
