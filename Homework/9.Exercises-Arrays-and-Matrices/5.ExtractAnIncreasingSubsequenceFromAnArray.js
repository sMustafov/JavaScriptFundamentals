function extractAnIncreasingSubsequenceFromAnArray(input) {
    let arr = new Array();
    let resArr = new Array();

    for (let i = 0; i < input.length; i++) {
        arr.push(Number(input[i]));
    }

    let first = arr[0];
    resArr.push(first);

    for (let i = 1; i < arr.length; i++) {
        if(arr[i] >= first){
            first = arr[i];
            resArr.push(first);
        }
    }

    for (let i = 0; i < resArr.length; i++) {
        console.log(resArr[i]);
    }
}

//extractAnIncreasingSubsequenceFromAnArray(['1', '3', '8', '4', '10', '12', '3', '2', '24']);
extractAnIncreasingSubsequenceFromAnArray(['1', '1', '1', '1', '1', '12', '3', '2', '24']);
//extractAnIncreasingSubsequenceFromAnArray(['1', '2', '3', '4']);
//extractAnIncreasingSubsequenceFromAnArray(['20', '3', '2', '15', '1']);