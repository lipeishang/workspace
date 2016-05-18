function thousands_separators(num) {
    var separatedNum = getSeparate(num);
    var firstSeparatedNum = getFirstSeparatedNum(separatedNum);
    var addSeparatedNum= getAddSeparatedNum(firstSeparatedNum);
    return printThousands_separators(separatedNum,addSeparatedNum);
}

function getSeparate(num) {
    var separatedNum = [];

       separatedNum = num.toString().split(".");
    
    return separatedNum;
}

function getFirstSeparatedNum(separatedNum) {
    var firstSeparatedNum = [];

    firstSeparatedNum = separatedNum[0].split("");

    return firstSeparatedNum;
}

function getAddSeparatedNum(firstSeparatedNum) {
    var addSeparatedNum = [];
    var count = 0;

    for(var i = firstSeparatedNum.length - 1; i >= 0; i--){
        addSeparatedNum.push(firstSeparatedNum[i]);
        count++;
        if((count % 3) == 0 && (count < firstSeparatedNum.length)){
            addSeparatedNum.push(',');
        }
    }

    return addSeparatedNum;
}

function printThousands_separators(separatedNum,addSeparatedNum) {
    var finishedNumber = '';

    for(var i = addSeparatedNum.length - 1; i >= 0 ;i--){
        finishedNumber += addSeparatedNum[i];
    }

    if(separatedNum[1] === undefined) {

        return finishedNumber;
    }
    else

        return (finishedNumber + '.' + separatedNum[1]);
}

module.exports = thousands_separators;

