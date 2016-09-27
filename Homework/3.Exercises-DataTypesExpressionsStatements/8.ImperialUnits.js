function imperialUnits([num]) {
    num = Number(num);
    let inches = Math.floor(num / 12);
    let feet = num % 12;

    let res = "" + inches + "'-" + feet + "\"";

    return res;
}