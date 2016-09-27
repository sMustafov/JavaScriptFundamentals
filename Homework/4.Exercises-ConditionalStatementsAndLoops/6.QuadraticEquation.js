function quadraticEquation([a, b, c]) {
    a = Number(a);
    b = Number(b);
    c = Number(c);

    let d = Math.pow(b, 2) - (4 * a * c);

    if (d > 0) {
        let x1 = (-b + Math.sqrt(d)) / (2 * a);
        let x2 = (-b - Math.sqrt(d)) / (2 * a);
        console.log(x2);
        console.log(x1);
    }else if(d == 0){
        let x = -b  / (2 * a);
        console.log(x);
    }else{
        console.log('No')
    }
}

quadraticEquation(['6', '11', '-35']);
quadraticEquation(['1', '-12', '36']);
quadraticEquation(['5', '2', '1']);