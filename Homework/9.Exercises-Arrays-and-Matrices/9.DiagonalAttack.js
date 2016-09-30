function diagonalAttack(input) {
    let matrix = new Array();
    for (let i = 0; i < input.length; i++) {
        let row = input[i].trim().split(' ');
        matrix[i] = new Array();
        for (let j = 0; j < row.length; j++) {
            matrix[i][j] = Number(row[j]);
        }
    }

    let leftSum = 0;
    let rightSum = 0;

    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input.length; j++) {
           if(i == j){
               rightSum += Number(matrix[i][j]);
           }
        }
    }

    for (let i = 0; i < input.length; i++) {
        leftSum += matrix[i][input.length - 1 - i];
    }

    let resArr = new Array();

    for (let i = 0; i < input.length; i++) {
        resArr[i] = [];
        for (let j = 0; j < input.length; j++) {
            resArr[i][j] = 0;
        }
    }

    if(rightSum == leftSum) {
        for (let i = 0; i < input.length; i++) {
            for (let j = 0; j < input.length; j++) {
                if (i != j) {
                    resArr[i][j] = rightSum;
                } else {
                    resArr[i][j] = matrix[i][j];
                }
            }
        }

        for (let i = 0; i < input.length; i++) {
            resArr[i][input.length - 1 - i] = matrix[i][input.length - 1 - i];
        }

        let res = '';
        if (rightSum == leftSum) {
            for (let i = 0; i < input.length; i++) {
                for (let j = 0; j < input.length; j++) {
                    if(j == 0){
                        res += resArr[i][j];
                    }else{
                        res += ' ' + resArr[i][j];
                    }
                }
                console.log(res);
                res = '';
            }
        }
    }else{
        let res = '';
        for (let i = 0; i < input.length; i++) {
            for (let j = 0; j < input.length; j++) {
                if(j == 0){
                    res += matrix[i][j];
                }else{
                    res += ' ' + matrix[i][j];
                }
            }
            console.log(res);
            res = '';
        }
    }
}

diagonalAttack(['5 3 12 3 1', '11 4 23 2 5', '101 12 3 21 10', '1 4 5 2 2', '5 22 33 11 1']);
//diagonalAttack(['1 1 1', '1 1 1', '1 1 0']);