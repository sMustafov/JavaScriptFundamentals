function evenPositionElements(arr) {
    let res = [];
    for (let i in arr) {
        if (i % 2 == 0) {
            res.push(arr[i]);
        }
    }
    return res.join(' ');
}