function figureOf4Squares([n]) {
    n = Number(n);
    let wall;
    
    if(n % 2 == 0){
        wall = (n - 4) / 2;
    }else{
        wall = (n - 3) / 2;
    }
    
    console.log('+' + '-'.repeat(n - 2) + '+' + '-'.repeat(n - 2) + '+');
    for (let i = 0; i < wall; i++) {
        console.log('|' + ' '.repeat(n - 2) + '|' + ' '.repeat(n - 2) + '|');
    }
    console.log('+' + '-'.repeat(n - 2) + '+' + '-'.repeat(n - 2) + '+');
    for (let i = 0; i < wall; i++) {
        console.log('|' + ' '.repeat(n - 2) + '|' + ' '.repeat(n - 2) + '|');
    }
    console.log('+' + '-'.repeat(n - 2) + '+' + '-'.repeat(n - 2) + '+');
}