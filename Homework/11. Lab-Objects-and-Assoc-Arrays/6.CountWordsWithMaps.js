function countWordsWithMaps(input) {
    let text = input.join('\n').toLowerCase();
    let words = text.split(/[^A-Za-z0-9_]+/).filter(w => w != '');
    let wordsCount = new Map();

    for(let word of words){
        if(!wordsCount.has(word)) {
            wordsCount.set(word, 1);
        }else{
            let count = wordsCount.get(word);
            count++;
            wordsCount.set(word, count);
        }
    }

    let allWords = Array.from(wordsCount.keys()).sort();
    allWords.forEach(w =>
        console.log(`'${w}' -> ${wordsCount.get(w)} times`));
}

countWordsWithMaps(['JS and Node.js', 'JS again and again', 'Oh, JS?']);