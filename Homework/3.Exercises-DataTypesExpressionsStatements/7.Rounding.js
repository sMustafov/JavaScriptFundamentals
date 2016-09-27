function rounding([number, n]) {
    let r = 1;
    for (let i = 0; i < n; i++) {
        r = r * 10;
    }

    number =  Math.round(number * r) / r;

    return number;
}