function magicMatrixes(input) {
    let matrix = new Array();
    for (let i = 0; i < input.length; i++) {
        let roww = input[i].trim().split(' ');
        matrix[i] = new Array();
        for (let j = 0; j < roww.length; j++) {
            matrix[i][j] = Number(roww[j]);
        }
    }

    let sums = new Array();
    let i = 0;
    for (let row = 0; row < input.length; row++) {
        let sum = 0;
        for (let col = 0; col < input.length; col++) {
            sum += matrix[row][col];
        }
        sums[i] = sum;
        i++;
    }

    for (let row = 0; row < input.length; row++) {
        let sum = 0;
        for (let col = 0; col < input.length; col++) {
            sum += matrix[col][row];
        }
        sums[i] = sum;
        i++;
    }

    for (let j = 0; j < sums.length - 1; j++) {
        if(sums[j] != sums[j + 1]){
            return false;
        }
    }

    return true;
}

console.log(magicMatrixes(['4 5 6', '6 5 4', '5 5 5']));
console.log(magicMatrixes(['11 32 45', '21 0 1', '21 1 1']));
console.log(magicMatrixes(['1 0 0', '0 0 1', '0 1 0']));