function DNAHelix([n]) {
    n = Number(n);

    let arr = ['AT', 'CG', 'TT', 'AG', 'GG'];

    for (let i = 0; i < n; i++) {
        let l = letterChoose(i);
        let letter = arr[l];
        if(i % 4 == 0){
            console.log('**' + letter[0] + letter[1] + '**');
        }else if(i % 4 == 1){
            console.log('*' + letter[0] + '--' + letter[1] + '*');
        }else if (i % 4 == 2){
            console.log(letter[0] + '----' + letter[1]);
        }else if(i % 4 == 3){
            console.log('*' +  letter[0] + '--' + letter[1] + '*');
        }
    }


    function letterChoose(i) {
        if(i % 5 == 0){
            return 0;
        }else if(i % 5 == 1){
            return 1;
        }else if(i % 5 == 2){
            return 2;
        }else if(i % 5 == 3){
            return 3;
        }else if(i % 5 == 4){
            return 4;
        }
    }
}