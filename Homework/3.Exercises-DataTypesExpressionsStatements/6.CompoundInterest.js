function compoundInterest([principalSum, interestRate, compoundingPeriod, totalTimespan ]){
    principalSum = Number(principalSum);
    interestRate = Number(interestRate);
    compoundingPeriod = Number(compoundingPeriod);
    totalTimespan = Number(totalTimespan);

    let inCp = ((interestRate / 100) / (12 / compoundingPeriod)) + 1;
    let nt = (12 / compoundingPeriod) * totalTimespan;

    let res = Math.round((principalSum * Math.pow(inCp, nt)) * 100) / 100;

    return res;
}