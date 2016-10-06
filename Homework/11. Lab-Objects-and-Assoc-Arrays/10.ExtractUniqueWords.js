function extractUniqueWords(input) {
    let wordPattern = /\b[a-zA-Z]+\b/g;
    let words = new Set();

    for (let sentence of input) {
        let matches = sentence.match(wordPattern)
        matches.forEach(x=>words.add(x.toLowerCase()));

    }

    console.log([...words.values()].join(", "));
}


extractUniqueWords(['JS and Node.js', 'JS again and again', 'Oh, JS?']);