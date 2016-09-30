function firstAndLastKNumbers(arr) {
    let k = Number(arr[0]); // shift
    console.log(arr.slice(1, k + 1).join(' ')); // and start from 0 to k
    console.log(arr.slice(arr.length-k,
        arr.length).join(' '));
}