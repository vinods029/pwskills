

function highestScore(marks){

    HighestNumber = marks[0];

    for (let i =0 ; i < marks.length ;i++ ){

        HighestNumber = (marks[i] > HighestNumber) ? marks[i] : HighestNumber;
    }
    return HighestNumber;

    
}

