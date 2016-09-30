function cookingByNumbers(input) {
    let number = Number(input[0]);
    for (let i = 1; i < input.length; i++) {
        switch (input[i]){
            case 'chop' :
                number /= 2;
                console.log(number);
                break;
            case 'dice' :
                number = Math.sqrt(number);
                console.log(number);
                break;
            case 'spice' :
                number += 1;
                console.log(number);
                break;
            case 'bake' :
                number *= 3;
                console.log(number);
                break;
            case 'fillet' :
                let n = (number / 100) * 20;
                number -= n;
                console.log(number);
                break;
        }
    }
}