function biggestNumber(input){
    let first = Number(input[0]);
    let second = Number(input[1]);
    let third = Number(input[2]);

    let biggestNum = Math.max(first, second, third);

    return biggestNum;
}

console.log(biggestNumber(['-10','-20','-30']));
console.log(biggestNumber(['43','43.2','43.1']));
console.log(biggestNumber(['-5','-2','7']));