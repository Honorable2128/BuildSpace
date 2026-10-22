function analyseNumber(number){
    let sign;
    if(number > 0){
        sign = "Positive"
    } else if(number < 0){
        sign = "Negative"
    } else{
        sign = "Zero"
    }

    // check even or odd

    let parity;
    if(Number.isInteger(number)){
        if(number % 2 === 0){
            parity = "Even"
        } else{
            parity = "Odd"
        }
    } else{
        parity = "Not Applicable"
    }

    // check integer or decimal

    let type;
    if(Number.isInteger(number)){
        type="Integer"
    } else{
        type = "Decimal"
    }

    console.log(`${sign}| ${parity} | ${type}`);
    
}

analyseNumber(25);
analyseNumber(-8);
analyseNumber(0);
analyseNumber(12);
analyseNumber(-7);
analyseNumber(3.5);
analyseNumber(-2.8);
analyseNumber(100);
analyseNumber(-15);
analyseNumber(0.75);
