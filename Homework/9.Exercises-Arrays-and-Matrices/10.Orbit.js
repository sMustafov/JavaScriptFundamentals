function orbit(input) {
    let rows = 0;
    let cols = 0;
    let x = 0;
    let y = 0;

    let filled = [];
    let index = 1;
    let numbers = [];

    for (let i = 0; i < input.length; i++) {
        let rowsCols = input[i].trim().split(' ');
        if (i == 0) {
            rows = Number(rowsCols[0]);
            cols = Number(rowsCols[1]);
        }else{
            x = Number(rowsCols[0]);
            y = Number(rowsCols[1]);
        }
    }

    // fill the matrix with zeroes
    let matrix = new Array();
    for (let i = 0; i < rows; i++) {
        matrix[i] = [];
        for (let j = 0; j < cols; j++) {
            matrix[i][j] = 0;
        }
    }

    // cell at x,y equals to 1
    let num = 1;
    matrix[x][y] = num;

    let isNotReady = true;
    num++;
    while(isNotReady) {


        x--;
        y--;
        if (x < rows && y < cols && x >= 0 && y >= 0 && matrix[x][y] == 0) {
            matrix[x][y] = num;
            filled.push(x);
            filled.push(y);
            numbers.push(num);
        }
        x++;
        if (x < rows && y < cols && x >= 0 && y >= 0 && matrix[x][y] == 0) {
            matrix[x][y] = num;
            filled.push(x);
            filled.push(y);
            numbers.push(num);
        }
        x++;
        if (x < rows && y < cols && x >= 0 && y >= 0 && matrix[x][y] == 0) {
            matrix[x][y] = num;
            filled.push(x);
            filled.push(y);
            numbers.push(num);
        }
        y++;
        if (x < rows && y < cols && x >= 0 && y >= 0 && matrix[x][y] == 0) {
            matrix[x][y] = num;
            filled.push(x);
            filled.push(y);
            numbers.push(num);
        }
        y++;
        if (x < rows && y < cols && x >= 0 && y >= 0 && matrix[x][y] == 0) {
            matrix[x][y] = num;
            filled.push(x);
            filled.push(y);
            numbers.push(num);
        }
        x--;
        if (x < rows && y < cols && x >= 0 && y >= 0 && matrix[x][y] == 0) {
            matrix[x][y] = num;
            filled.push(x);
            filled.push(y);
            numbers.push(num);
        }
        x--;
        if (x < rows && y < cols && x >= 0 && y >= 0 && matrix[x][y] == 0) {
            matrix[x][y] = num;
            filled.push(x);
            filled.push(y);
            numbers.push(num);
        }
        y--;
        if (x < rows && y < cols && x >= 0 && y >= 0 && matrix[x][y] == 0) {
            matrix[x][y] = num;
            filled.push(x);
            filled.push(y);
            numbers.push(num);
        }

        x = filled.shift();
        y = filled.shift();
        numbers.shift();

        var allEqual = arr => arr.every( v => v == num )
        if(allEqual(numbers)){
            num++;
        }
        if(filled.length == 0){
            isNotReady = false;
        }
    }



    let res = '';
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (c == 0) {
                res += matrix[r][c];
            } else {
                res += ' ' + matrix[r][c];
            }
        }
        console.log(res);
        res = '';
    }
}

//orbit(['5 5', '2 2']);
orbit(['4 4', '0 0']);
//orbit(['3 3', '2 2']);