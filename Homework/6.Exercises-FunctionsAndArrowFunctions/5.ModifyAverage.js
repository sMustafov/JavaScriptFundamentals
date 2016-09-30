function modifyAverage([num]) {
    let res = 0;
    let count = num.length;
    for (let i = 0; i < count; i++) {
        let digit = Number(num[i]);
        res += digit;
    }

    if(res / count > 5){
        console.log(num);
    }else{
        while (res / count <= 5) {
            num += '9';
            count++;
            res = 0;
            for (let i = 0; i < count; i++) {
                let digit = Number(num[i]);
                res += digit;
            }
        }

        console.log(num);
    }
}