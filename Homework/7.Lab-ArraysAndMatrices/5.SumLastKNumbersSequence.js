function sumLastKNumbersSequence([n, k]) {
    n = Number(n);
    k = Number(k);
    let res = [];
    res[0] = 1;
    for (let i = 1; i < n; i++) {
        let len;
        if(k > res.length){
            len = res.length
        }else{
            len = k;
        }
        res[i] = 0;
        for (let j = i - len; j < i; j++) {
            res[i] += res[j];
        }
    }

    console.log(res.join(' '));
}