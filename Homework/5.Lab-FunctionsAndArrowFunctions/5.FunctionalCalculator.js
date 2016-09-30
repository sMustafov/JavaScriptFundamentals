function functionalCalculator([a, b, operator]) {
    let calculate = function(a, b, operator) {
        return operator(a, b);
    };

    [a, b] = [a, b].map(Number);

    let add = function(a, b) {
        return a + b;
    };
    let subtract = function(a, b) {
        return a - b;
    };
    let product = function(a, b) {
        return a * b;
    };
    let division = function(a, b) {
        return a / b;
    };

    switch (operator) {
        case '+' : console.log(calculate(a,b,add));
            break;
        case '-' : console.log(calculate(a,b,subtract));
            break;
        case '*' : console.log(calculate(a,b,product));
            break;
        case '/' : console.log(calculate(a,b,division));
            break;
    }
}