const getTheTitles = function(books) {

    let tempArray = [];

    for(let i = 0; i < books.length; i++){

        tempArray.push(books[i]["title"]);

    }

    return tempArray;

};

// Do not edit below this line
module.exports = getTheTitles;
