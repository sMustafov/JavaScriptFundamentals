function splitAStringWithADelimiter([str, delimiter]) {
    let arr = str.split(delimiter);

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}