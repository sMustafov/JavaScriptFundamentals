function triangleOfDollars([n]) {
    for (let i = 1; i <= n; i++) {
        console.log('$'.repeat(i));
    }
}

triangleOfDollars(['3']);
console.log();
triangleOfDollars(['4']);
console.log();
triangleOfDollars(['8']);