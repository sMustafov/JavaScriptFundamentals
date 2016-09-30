function PrintEveryNthElementFromAnArray(input) {
    let n = Number(input[input.length - 1]);

    for (let i = 0; i < input.length - 1; i+=n) {
        console.log(input[i]);
    }
}

PrintEveryNthElementFromAnArray(['5', '20', '31', '4', '20', '2']);
PrintEveryNthElementFromAnArray(['dsa', 'asd', 'test', 'tset', '2']);
PrintEveryNthElementFromAnArray(['1', '2', '3', '4','5','6']);