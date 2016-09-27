function oddNumbersToN([n]) {
    n = Number(n);

    for (let i = 1; i <= n; i++) {
        if(i % 2 != 0)  {
            console.log(i);
        }
    }
}

oddNumbersToN(['5']);
console.log();
oddNumbersToN(['4']);
console.log();
oddNumbersToN(['7']);