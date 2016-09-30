function negativePositiveNumbers(arr) {
    arr = arr.map(Number);
    let res = [];
    for (num of arr) {
        if (num < 0){
            res.unshift(num);
        }
        else{
            res.push(num);
        }
    }
    console.log(res.join('\n'));
}