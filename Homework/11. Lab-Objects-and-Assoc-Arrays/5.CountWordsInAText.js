function countWordsInAText(input) {
    let text = input.join('\n');
    let words = text.split(/[^A-Za-z0-9_]+/).filter(w => w != '');
    let wordsCount = {};
    for (let word of words) {
        if(wordsCount[word] == undefined){
            wordsCount[word] = 1;
        }else{
            wordsCount[word]++;
        }
    }

    return JSON.stringify(wordsCount);
}

console.log(countWordsInAText(['JS and Node.js', 'JS again and again', 'Oh, JS?']));