const convertToCelsius = function(fTemp) {

  let cTemp = ((fTemp - 32) * (5/9));

  if(cTemp){
    return Number(cTemp.toFixed(1));
  }else{
    return 0;
  }
  
};

const convertToFahrenheit = function(cTemp) {

  let fTemp = (cTemp * (9/5) + 32);

  if(fTemp){
    return Number(fTemp.toFixed(1));
  }else{
    return 0;
  }

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
