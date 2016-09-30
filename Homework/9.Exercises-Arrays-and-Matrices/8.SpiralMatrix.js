function spiralMatrix(input) {
    let a = input[0].split(' ');
    let x = Number(a[0]);
    let y = Number(a[1]);

    let matrix = [];
    for (let i = 0; i < x; i++) {
        matrix[i] = [];
        for (let j = 0; j < y; j++) {
            matrix[i][j] = 0;
        }
    }

    let row = 0;
    let col = 0;
    let direction = "right";
    let maxRotations = x * y;

    for (let i = 1; i <= maxRotations; i++){
        if (direction == "right" && (col > y - 1 || matrix[row][col] != 0)) {
            direction = "down";
            col--;
            row++;
        }
        if (direction == "down" && (row > x - 1 ||  matrix[row][col] != 0))
        {
            direction = "left";
            row--;
            col--;
        }
        if (direction == "left" && (col < 0 ||  matrix[row][col] != 0))
        {
            direction = "up";
            col++;
            row--;
        }

        if (direction == "up" && (row < 0 ||  matrix[row][col] != 0))
        {
            direction = "right";
            row++;
            col++;
        }

        matrix[row][col] = i;

        if (direction == "right")
        {
            col++;
        }
        if (direction == "down")
        {
            row++;
        }
        if (direction == "left")
        {
            col--;
        }
        if (direction == "up")
        {
            row--;
        }
    }

    // Display Matrix

    let res = '';
    for (let r = 0; r < x; r++) {
        for (let c = 0; c < y; c++) {
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

spiralMatrix(['4 13']);
//spiralMatrix(['3 3']);