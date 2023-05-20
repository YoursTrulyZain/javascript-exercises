const people = [
    {
      name: "Carly",
      yearOfBirth: 1066,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

const findTheOldest = function(people) {

    let oldestPersonIndex = -1;
    let oldestPersonAge = -1;
    let currentPersonAge;
    const todayYear = new Date().getFullYear();

    for(let i = 0; i < people.length; i++){

        if(people[i]["yearOfDeath"]){

            currentPersonAge = people[i]["yearOfDeath"] - people[i]["yearOfBirth"]; 

        }else{

            currentPersonAge = Number(todayYear) - Number(people[i]["yearOfBirth"]);

        }

        if(currentPersonAge > oldestPersonAge){

            oldestPersonAge = currentPersonAge;
            oldestPersonIndex = i;

        }

    }

    return people[oldestPersonIndex];

};

findTheOldest(people);

// Do not edit below this line
module.exports = findTheOldest;
