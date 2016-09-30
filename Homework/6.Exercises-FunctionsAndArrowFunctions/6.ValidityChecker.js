function validityChecker([x1, y1, x2, y2]) {
    let x = 0;
    let y = 0;
    x1 = Number(x1);
    y1 = Number(y1);
    x2 = Number(x2);
    y2 = Number(y2);

    let d1 = Math.sqrt(Math.pow((x1 - x), 2) + Math.pow((y1 - y), 2));
    let d2 = Math.sqrt(Math.pow((x2 - x), 2) + Math.pow((y2 - y), 2));
    let d3 = Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));

    if(parseInt(d1) === d1){
        console.log('{' + x1 + ', ' + y1 + '}' + ' to ' + '{' + x + ', ' + y + '}' + ' is valid');
    }else{
        console.log('{' + x1 + ', ' + y1 + '}' + ' to ' + '{' + x + ', ' + y + '}' + ' is invalid');
    }
    if(parseInt(d2) === d2) {
        console.log('{' + x2 + ', ' + y2 + '}' + ' to ' + '{' + x + ', ' + y + '}' + ' is valid');
    }else{
        console.log('{' + x2 + ', ' + y2 + '}' + ' to ' + '{' + x + ', ' + y + '}' + ' is invalid');
    }
    if(parseInt(d3) === d3){
        console.log('{' + x1 + ', ' + y1 + '}' + ' to ' + '{' + x2 + ', ' + y2 + '}' + ' is valid');
    }else{
        console.log('{' + x1 + ', ' + y1 + '}' + ' to ' + '{' + x2 + ', ' + y2 + '}' + ' is invalid');
    }
}